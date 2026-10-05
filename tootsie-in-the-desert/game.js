// Tootsie in the Desert: match-three engine and screens.
(function () {
  'use strict';

  const N = 8;
  const NIGHTS = window.NIGHTS;
  const W = window.WORDS;
  const NE = window.NE, U = NE.ui, B = window.BRANCHES || {};
  const nd = n => NE.digits(n);
  const neTitle = n => NE.nights[n.key][0], neLabel = n => NE.nights[n.key][1];
  const reduceMotion = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const T = reduceMotion ? { swap: 60, pop: 80, fall: 90 } : { swap: 170, pop: 230, fall: 220 };
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  const $ = s => document.querySelector(s);
  const rnd = n => Math.floor(Math.random() * n);
  // 070′: report what happens to the invisible observer (seventy.js). Never blocks play.
  const O = (type, d) => { try { if (window.o7o) window.o7o.observe(type, d); } catch (e) {} };

  // ---------- storage (best effort) ----------
  const store = {
    get(k, d) { try { const v = localStorage.getItem('tootsie.' + k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem('tootsie.' + k, JSON.stringify(v)); } catch (e) {} },
  };
  let unlocked = store.get('unlocked', 0);
  let starsBy = store.get('stars', {});

  // ---------- screens ----------
  const screens = ['title', 'nights', 'story', 'play', 'result', 'finale', 'about'];
  function show(id) {
    screens.forEach(s => { $('#' + s).hidden = s !== id; });
    window.scrollTo(0, 0);
  }

  function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }
  function paras(text) { return text.split(/\n\n+/).map(p => '<p>' + esc(p) + '</p>').join(''); }
  function tileHTML(e) { return '<span class="em' + (e === '🍈' ? ' purple' : '') + '">' + e + '</span>'; }

  // ---------- nights list ----------
  function renderNights() {
    const list = $('#nightList');
    list.innerHTML = NIGHTS.map((n, i) => {
      const locked = i > unlocked;
      const st = starsBy[n.key] || 0;
      return '<li><button class="night" data-i="' + i + '"' + (locked ? ' disabled aria-label="Locked: ' + esc(n.title) + '"' : '') + '>' +
        '<span class="night-icon">' + (locked ? '🔒' : tileHTML(n.icon)) + '</span>' +
        '<span class="night-text"><span class="eyebrow">' + esc(neLabel(n)) + ' · ' + esc(n.label) + ' · TPD ' + esc(n.draft) + '</span>' +
        '<span class="night-title">' + esc(neTitle(n)) + '</span><span class="night-en">' + esc(n.title) + '</span></span>' +
        '<span class="night-stars" aria-label="' + st + ' of 3 stars">' + '★'.repeat(st) + '<span class="dim">' + '★'.repeat(3 - st) + '</span></span>' +
        '</button></li>';
    }).join('');
  }
  $('#nightList').addEventListener('click', e => {
    const b = e.target.closest('button.night');
    if (b && !b.disabled) openStory(+b.dataset.i);
  });

  // ---------- story card ----------
  let cur = 0;
  function openStory(i) {
    cur = i;
    const n = NIGHTS[i];
    $('#storyEyebrow').textContent = neLabel(n) + ' · ' + n.label + ' · TPD ' + n.draft;
    $('#storyTitle').innerHTML = esc(neTitle(n)) + ' <span class="en">' + esc(n.title) + '</span>';
    $('#storyText').innerHTML = paras(n.intro.text);
    $('#storySrc').textContent = n.intro.src;
    $('#storyHint').innerHTML = esc(NE.hints[n.key]) + '<br><span class="en">' + esc(n.hint) + '</span>';
    show('story');
    O('read', { night: i, words: n.intro.text.split(/\s+/).length });
  }
  $('#playBtn').addEventListener('click', () => startLevel(cur));

  // ---------- game state ----------
  let G = null;          // level state
  let tileId = 0;
  const boardEl = $('#board');
  const tilesEl = $('#tiles');
  const overEl = $('#overlays');
  let cell = 40;

  function startLevel(i) {
    const n = NIGHTS[i];
    G = {
      n, i,
      types: n.tiles,
      grid: [], over: [],
      moves: n.moves,
      goals: n.goals.map(([e, c]) => ({ e, t: n.tiles.indexOf(e), left: c, total: c })),
      overKind: n.over ? n.over.kind : null,
      knocks: 0, moved: 0, busy: false, sel: null, score: 0, done: false,
    };
    tilesEl.innerHTML = ''; overEl.innerHTML = '';
    $('#wordPanel').innerHTML = '<p class="meta">' + esc(U.touch) + '</p>';
    for (let y = 0; y < N; y++) { G.grid.push(new Array(N).fill(null)); G.over.push(new Array(N).fill(null)); }
    $('#playTitle').textContent = neTitle(n) + ' · ' + n.title;
    $('#playEyebrow').textContent = neLabel(n);
    $('#playHint').innerHTML = esc(NE.hints[n.key]) + '<br><span class="en">' + esc(n.hint) + '</span>';
    show('play');
    layout();
    // fill without initial matches
    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
      let t; let guard = 0;
      do { t = rnd(G.types.length); guard++; } while (guard < 50 && (
        (x >= 2 && G.grid[y][x - 1].t === t && G.grid[y][x - 2].t === t) ||
        (y >= 2 && G.grid[y - 1][x].t === t && G.grid[y - 2][x].t === t)));
      placeNew(x, y, t, y);
    }
    if (n.over) addOverlays(n.over.kind, n.over.count, true);
    if (!hasMove()) shuffle(false);
    renderHUD();
  }

  function makeTile(t, hidden) {
    const el = document.createElement('div');
    el.className = 'tile';
    const tile = { id: ++tileId, t, sp: null, hid: !!hidden, el, x: 0, y: 0 };
    paint(tile);
    tilesEl.appendChild(el);
    return tile;
  }
  function paint(tile) {
    const e = tile.sp === 'rb' ? '🌈' : tile.hid ? '❓' : W[G.types[tile.t]].e;
    tile.el.innerHTML = tileHTML(e) + (tile.sp === 'h' || tile.sp === 'v' ? '<span class="badge badge-' + tile.sp + '">❤️</span>' : '');
    tile.el.classList.toggle('hid', tile.hid && tile.sp !== 'rb');
    tile.el.classList.toggle('special', !!tile.sp);
    tile.el.classList.toggle('rb', tile.sp === 'rb');
  }
  function pos(tile, x, y, instant) {
    tile.x = x; tile.y = y;
    if (instant) tile.el.style.transition = 'none';
    tile.el.style.transform = 'translate(' + (x * cell) + 'px,' + (y * cell) + 'px)';
    if (instant) { void tile.el.offsetWidth; tile.el.style.transition = ''; }
  }
  function placeNew(x, y, t, dropFrom) {
    const hidden = G.n.hidden && Math.random() < G.n.hidden;
    const tile = makeTile(t, hidden);
    pos(tile, x, -1 - (dropFrom == null ? 0 : dropFrom), true);
    G.grid[y][x] = tile;
    requestAnimationFrame(() => pos(tile, x, y));
    return tile;
  }

  function layout() {
    const w = boardEl.clientWidth;
    if (!w) return;
    cell = w / N;
    boardEl.style.setProperty('--cell', cell + 'px');
    if (!G) return;
    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
      const tl = G.grid[y] && G.grid[y][x]; if (tl) pos(tl, x, y, true);
    }
    renderOverlays();
  }
  window.addEventListener('resize', layout);

  // ---------- overlays (ghosts, doors) ----------
  function addOverlays(kind, count, initial) {
    const free = [];
    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) if (!G.over[y][x]) free.push([x, y]);
    let pool = free;
    if (initial && kind === 'ghost') pool = free.filter(([x, y]) => x >= 1 && x <= 6 && y >= 2 && y <= 5);
    for (let k = 0; k < count && pool.length; k++) {
      const [x, y] = pool.splice(rnd(pool.length), 1)[0];
      G.over[y][x] = kind;
    }
    renderOverlays();
  }
  function renderOverlays() {
    let h = '';
    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
      const k = G.over[y][x];
      if (k) h += '<div class="ov ov-' + k + '" style="transform:translate(' + (x * cell) + 'px,' + (y * cell) + 'px)">' + (k === 'ghost' ? '👻' : '🚪') + '</div>';
    }
    overEl.innerHTML = h;
  }
  function overCount() { let c = 0; for (const r of G.over) for (const v of r) if (v) c++; return c; }

  // ---------- HUD ----------
  function renderHUD() {
    $('#moves').textContent = nd(G.moves);
    let h = G.goals.map(g => '<li class="goal' + (g.left <= 0 ? ' met' : '') + '">' + tileHTML(W[g.e].e) + esc(NE.words[g.e][0]) + ' <b>' + (g.left > 0 ? nd(g.left) : '✓') + '</b></li>').join('');
    if (G.overKind) {
      const c = overCount();
      h += '<li class="goal' + (c === 0 ? ' met' : '') + '">' + tileHTML(G.overKind === 'ghost' ? '👻' : '🚪') + '<b>' + (c > 0 ? nd(c) : '✓') + '</b></li>';
    }
    $('#goals').innerHTML = h;
    $('#score').textContent = nd(G.score);
  }
  let toastTimer = null;
  function toast(msg) {
    const el = $('#toast');
    el.textContent = msg; el.classList.add('on');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => el.classList.remove('on'), 2200);
  }

  // ---------- matching ----------
  function typeAt(x, y) { const t = G.grid[y] && G.grid[y][x]; return t && t.sp !== 'rb' ? t.t : -9; }
  function findRuns() {
    const runs = [];
    for (let y = 0; y < N; y++) {
      let x = 0;
      while (x < N) {
        const t = typeAt(x, y); let e = x + 1;
        while (e < N && t >= 0 && typeAt(e, y) === t) e++;
        if (t >= 0 && e - x >= 3) { const c = []; for (let k = x; k < e; k++) c.push([k, y]); runs.push({ cells: c, dir: 'h' }); }
        x = e;
      }
    }
    for (let x = 0; x < N; x++) {
      let y = 0;
      while (y < N) {
        const t = typeAt(x, y); let e = y + 1;
        while (e < N && t >= 0 && typeAt(x, e) === t) e++;
        if (t >= 0 && e - y >= 3) { const c = []; for (let k = y; k < e; k++) c.push([x, k]); runs.push({ cells: c, dir: 'v' }); }
        y = e;
      }
    }
    return runs;
  }
  function hasMove() {
    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
      if (G.grid[y][x].sp === 'rb') return true;
      for (const [dx, dy] of [[1, 0], [0, 1]]) {
        const x2 = x + dx, y2 = y + dy; if (x2 >= N || y2 >= N) continue;
        swapGrid(x, y, x2, y2);
        const ok = findRuns().length > 0;
        swapGrid(x, y, x2, y2);
        if (ok) return true;
      }
    }
    return false;
  }
  function swapGrid(x1, y1, x2, y2) { const a = G.grid[y1][x1]; G.grid[y1][x1] = G.grid[y2][x2]; G.grid[y2][x2] = a; }
  function shuffle(animate) {
    let guard = 0;
    do {
      const all = []; for (const r of G.grid) for (const t of r) if (t.sp !== 'rb') all.push(t.t);
      for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
        const tl = G.grid[y][x]; if (tl.sp === 'rb') continue;
        tl.t = all.splice(rnd(all.length), 1)[0]; paint(tl);
      }
      guard++;
    } while (guard < 40 && (findRuns().length > 0 || !hasMove()));
    if (animate) { toast(U.noMoves); O('shuffle'); }
  }

  // ---------- the word panel: touch a word, read where it joins the story ----------
  function mark(text, word) {
    const safe = esc(text);
    const re = new RegExp('(' + word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
    return safe.replace(re, '<mark>$1</mark>');
  }
  function showWord(tile) {
    const el = $('#wordPanel');
    if (!tile) return;
    if (tile.sp === 'rb') {
      el.innerHTML = '<p class="w-head"><span class="em">🌈</span> <b>' + esc(U.coatWord) + '</b></p><p class="meta">' + esc(U.coatHelp) + '</p>';
      return;
    }
    if (tile.hid) {
      el.innerHTML = '<p class="w-head"><span class="em">❓</span> <b>' + esc(U.unknownWord) + '</b></p><p class="meta">' + esc(U.unknownHelp) + '</p>';
      return;
    }
    const id = G.types[tile.t], w = W[id], ne = NE.words[id];
    const K = U.kinds;
    const branches = (ne[2] ? [['नेपाली', ne[2]]] : []).concat(B[id] || []);
    el.innerHTML =
      '<p class="w-head">' + tileHTML(w.e) + ' <b class="ne">' + esc(ne[0]) + '</b>' +
        ' <span class="brahmi" lang="und-Brah">' + window.devaToBrahmi(ne[0]) + '</span>' +
        ' <span class="meta">' + esc(ne[1]) + ' · </span><b>' + esc(w.word) + '</b></p>' +
      '<p class="w-tpd"><span class="meta">TPD</span> ' + w.tpd.map(esc).join(' <span class="meta">→</span> ') + '</p>' +
      (branches.length ? '<ul class="w-branches">' + branches.map(([k, t]) => '<li><span class="kind">' + esc(K[k] || k) + '</span> ' + esc(t) + '</li>').join('') + '</ul>' : '') +
      '<ul class="w-lines">' + w.lines.map(([t, s]) => '<li>' + mark(t, w.word.split(' ')[0]) + ' <span class="meta">' + esc(s) + '</span></li>').join('') + '</ul>';
    O('touch', { word: id });
  }

  // ---------- input ----------
  let start = null;
  function cellFrom(ev) {
    const r = boardEl.getBoundingClientRect();
    const x = Math.floor((ev.clientX - r.left) / cell), y = Math.floor((ev.clientY - r.top) / cell);
    return x >= 0 && x < N && y >= 0 && y < N ? [x, y] : null;
  }
  function select(c) {
    if (G.sel) { const t = G.grid[G.sel[1]][G.sel[0]]; if (t) t.el.classList.remove('sel'); }
    G.sel = c;
    if (c) G.grid[c[1]][c[0]].el.classList.add('sel');
  }
  boardEl.addEventListener('pointerdown', ev => {
    if (!G || G.busy || G.done) return;
    const c = cellFrom(ev); if (!c) return;
    showWord(G.grid[c[1]][c[0]]);
    start = { c, x: ev.clientX, y: ev.clientY, moved: false };
    try { boardEl.setPointerCapture(ev.pointerId); } catch (e) {}
  });
  boardEl.addEventListener('pointermove', ev => {
    if (!start || start.moved || G.busy) return;
    const dx = ev.clientX - start.x, dy = ev.clientY - start.y;
    if (Math.max(Math.abs(dx), Math.abs(dy)) < cell * 0.35) return;
    start.moved = true;
    const [x, y] = start.c;
    const t = Math.abs(dx) > Math.abs(dy) ? [x + Math.sign(dx), y] : [x, y + Math.sign(dy)];
    select(null);
    if (t[0] >= 0 && t[0] < N && t[1] >= 0 && t[1] < N) trySwap(start.c, t);
  });
  boardEl.addEventListener('pointerup', ev => {
    if (!start) return;
    const s = start; start = null;
    if (s.moved || G.busy) return;
    const c = s.c;
    if (G.sel) {
      const [sx, sy] = G.sel;
      if (Math.abs(sx - c[0]) + Math.abs(sy - c[1]) === 1) { const a = G.sel; select(null); trySwap(a, c); return; }
      if (sx === c[0] && sy === c[1]) { select(null); return; }
    }
    select(c);
  });
  boardEl.addEventListener('pointercancel', () => { start = null; });
  // keyboard: arrows move a cursor, Enter/Space selects
  let kc = null;
  boardEl.addEventListener('keydown', ev => {
    if (!G || G.busy || G.done) return;
    const k = ev.key;
    if (!kc) kc = [3, 3];
    const d = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[k];
    if (d) {
      ev.preventDefault();
      const n2 = [Math.min(N - 1, Math.max(0, kc[0] + d[0])), Math.min(N - 1, Math.max(0, kc[1] + d[1]))];
      if (G.sel) { const a = G.sel; select(null); kc = n2; trySwap(a, n2); }
      else kc = n2;
      drawCursor();
      showWord(G.grid[kc[1]][kc[0]]);
    } else if (k === 'Enter' || k === ' ') { ev.preventDefault(); select(G.sel ? null : kc.slice()); }
  });
  boardEl.addEventListener('focus', () => { if (!kc) kc = [3, 3]; drawCursor(); });
  boardEl.addEventListener('blur', () => { $('#cursor').hidden = true; });
  function drawCursor() {
    const c = $('#cursor'); c.hidden = false;
    c.style.transform = 'translate(' + (kc[0] * cell) + 'px,' + (kc[1] * cell) + 'px)';
  }

  // ---------- turn ----------
  async function trySwap(a, b) {
    if (G.busy || G.done) return;
    G.busy = true;
    const A = G.grid[a[1]][a[0]], B = G.grid[b[1]][b[0]];
    swapGrid(a[0], a[1], b[0], b[1]);
    pos(A, b[0], b[1]); pos(B, a[0], a[1]);
    await sleep(T.swap);
    let clearSet = null;
    if (A.sp === 'rb' || B.sp === 'rb') {
      clearSet = new Set();
      if (A.sp === 'rb' && B.sp === 'rb') { for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) clearSet.add(x + ',' + y); }
      else {
        const other = A.sp === 'rb' ? B : A, rb = A.sp === 'rb' ? A : B;
        clearSet.add(rb.x + ',' + rb.y);
        for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) { const t = G.grid[y][x]; if (t.sp !== 'rb' && t.t === other.t) clearSet.add(x + ',' + y); }
        toast(U.coatToast);
      }
    } else if (findRuns().length === 0) {
      swapGrid(a[0], a[1], b[0], b[1]);
      pos(A, a[0], a[1]); pos(B, b[0], b[1]);
      A.el.classList.add('nope'); B.el.classList.add('nope');
      await sleep(T.swap + 60);
      A.el.classList.remove('nope'); B.el.classList.remove('nope');
      O('nope');
      G.busy = false; return;
    }
    G.moves--; G.moved++;
    O('move');
    renderHUD();
    await resolve([a, b], clearSet);
    await afterTurn();
    G.busy = false;
  }

  async function resolve(swapCells, preClear) {
    let chain = 0;
    let pending = preClear;
    while (true) {
      let clear = pending || new Set();
      const make = []; // [x,y,sp]
      if (!pending) {
        const runs = findRuns();
        if (!runs.length) break;
        for (const r of runs) {
          r.cells.forEach(([x, y]) => clear.add(x + ',' + y));
          if (r.cells.length >= 4) {
            let piv = r.cells[1];
            if (swapCells && chain === 0) for (const s of swapCells) if (r.cells.some(c => c[0] === s[0] && c[1] === s[1])) piv = s;
            if (!make.some(m => m[0] === piv[0] && m[1] === piv[1])) make.push([piv[0], piv[1], r.cells.length >= 5 ? 'rb' : r.dir, G.grid[piv[1]][piv[0]].t]);
          }
        }
      }
      pending = null;
      chain++;
      // expand by specials
      const queue = [...clear];
      const fired = new Set();
      while (queue.length) {
        const k = queue.pop(); const [x, y] = k.split(',').map(Number);
        const t = G.grid[y][x]; if (!t || !t.sp || fired.has(t.id)) continue;
        if (make.some(m => m[0] === x && m[1] === y)) continue;
        fired.add(t.id);
        const add = [];
        if (t.sp === 'h') for (let i = 0; i < N; i++) add.push(i + ',' + y);
        if (t.sp === 'v') for (let i = 0; i < N; i++) add.push(x + ',' + i);
        if (t.sp === 'rb') { const tt = rnd(G.types.length); for (let yy = 0; yy < N; yy++) for (let xx = 0; xx < N; xx++) if (G.grid[yy][xx].t === tt) add.push(xx + ',' + yy); }
        for (const a of add) if (!clear.has(a)) { clear.add(a); queue.push(a); }
      }
      // clear
      const reveal = new Set();
      let n = 0, released = 0, revealed = 0;
      for (const k of clear) {
        const [x, y] = k.split(',').map(Number);
        const t = G.grid[y][x]; if (!t) continue;
        const m = make.find(mm => mm[0] === x && mm[1] === y);
        if (m) {
          t.sp = m[2]; if (m[2] === 'rb') t.t = -1;
          t.hid = false; paint(t); t.el.classList.add('born');
          setTimeout(() => t.el.classList.remove('born'), 400);
        } else {
          if (t.sp !== 'rb') for (const g of G.goals) if (g.t === t.t && g.left > 0) g.left--;
          if (t.hid) { t.hid = false; paint(t); revealed++; }
          t.el.classList.add('pop');
          const el = t.el; setTimeout(() => el.remove(), T.pop);
          G.grid[y][x] = null; n++;
        }
        if (G.over[y][x]) { G.over[y][x] = null; released++; }
        for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) reveal.add((x + dx) + ',' + (y + dy));
      }
      for (const k of reveal) {
        const [x, y] = k.split(',').map(Number);
        const t = G.grid[y] && G.grid[y][x]; if (t && t.hid) { t.hid = false; paint(t); revealed++; }
      }
      O('clear', { n, chain });
      if (revealed) O('reveal', { n: revealed });
      if (released) O('release', { n: released });
      G.score += n * 10 * chain;
      renderOverlays(); renderHUD();
      await sleep(T.pop);
      // gravity
      for (let x = 0; x < N; x++) {
        let w = N - 1;
        for (let y = N - 1; y >= 0; y--) {
          const t = G.grid[y][x];
          if (t) { if (w !== y) { G.grid[w][x] = t; G.grid[y][x] = null; pos(t, x, w); } w--; }
        }
        let k = 0;
        for (let y = w; y >= 0; y--) { placeNew(x, y, rnd(G.types.length), k); k++; }
      }
      await sleep(T.fall + 40);
      swapCells = null;
    }
  }

  async function afterTurn() {
    const n = G.n;
    if (n.whisper && !goalsMet()) {
      const pool = [];
      for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) if (!G.grid[y][x].sp) pool.push(G.grid[y][x]);
      for (let k = 0; k < n.whisper && pool.length; k++) {
        const t = pool.splice(rnd(pool.length), 1)[0];
        let nt; do { nt = rnd(G.types.length); } while (nt === t.t);
        t.t = nt; paint(t);
        t.el.classList.add('whisper'); const el = t.el; setTimeout(() => el.classList.remove('whisper'), 600);
      }
      O('whisper', { n: n.whisper });
      await sleep(T.pop);
      await resolve(null, null);
    }
    if (n.over && n.over.knockEvery && G.knocks < n.over.knocks && G.moved % n.over.knockEvery === 0 && !goalsMet()) {
      G.knocks++;
      addOverlays('door', n.over.knockAdd, false);
      boardEl.classList.add('knock'); setTimeout(() => boardEl.classList.remove('knock'), 500);
      toast(U.knockToast);
      O('knock');
      renderHUD();
    }
    if (goalsMet()) return win();
    if (G.moves <= 0) return lose();
    if (!hasMove()) { shuffle(true); await sleep(200); }
  }
  function goalsMet() { return G.goals.every(g => g.left <= 0) && (!G.overKind || overCount() === 0); }

  // ---------- results ----------
  function starsFor() {
    const frac = G.moves / G.n.moves;
    return frac >= 0.3 ? 3 : frac >= 0.12 ? 2 : 1;
  }
  function win() {
    G.done = true;
    const st = starsFor();
    starsBy[G.n.key] = Math.max(starsBy[G.n.key] || 0, st); store.set('stars', starsBy);
    if (G.i + 1 > unlocked) { unlocked = Math.min(NIGHTS.length - 1, G.i + 1); store.set('unlocked', unlocked); }
    O('win', { night: G.i, stars: st });
    O('learn', { name: G.n.name.word });
    setTimeout(() => showResult(true, st), 450);
  }
  function lose() {
    G.done = true;
    O('lose', { night: G.i });
    setTimeout(() => showResult(false, 0), 450);
  }
  function showResult(won, st) {
    const n = G.n;
    const r = $('#resultCard');
    if (!won) {
      r.innerHTML = '<p class="eyebrow">' + esc(neLabel(n)) + ' · ' + esc(n.label) + '</p><h2 class="display">' + esc(U.endedFirst) + '</h2>' +
        '<div class="actions"><button class="cmd" id="retry">' + esc(U.retry) + '</button><button class="cmd" id="toNights">' + esc(U.nights) + '</button></div>';
      show('result');
      $('#retry').onclick = () => startLevel(G.i);
      $('#toNights').onclick = () => { renderNights(); show('nights'); };
      return;
    }
    const last = G.i === NIGHTS.length - 1;
    r.innerHTML =
      '<p class="eyebrow">' + esc(neLabel(n)) + ' · ' + esc(n.label) + ' · ✓ <span class="stars">' + '★'.repeat(st) + '<span class="dim">' + '★'.repeat(3 - st) + '</span></span></p>' +
      '<p class="rebus" aria-hidden="true">' + n.name.rebus.map(tileHTML).join('') + '</p>' +
      '<h2 class="display">' + esc(n.name.word) + '</h2>' +
      '<blockquote class="passage">' + paras(n.name.meaning) + '<footer class="stamp">SOURCED · TPD ' + esc(n.name.src) + '</footer></blockquote>' +
      (n.versions && n.versions.length ? '<section class="versions"><h3>' + esc(U.allVersions) + '</h3>' +
        n.versions.map(v => '<div class="vgroup"><p class="vlabel">' + esc(v.label) + '</p><ul>' +
          v.items.map(([t, s]) => '<li><span class="vtext">' + esc(t) + '</span><span class="vsrc">' + esc(s) + '</span></li>').join('') +
          '</ul></div>').join('') + '</section>' : '') +
      '<div class="actions">' + (last ? '<button class="cmd" id="next">' + esc(U.writeName) + '</button>' : '<button class="cmd" id="next">' + esc(U.next) + '</button>') +
      '<button class="cmd" id="toNights">' + esc(U.nights) + '</button></div>';
    show('result');
    $('#next').onclick = () => last ? openFinale() : openStory(G.i + 1);
    $('#toNights').onclick = () => { renderNights(); show('nights'); };
  }

  // ---------- finale ----------
  const allEmoji = [...new Set(NIGHTS.flatMap(n => n.tiles).map(id => W[id].e).concat(['🌈', '❓', '👻', '🚪']))];
  let picks = store.get('picks', []);
  function openFinale() {
    $('#yourName').value = store.get('name', '');
    $('#emojiPick').innerHTML = allEmoji.map(e => '<button type="button" class="pick' + (picks.includes(e) ? ' on' : '') + '" data-e="' + e + '" aria-pressed="' + picks.includes(e) + '">' + tileHTML(e) + '</button>').join('');
    renderPicked();
    $('#ending').hidden = true;
    show('finale');
  }
  function renderPicked() { $('#picked').innerHTML = picks.length ? picks.map(tileHTML).join('') : '<span class="dim">' + esc(U.pickUpTo) + '</span>'; }
  $('#emojiPick').addEventListener('click', e => {
    const b = e.target.closest('.pick'); if (!b) return;
    const em = b.dataset.e;
    if (picks.includes(em)) picks = picks.filter(p => p !== em);
    else if (picks.length < 3) picks.push(em);
    else return toast(U.threeEnough);
    b.classList.toggle('on', picks.includes(em)); b.setAttribute('aria-pressed', picks.includes(em));
    renderPicked();
  });
  $('#nameForm').addEventListener('submit', e => {
    e.preventDefault();
    const nm = $('#yourName').value.trim() || 'Habibi';
    store.set('name', nm); store.set('picks', picks);
    O('return', { name: nm, emoji: picks.slice() });
    const E = window.ENDING;
    $('#ending').innerHTML =
      '<p class="rebus" aria-hidden="true">' + (picks.length ? picks.map(tileHTML).join('') : tileHTML('❓')) + '</p>' +
      '<h2 class="display">' + esc(nm) + '</h2>' +
      '<blockquote class="passage">' + paras(E.definition.text) + '<footer class="stamp">SOURCED · TPD ' + esc(E.definition.src) + '</footer></blockquote>' +
      '<blockquote class="passage quiet">' + paras(E.scheherazade.text) + '<footer class="stamp">SOURCED · TPD ' + esc(E.scheherazade.src) + '</footer></blockquote>' +
      '<p class="lede center">' + esc(U.notFinished) + '</p>' +
      '<div class="actions"><button class="cmd" id="endNights" type="button">' + esc(U.nights) + '</button></div>';
    $('#ending').hidden = false;
    $('#endNights').onclick = () => { renderNights(); show('nights'); };
    $('#ending').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  });

  // ---------- the exact opposite: tap text, tap again to return ----------
  document.addEventListener('click', e => {
    if (!window.OPPOSITE || e.target.closest('button, input, #board, a')) return;
    const el = e.target.closest('#storyText p, #resultCard .passage p, #ending .passage p, .w-lines li, .vtext');
    if (!el) return;
    const res = window.OPPOSITE.toggle(el);
    if (res === 'back') { el.classList.remove('flipped'); toast(U.flippedBack); O('unopposite'); return; }
    if (res === 0) { window.OPPOSITE.toggle(el); toast(U.noOpposite); return; }
    el.classList.add('flipped'); toast(U.flipped); O('opposite', { words: res });
  });

  // ---------- nav ----------
  document.addEventListener('click', e => {
    const b = e.target.closest('[data-go]'); if (!b) return;
    const to = b.dataset.go;
    if (to === 'nights') renderNights();
    show(to);
  });
  $('#restartBtn').addEventListener('click', () => { if (G && !G.busy) { O('restart', { night: G.i }); startLevel(G.i); } });

  renderNights();
  show('title');
})();
