/* 070′ — the invisible observer.
 *
 * The theory (REMEMBERED, 5 October 2026):
 *
 *   a system moves that observes the states o0, 1, 2, 3, 4, 5, 6, 7 and returns to 0′.
 *   Numbers that are positions, are not values; 7 is not better than 3. What matters is
 *   the arrows of godT between states: whatever had to happen for one state to become the
 *   next (heat, breath, time, language, learning, decay, experience: and all their
 *   derivatives of Habitus will be will be).
 *
 *   0′ = 0 + H
 *   H = T₁ + T₂ + T₃ + T₄ + T₅ + T₆ + T₇ + T₀
 *   H ≠ 0, therefore 0′ ≠ 0
 *   An arrow Tₙ can be undone only if Tₙ⁻¹ exists. Some arrows are reversible, some are not.
 *
 *   In words: a thing that returns equals the thing that left, plus what happened to it,
 *   and what happened is never nothing. A thing is not only what it is; it is also how it
 *   became.
 *
 *   Notation: 070′ is the formal form (the prime marks the return as changed; plain 070 is
 *   a palindrome and falsely reads as reversible). o7o is the informal form.
 *
 * Applied to this game (GENERATED; see THEORY-070.md):
 *   X      = the player, carrying a name through the fourteen nights.
 *   States = positions in the story, not scores. State 7 is not better than state 3.
 *   Arrows = what had to happen to move from one position to the next, observed as it
 *            happens: heat (tiles burned away in matches), breath (moves spent), time
 *            (milliseconds lived), language (words of the TPDs read), learning (names
 *            learned, unknown tiles revealed), decay (whispers, shuffles, ghosts and doors
 *            released), experience (wins, losses, stars, knocks, restarts).
 *   T⁻¹    = exists for two things in the game: a swap that makes no match is swapped
 *            back, and text tapped into its exact opposite is tapped back. Nothing else
 *            has an inverse. A restart returns the board, not
 *            the time or the breath, so a restart is recorded, not subtracted.
 *   0′     = what you write at the end: your name, plus everything in H.
 *
 * Nothing here draws to the screen. It is read from the console:  o7o.report()
 */
(function () {
  'use strict';

  const KEY = 'tootsie.o7o';

  // Positions, not values.
  const STATES = [
    { n: 0, mark: '0',  nights: [],       is: 'arrival: the name you were born into, not yet chosen' },
    { n: 1, mark: '1',  nights: [0, 1],   is: 'origin: the durian, and the name given (Joey Foster Ellis)' },
    { n: 2, mark: '2',  nights: [2, 3],   is: 'the guides: Gladys, and the Queer Jihad' },
    { n: 3, mark: '3',  nights: [4, 5],   is: 'the meeting: the barbershop, and Gomorrah in Al-Gharafa' },
    { n: 4, mark: '4',  nights: [6, 7],   is: 'washing and the dream: Ahmed, and Yousef' },
    { n: 5, mark: '5',  nights: [8, 9],   is: 'transmission: Chinese whispers, and the coat of many colours' },
    { n: 6, mark: '6',  nights: [10, 11], is: 'fear and prayer: the knock, and Qada Salah' },
    { n: 7, mark: '7',  nights: [12, 13], is: 'the unknown: God, and Tootsie in the Desert' },
  ];
  const stateOfNight = i => { for (const s of STATES) if (s.nights.includes(i)) return s.n; return 0; };

  // The only event with an inverse.
  const HAS_INVERSE = { nope: true, opposite: true, unopposite: true };

  function blankH() {
    return {
      heat: 0,                                   // tiles burned away
      breath: 0,                                 // moves spent
      time: 0,                                   // ms lived
      language: 0,                               // words of the TPDs read
      learning: { names: [], revealed: 0 },      // names learned, unknowns made known
      decay: { whispers: 0, shuffles: 0, released: 0 },
      experience: { wins: 0, losses: 0, stars: 0, knocks: 0, restarts: 0 },
      inverses: 0,                               // T then T⁻¹: swaps undone
    };
  }
  function addH(a, b) {
    a.heat += b.heat; a.breath += b.breath; a.time += b.time; a.language += b.language;
    for (const nm of b.learning.names) if (!a.learning.names.includes(nm)) a.learning.names.push(nm);
    a.learning.revealed += b.learning.revealed;
    for (const k in b.decay) a.decay[k] += b.decay[k];
    for (const k in b.experience) a.experience[k] += b.experience[k];
    a.inverses += b.inverses;
    return a;
  }
  // H = 0 only if nothing happened. Inverses do not count: T + T⁻¹ leaves no trace on the board.
  function isZero(H) {
    return !H.heat && !H.breath && !H.time && !H.language && !H.learning.names.length && !H.learning.revealed &&
      !Object.values(H.decay).some(Boolean) && !Object.values(H.experience).some(Boolean);
  }

  function load() { try { const v = localStorage.getItem(KEY); return v ? JSON.parse(v) : null; } catch (e) { return null; } }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(L)); } catch (e) {} }

  function newCycle(zero, cycle) {
    const now = Date.now();
    return {
      cycle,
      zero,                       // o0: what left
      pos: 0,                     // current position
      last: now,                  // last observation, for time
      open: openArrow(0, null, now),
      arrows: [],                 // closed arrows this cycle
      returns: L ? L.returns : [],
    };
  }
  function openArrow(from, to, now) {
    return { from, to, H: blankH(), events: {}, started: now, ended: null, reversible: null };
  }
  function label(to) { return to === "0′" ? 'T₀' : 'T' + '₀₁₂₃₄₅₆₇'[to]; }

  function close(to, now) {
    const a = L.open;
    a.to = to; a.ended = now; a.T = label(to);
    // Tₙ⁻¹ exists only if every event in the arrow had an inverse.
    const kinds = Object.keys(a.events);
    a.reversible = kinds.length > 0 && kinds.every(k => HAS_INVERSE[k]);
    L.arrows.push(a);
    L.open = openArrow(to, null, now);
    L.pos = to;
  }

  let L = load();
  if (!L) {
    L = null;
    L = newCycle({ at: Date.now(), name: null, emoji: [], is: STATES[0].is, carries: null }, 1);
    save();
  }

  function tick(now) {
    const dt = Math.max(0, now - (L.last || now));
    L.open.H.time += dt;
    L.last = now;
  }

  function observe(type, d) {
    d = d || {};
    const now = Date.now();
    tick(now);
    const H = L.open.H;
    L.open.events[type] = (L.open.events[type] || 0) + 1;

    switch (type) {
      case 'read': {
        H.language += d.words || 0;
        const s = stateOfNight(d.night);
        if (s !== L.pos) {
          // the words just read belong to the new position's arrow
          H.language -= d.words || 0;
          L.open.events.read--; if (!L.open.events.read) delete L.open.events.read;
          close(s, now);
          L.open.H.language += d.words || 0;
          L.open.events.read = 1;
        }
        break;
      }
      case 'move':    H.breath++; break;
      case 'nope':    H.inverses++; break;                  // T then T⁻¹
      case 'opposite':   break;                           // T: the text becomes its opposite
      case 'unopposite': H.inverses++; break;             // T⁻¹: and comes back
      case 'clear':   H.heat += d.n || 0; break;
      case 'reveal':  H.learning.revealed += d.n || 0; break;
      case 'release': H.decay.released += d.n || 0; break;
      case 'whisper': H.decay.whispers += d.n || 0; break;
      case 'shuffle': H.decay.shuffles++; break;
      case 'knock':   H.experience.knocks++; break;
      case 'restart': H.experience.restarts++; break;      // the board returns; the time does not
      case 'win':     H.experience.wins++; H.experience.stars += d.stars || 0; break;
      case 'lose':    H.experience.losses++; break;
      case 'learn':   if (d.name && !H.learning.names.includes(d.name)) H.learning.names.push(d.name); break;
      case 'return':  doReturn(d, now); break;
    }
    save();
  }

  function doReturn(d, now) {
    close("0′", now);
    const H = L.arrows.reduce((acc, a) => addH(acc, a.H), blankH());
    const zeroPrime = {
      at: now,
      name: d.name || null,
      emoji: d.emoji || [],
      H,
      equalsZero: isZero(H),                  // H ≠ 0, therefore 0′ ≠ 0
      carries: carries(L.zero, d, H),
      left: L.zero,                           // 0
      arrows: L.arrows.map(a => ({ T: a.T, from: a.from, to: a.to, reversible: a.reversible, H: a.H })),
    };
    L.returns.push({ cycle: L.cycle, zeroPrime });
    // The return becomes the next departure. The next 0 is this 0′, not the first 0.
    const next = newCycle({ at: now, name: zeroPrime.name, emoji: zeroPrime.emoji, is: 'the last return', carries: zeroPrime.carries }, L.cycle + 1);
    next.returns = L.returns;
    L = next;
  }

  // What 0′ carries that 0 did not.
  function carries(zero, d, H) {
    const c = [];
    if (d.name && d.name !== zero.name) c.push('a name chosen, not born into: ' + d.name);
    if ((d.emoji || []).length) c.push('the name in emoji: ' + d.emoji.join(''));
    if (H.learning.names.length) c.push('names whose meanings it now knows: ' + H.learning.names.join(', '));
    if (H.language) c.push(H.language + ' words of the TPDs, read');
    if (H.heat) c.push(H.heat + ' tiles fired away; a fired thing does not unfire');
    if (H.decay.whispers) c.push(H.decay.whispers + ' whispers; the saying, once full stop, was never the same');
    if (H.learning.revealed) c.push(H.learning.revealed + ' unknowns made known');
    if (H.experience.losses) c.push(H.experience.losses + ' nights that ended first');
    if (H.experience.restarts) c.push(H.experience.restarts + ' restarts: the board came back, the time did not');
    if (H.inverses) c.push(H.inverses + ' swaps undone; the only arrows here with an inverse');
    c.push(Math.round(H.time / 1000) + ' seconds');
    return c;
  }

  function report() {
    const last = L.returns[L.returns.length - 1];
    const open = L.arrows.concat([L.open]);
    return {
      notation: '070′',
      cycle: L.cycle,
      position: L.pos,
      positionIs: L.pos === "0′" ? 'the return' : STATES[L.pos].is,
      zero: L.zero,
      arrowsSoFar: open.map(a => ({ T: a.T || 'open', from: a.from, to: a.to, reversible: a.reversible, H: a.H })),
      lastReturn: last ? last.zeroPrime : null,
    };
  }

  window.o7o = Object.freeze({ observe, report, states: STATES });
})();
