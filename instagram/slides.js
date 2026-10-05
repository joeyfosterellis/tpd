// Twenty Instagram slides for Tootsie in the Desert, built from the game's own data
// (words.js, nepali.js, branches.js, levels.js, opposites.js), so the slides and the game agree.
// Story lines on slides are SOURCED (verbatim, with their TPD). Captions are GENERATED.

const TAGS = '#TootsieInTheDesert #टुट्सी #ThePurpleDurian #TPD #नेपाली #Nepali #ब्राह्मी #Brahmi #Doha #Kathmandu';

const NIGHT_LINES = {
  prologue: ['a Sumatran orangutan witnessed the first introduction of Durian into the western palate.', 'V1'],
  faith: ['Think Joey like a baby kangaroo, Foster like the child and Ellis like the island.', 'V1'],
  gladys: ['"It\'s Welsh, meaning princess, but I\'m as American as a bologna sandwich... with mustard,"', 'V1'],
  queer: ['Extranean: An outsider, stranger, one not belonging to a home.', 'V1'],
  khakis: ["Habibi, a term of endearment used casually between friends but also between lovers, can mean 'beloved,' 'my love,' or have no English translation", 'May 2023'],
  gomorrah: ['Adhan in Arabic means to listen', 'May 2023'],
  loofah: ['tears of emotion and disgust rather than just drops of desalination.', 'May 2023'],
  polaris: ['"Yousef saw eleven stars, one sun, and a moon in that vision"', 'May 2023'],
  flamingo: ["The frog had turned not into a prince but a pink flamingo who sang 'Yankee Doodle' instead of ribbits.", 'May 2023'],
  coat: ['"It\'s not we wear our colours; it\'s we are our colours,"', 'coat'],
  cigarette: ['"Who are you?" the taller one asked Ahmed. "A friend. Watching a movie."', 'May 2023'],
  musalla: ["'Qada' in Arabic means 'to fulfil,' and 'Salah' means 'prayer.'", 'May 2023'],
  lavender: ["label that pile the 'unknown' and rename it 'God.'", 'May 2023'],
  tootsie: ['a drag queen forever shifting in the dunes, signifying our ever-changing identities.', 'May 2023'],
};

// The archive: @ababykangaroo, Doha, 2013. Timestamps and captions are SOURCED from
// ABABYKANGAROO-2013-INDEX.md (read off Instagram's own records). One per night, matched by theme
// (the matching is GENERATED). Captions are verbatim, spelling included.
const ARCHIVE = {
  prologue:  ['2013-05-16 12:36:26', 'Starting color integration on 9th century Islamic tile'],
  faith:     ['2013-05-19 18:57:52', 'About to float in space for the first time'],
  gladys:    ['2013-05-19 18:58:08', 'Floating!'],
  queer:     ['2013-11-04 18:45:21', 'Damian Hirst: #beautiful #cheap #shitty #tooeasy'],
  khakis:    ['2013-11-20 01:04:15', 'Recently #dug up #textile most likely of #qatari origin'],
  gomorrah:  ['2013-11-04 18:42:41', 'Damian Hirst: beautiful rotating murdering mating dance'],
  loofah:    ['2013-11-24 12:22:10', '#dissolving #mystery #plastic in #dichloromethane'],
  polaris:   ['2013-05-17 15:57:11', 'Space man molds in progress'],
  flamingo:  ['2013-05-21 23:03:58', 'Trying to replicate #porcelain using plastics'],
  coat:      ['2013-10-03 15:44:55', 'Infrared spectrometry - finding out different types of plastics'],
  cigarette: ['2014-01-01 22:23:42', 'Can I smuggle a Xmas ham back to Qatar?'],
  musalla:   ['2013-09-27 01:34:53', 'Doha at night #qatar #corniche'],
  lavender:  ['2013-05-19 19:01:09', 'Not really success.... Looking more like chewed bubble gum. Tomorrows another day.', 'MEDIA UNAVAIL: the image is gone; the record survives. A hole is data.'],
  tootsie:   ['2013-05-16 13:13:06', 'Making a new head.... Sculpted it and now sanding'],
};

const CAPTIONS = [
  ['🌴🦩 टुट्सी इन द डेजर्ट: चौध रातमा नामहरूको खेल। हरेक टायल एउटा शब्द, हरेक शब्दको आफ्नै TPD। स्वाइप गर्नुहोस् 👉',
   'Tootsie in the Desert: a game of names in fourteen nights. Every tile is a word, and every word has its own TPD. Swipe 👉'],
  ['👆 शब्द छुनुहोस्: नेपाली, ब्राह्मी, यसको TPD, र कथामा यो कहाँ जोडिन्छ। तीन मिलाउनुहोस्, नाम लेख्नुहोस्।',
   'Touch a word: its Nepali, its Brahmi, its TPD, and where it joins the story. Match three. Spell a name.'],
  ['🍈 डुरियन। सन् १४५३ मा सुमात्राको एउटा ओराङउटानले पश्चिमले पहिलो पटक डुरियन चाखेको देख्यो। कथा यहीँबाट सुरु हुन्छ।',
   'The durian. In 1453 an orangutan on Sumatra watched the West taste it for the first time. The story starts here.'],
  ['🦘👶🏝️ जोई, फोस्टर, एलिस: कङ्गारुको बच्चा, पालिएको बच्चा, टापु। नेपालीमा "जोई" को अर्थ श्रीमती पनि हो। नाम एउटै, अर्थ धेरै।',
   'Joey, Foster, Ellis: a baby kangaroo, a fostered child, an island. In Nepali, जोई also means wife. One name, many meanings.'],
  ['👑🥪 ग्लाडिस: वेल्श नाम, अर्थ राजकुमारी, तर बोलोनिया स्यान्डविचजस्तै अमेरिकी। भूतहरू सधैँ केही न केही चाहन्छन्। 👻',
   'Gladys: Welsh for princess, and as American as a bologna sandwich. Ghosts always want something.'],
  ['🦆👹👽💃🎭 Quack, Uggle, Extranean, Evangelista, Raisonneur. Extranean को स्पेनिस नातेदार extrañar को अर्थ "कसैलाई सम्झनु" हो।',
   'QUEER: five words, one acronym. Extranean has a Spanish cousin, extrañar: to miss someone.'],
  ['✂️❤️ हबिबी: अरबीमा "मेरो माया"। नेपालीको "हजाम" शब्द पनि अरबी ḥajjām बाट आएको हो। शब्दहरू यात्रा गर्छन्।',
   'Habibi: "my beloved" in Arabic. The Nepali word for barber, हजाम, came from Arabic too. Words travel.'],
  ['👂 अजान: अरबीमा "सुन्नु"। बाहिर प्रार्थनाको बोलावट, भित्र दुई जना। डेफोडिल-खैरो र नरम कपास।',
   'Adhan: "to listen". The call to prayer outside, two people inside. Daffodil-brown and soft cotton.'],
  ['🤲💧 अहमद: "जसले सधैँ ईश्वरलाई धन्यवाद दिन्छ"। आँखामा पानी: आँसु कि नुन छुट्याएको पानी?',
   'Ahmed: "one who constantly thanks God". Water in his eyes: tears, or desalination?'],
  ['⭐☀️🌙 एघार तारा, एउटा सूर्य, एउटा जून। युसुफको सपना। ध्रुव: नसर्ने केटो, नसर्ने तारा।',
   'Eleven stars, one sun and a moon. Yousef\'s dream. Dhruva: the boy who would not move became the star that does not move.'],
  ['🐸➡️🦩 कानेखुसी: भ्यागुतो राजकुमार बनेन, गुलाबी फ्लेमिङ्गो बन्यो। "कुरान" को अर्थ "पाठ" कि "शुद्ध अनुवाद"? दुवै संस्करण सही।',
   'Chinese whispers: the frog became a pink flamingo. Does Quran mean "recitation" or "pure translation"? Both versions are right.'],
  ['🟥🟧🟨🟩🟦🟪 धेरै रङको कोट। हामी आफ्ना रङ लगाउँदैनौँ, हामी नै हाम्रा रङ हौँ।',
   'The coat of many colours. We don\'t wear our colours. We are our colours.'],
  ['🚪🎬 ढकढक। "तिमी को हौ?" "साथी। चलचित्र हेर्दैछौँ।" बाँच्नका लागि लुकाइएको नाम।',
   'The knock. "Who are you?" "A friend. Watching a movie." A name hidden to stay safe.'],
  ['🤲🕌 कदा सलाह: छुटेको प्रार्थना पूरा गर्नु। वजु, अल-फातिहा, र सुरा युसुफका दुई आयत।',
   'Qada Salah: fulfilling the missed prayer. Wudu, Al-Fatiha, and two verses from Surah Yousef.'],
  ['❓💜 अज्ञात। नबुझेका सबै कुरा एउटा थुप्रोमा राख्नुहोस्, त्यसलाई "अज्ञात" भन्नुहोस्, अनि "ईश्वर" नाम दिनुहोस्।',
   'The unknown. Pile up everything you don\'t understand, call it "unknown", and rename it God.'],
  ['💃🏜️ टुट्सी इन द डेजर्ट: टिब्बाहरूमा सधैँ फेरिइरहने ड्र्याग क्वीन। सधैँ बदलिइरहने हाम्रो पहिचान।',
   'Tootsie in the Desert: a drag queen forever shifting in the dunes. Our ever-changing identities.'],
  ['🌴 जाभा: टापु, जाभानिज भाषा, कफी, कोड, र "Java the Hut" भनेर सुनिएको Jabba the Hutt। गलत सुनाइ पनि शब्दको TPD हो।',
   'Java: an island, a language, coffee, code, and Jabba the Hutt misheard as "Java the Hut". A mishearing is part of the word\'s TPD.'],
  ['🔄 पाठ छुनुहोस्, ठ्याक्कै उल्टो पाउनुहोस्। फेरि छुनुहोस्, फर्किन्छ। उल्टो पाठ GENERATED हो, TPD मुनि सुरक्षित छ।',
   'Tap the text and get its exact opposite. Tap again and it comes back. The opposite is GENERATED; the TPD stays underneath.'],
  ['0 → 7 → 0′ जे फर्किन्छ, त्यो गएको कुरा र बाटोमा भएको सबै कुराको जोड हो। जे भयो, त्यो कहिल्यै शून्य हुँदैन।',
   'What returns is what left, plus everything that happened on the way. What happened is never zero.'],
  ['✍️ अन्त्यमा तपाईं आफ्नै नाम लेख्नुहुन्छ। कथा सकिएको छैन। खेल्ने लिङ्क बायोमा 🔗',
   'At the end you write your own name. The story is not finished. Link to play in bio 🔗'],
];

(function build() {
  const W = window.WORDS, NE = window.NE, B = window.BRANCHES, N = window.NIGHTS;
  const br = s => window.devaToBrahmi(s);
  const nd = n => NE.digits(n);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const em = e => '<span class="em' + (e === '🍈' ? ' purple' : '') + '">' + e + '</span>';
  const root = document.getElementById('slides');
  let i = 0;
  function slide(inner, cls) {
    i++;
    root.insertAdjacentHTML('beforeend',
      '<section class="slide ' + (cls || '') + '" id="s' + i + '">' +
      '<div class="bar"><b>🌴 tootsie-in-the-desert.tpd</b><span>' + nd(String(i).padStart(2, '0')) + ' / २०</span></div>' +
      '<div class="body">' + inner + '</div>' +
      '<div class="foot"><span class="dev">टुट्सी इन द डेजर्ट</span> · Tootsie in the Desert</div></section>');
  }
  const archiveBox = key => {
    const [ts, cap, hole] = ARCHIVE[key];
    return '<div class="archive' + (hole ? ' hole' : '') + '"><p class="a-head">🗄️ <span class="dev">अभिलेख</span> · archive · @ababykangaroo · ' + esc(ts) + '</p>' +
      (hole ? '<div class="void">' + esc(hole) + '</div>' : '') +
      '<p class="a-cap">' + esc(cap) + '</p><p class="a-src">SOURCED · Instagram, Doha</p></div>';
  };
  const wordRow = id => '<div class="w">' + em(W[id].e) + '<div><span class="dev">' + esc(NE.words[id][0]) + '</span> <span class="brahmi">' + br(NE.words[id][0]) + '</span><br><span class="en">' + esc(W[id].word) + '</span></div></div>';

  // 1 cover
  slide('<p class="palms">' + ['🌴', '🦩', '🌅', '💃', '🍈'].map(em).join('') + '</p><h1 class="neon">Tootsie in the Desert</h1><p class="dev big">टुट्सी इन द डेजर्ट</p>' +
    '<p class="lede"><span class="dev">चौध रातमा नामहरूको खेल</span><br>a game of names in fourteen nights</p>' +
    '<p class="handle">🦘 @ababykangaroo · Doha 2013 · <span class="dev">अभिलेखसहित</span> · with the archive</p>' +
    '<p class="tiles-strip">' + ['durian', 'joey', 'habibi', 'flamingo', 'star', 'tootsie'].map(id => em(W[id].e)).join('') + '</p>', 'cover');

  // 2 how to play
  const t4 = N[4].tiles, grid = [3, 0, 2, 3, 1, 5, 4, 3, 0, 1, 2, 2, 3, 5, 1, 0, 4, 1, 2, 0, 3, 3, 5, 4, 1, 4, 0, 2, 1, 3, 5, 2, 1, 4, 0, 3];
  slide('<h2><span class="dev">कसरी खेल्ने</span> · how to play</h2>' +
    '<div class="mini">' + grid.map((t, k) => '<div class="c' + (k === 8 ? ' sel' : '') + '">' + em(W[t4[t]].e) + '</div>').join('') + '</div>' +
    '<div class="panel">' + wordRow('khakis') + '<p class="tpd"><span class="k">TPD</span> ' + W.khakis.tpd.map(esc).join(' → ') + '</p></div>' +
    '<ol class="steps"><li><span class="dev">शब्द छुनुहोस्</span> · touch a word</li><li><span class="dev">तीन मिलाउनुहोस्</span> · match three</li><li><span class="dev">नाम लेख्नुहोस्</span> · spell a name</li></ol>');

  // 3–16 the nights
  N.forEach(n => {
    const [line, src] = NIGHT_LINES[n.key];
    const ids = n.goals.map(g => g[0]).slice(0, 3);
    slide('<p class="eyebrow"><span class="dev">' + esc(NE.nights[n.key][1]) + '</span> · ' + esc(n.label) + ' · TPD ' + esc(n.draft) + '</p>' +
      '<h2 class="title"><span class="dev">' + esc(NE.nights[n.key][0]) + '</span><br><span class="en">' + esc(n.title) + '</span></h2>' +
      '<p class="rebus">' + n.name.rebus.map(em).join('') + '</p>' +
      '<p class="name">' + esc(n.name.word) + '</p>' +
      '<div class="words">' + ids.map(wordRow).join('') + '</div>' +
      '<blockquote>' + esc(line) + '<footer>SOURCED · TPD ' + esc(src) + '</footer></blockquote>' +
      archiveBox(n.key), 'night');
  });

  // 17 Java
  slide('<p class="eyebrow"><span class="dev">एउटा शब्द, धेरै बाटो</span> · one word, many roads</p>' +
    '<div class="words solo">' + wordRow('java') + '</div>' +
    '<ul class="branches">' + [['नेपाली', NE.words.java[2]]].concat(B.java).slice(0, 7).map(([k, t]) => '<li><span class="k">' + esc(NE.ui.kinds[k] || k) + '</span> ' + esc(t.replace(' (REMEMBERED)', '')) + '</li>').join('') + '</ul>' +
    '<div class="archive"><p class="a-head">🗄️ <span class="dev">अभिलेख</span> · archive · the hashtag grammar</p><p class="a-cap">#doha → #qatar, 22 times. #qatar → #doha too: the one place in the archive where the wheel comes back.</p><p class="a-src">SOURCED · THE-MONTH-GAME-SPEC.md §13.4</p></div>');

  // 18 the exact opposite
  const src18 = 'Now it ended with the absence of light and a quiet headiness while I wondered why Yousef never just denied the dream.';
  const box = document.createElement('p'); box.textContent = src18; window.OPPOSITE.toggle(box);
  slide('<p class="eyebrow"><span class="dev">ठ्याक्कै उल्टो</span> · the exact opposite</p>' +
    '<blockquote>' + esc(src18) + '<footer>SOURCED · TPD May 2023</footer></blockquote>' +
    '<p class="arrow">👆 🔄</p>' +
    '<blockquote class="flipped">' + box.innerHTML + '<footer>GENERATED · <span class="dev">उल्टो</span></footer></blockquote>' +
    '<p class="lede"><span class="dev">फेरि छुनुहोस्, फर्किन्छ।</span> Tap again and it comes back: T, then T⁻¹.</p>');

  // 19 070′
  const icons = ['🌱'].concat(N.filter((_, k) => k % 2 === 1).map(n => n.icon));
  slide('<p class="eyebrow">070′</p>' +
    '<p class="eq">0′ = 0 + H</p><p class="eq small">H = T₁ + T₂ + T₃ + T₄ + T₅ + T₆ + T₇ + T₀ + 🗄️</p><p class="eq small">H ≠ 0 ⇒ 0′ ≠ 0</p>' +
    '<ul class="branches legend"><li><span class="k">0</span> <span class="dev">कथा</span> · the story, every TPD</li><li><span class="k">T</span> <span class="dev">बाटो</span> · heat, breath, time, language, learning, decay, experience</li><li><span class="k">🗄️</span> <span class="dev">अभिलेख</span> · the archive: 42 posts, Doha 2013, @ababykangaroo, one of them a hole</li><li><span class="k">0′</span> <span class="dev">खेल</span> · the game, and your name</li></ul>' +
    '<p class="states">' + icons.map((e, k) => '<span><b>' + k + '</b>' + em(e) + '</span>').join('<i>→</i>') + '<i>→</i><span><b>0′</b>' + em('✍️') + '</span></p>' +
    '<p class="lede"><span class="dev">जे फर्किन्छ, त्यो गएको कुरा र बाटोमा भएको सबै कुराको जोड हो।</span><br>What returns is what left, plus everything that happened on the way.</p>');

  // 20 your name
  slide('<p class="palms">✍️</p><h2 class="title"><span class="dev">तपाईंको नाम</span><br><span class="en">your name</span></h2>' +
    '<p class="namebox">______ ' + em('❓') + em('🦩') + em('🌙') + '</p>' +
    '<p class="handle">' + em('🦘') + ' @ababykangaroo = a baby kangaroo = <span class="dev">जोई</span> = Joey</p>' +
    '<p class="lede big"><span class="dev">कथा सकिएको छैन।</span><br>The story is not finished.</p>' +
    '<p class="cta">🔗 <span class="dev">खेल्न लिङ्क बायोमा</span> · link to play in bio</p>', 'cover');

  window.SLIDE_COUNT = i;
  const keys = [null, null].concat(N.map(n => n.key)).concat([null, null, null, null]);
  const extra = { 0: '🗄️ अभिलेख · archive: @ababykangaroo, Doha 2013', 16: '🗄️ अभिलेख · archive: #doha → #qatar → #doha', 18: '🗄️ H = T₁ + … + T₀ + the archive', 19: '🦘 @ababykangaroo' };
  window.CAPTIONS = CAPTIONS.map(([ne, en], k) => {
    const a = keys[k] ? '🗄️ अभिलेख · archive · @ababykangaroo · ' + ARCHIVE[keys[k]][0] + '\n"' + ARCHIVE[keys[k]][1] + '"' : (extra[k] || '');
    return ne + '\n\n' + en + (a ? '\n\n' + a : '') + '\n\n' + TAGS + ' #ababykangaroo #conservation #qatar';
  });
})();
