// The exact opposite. Tap any text and every word that has an opposite becomes it;
// tap again and it comes back. T, then T⁻¹: the one arrow in the game you can undo.
// The flipped text is GENERATED. The text underneath stays SOURCED.

(function () {
  const PAIRS = `
    in/out inside/outside within/without with/without into/out up/down above/below over/under on/off
    before/after first/last begin/end beginning/ending start/finish started/finished starts/finishes
    open/closed opened/closed light/dark lights/darks darkness/light black/white whiteness/blackness
    day/night days/nights morning/evening sunrise/sunset sundown/sunrise dawn/dusk noon/midnight
    sun/moon man/woman men/women male/female father/mother fathers/mothers brother/sister brothers/sisters
    husband/wife boy/girl boys/girls he/she him/her his/her himself/herself king/queen prince/princess
    love/hate loved/hated loves/hates lover/enemy friend/enemy friends/enemies truth/lie truths/lies true/false
    honest/dishonest known/unknown remember/forget remembered/forgot hidden/revealed hide/reveal hiding/revealing
    hid/revealed concealing/showing invisible/visible clean/dirty cleanliness/dirt pure/impure purer/dirtier
    sacred/profane sin/virtue sins/virtues heaven/hell faith/doubt believe/doubt fear/courage afraid/unafraid
    safe/dangerous safety/danger free/trapped freedom/captivity alive/dead life/death live/die lived/died
    born/died birth/death young/old younger/older new/old ancient/modern past/future yesterday/tomorrow
    early/late earlier/later always/never everything/nothing everyone/nobody all/none many/few more/less
    most/least much/little big/small large/small tall/short long/short high/low higher/lower deep/shallow
    deepest/shallowest heavy/weightless hot/cold heat/cold warm/cool warmest/coldest wet/dry soft/hard
    tight/loose loosely/tightly sweet/bitter full/empty rich/poor strong/weak strength/weakness
    masculine/feminine masculinity/femininity masc/femme effeminate/manly gay/straight west/east
    western/eastern north/south northern/southern behind/ahead front/back here/there near/far
    come/go came/went arrive/depart arrived/departed arrival/departure arriving/leaving enter/exit
    entered/exited give/take gave/took given/taken push/pull pushed/pulled rise/fall raised/lowered
    win/lose won/lost found/lost find/lose gain/loss together/apart alone/accompanied same/different
    similar/different normal/strange familiar/strange stranger/neighbour outsider/insider foreign/native
    public/private quiet/loud loudly/quietly silence/noise silent/loud listen/speak listened/spoke
    question/answer questions/answers asked/answered ask/answer yes/no accept/reject rejected/accepted
    happy/sad laughed/cried laugh/cry smile/frown smiled/frowned beautiful/ugly beauty/ugliness good/bad
    better/worse best/worst right/wrong real/fake wise/foolish foolishly/wisely sharp/dull innocent/guilty
    innocence/guilt kid/adult child/adult children/adults teenagers/elders possible/impossible
    important/unimportant significant/insignificant sober/drunk sobriety/drunkenness awake/asleep
    dream/reality dreams/realities fiction/fact buy/sell bought/sold cheap/expensive keep/abandon
    we/they us/them our/their ourselves/themselves stop/go stopped/continued complete/incomplete
    completely/partly finished/unfinished slowly/quickly slow/fast quick/slow sudden/gradual
    suddenly/gradually tense/relaxed calm/agitated nervous/calm peace/war trust/distrust deception/honesty
    deceit/honesty deceptions/truths authentic/fake original/copy translator/originator obvious/hidden
    seen/unseen show/hide shown/hidden bright/dim upright/prostrate fire/water desert/ocean city/countryside
    holding/releasing hold/release held/released kiss/slap closer/farther close/far most/least
    lust/disgust pleasure/pain rejected/welcomed welcome/reject welcomed/rejected missed/caught
    rebel/conformist human/inhuman inner/outer interior/exterior intimate/distant intimacy/distance
    mid/edge never/always nothing/everything nobody/everybody
    do/don't does/doesn't did/didn't is/isn't was/wasn't are/aren't were/weren't can/can't could/couldn't
    will/won't would/wouldn't should/shouldn't have/haven't has/hasn't had/hadn't
  `;
  const MAP = {};
  for (const p of PAIRS.trim().split(/\s+/)) {
    const [a, b] = p.split('/');
    if (!(a in MAP)) MAP[a] = b;
    if (!(b in MAP)) MAP[b] = a;
  }
  function caseLike(src, w) {
    if (src === src.toUpperCase() && src.length > 1) return w.toUpperCase();
    if (src[0] === src[0].toUpperCase()) return w[0].toUpperCase() + w.slice(1);
    return w;
  }
  // flip the text nodes inside an element; returns how many words flipped
  function flip(el) {
    let n = 0;
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const node of nodes) {
      if (node.parentElement && node.parentElement.closest('.meta, .stamp, .vsrc')) continue;
      const parts = node.nodeValue.split(/([A-Za-z][A-Za-z’']*)/);
      if (parts.length === 1) continue;
      const frag = document.createDocumentFragment();
      parts.forEach((part, i) => {
        if (i % 2 === 0) { if (part) frag.appendChild(document.createTextNode(part)); return; }
        const key = part.replace('’', "'").toLowerCase();
        if (MAP[key]) {
          const s = document.createElement('span'); s.className = 'flip'; s.title = part;
          s.textContent = caseLike(part, MAP[key]); frag.appendChild(s); n++;
        } else frag.appendChild(document.createTextNode(part));
      });
      node.parentNode.replaceChild(frag, node);
    }
    return n;
  }
  window.OPPOSITE = {
    toggle(el) {
      if (el.dataset.flipped === '1') {
        el.innerHTML = el.dataset.orig; el.dataset.flipped = '';
        return 'back';
      }
      el.dataset.orig = el.innerHTML;
      const n = flip(el);
      el.dataset.flipped = '1';
      return n;
    },
    of: w => MAP[w.toLowerCase()] || null,
  };
})();
