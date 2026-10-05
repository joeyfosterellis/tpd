// Twenty Instagram slides for Tootsie in the Desert, built from the game's own data
// (words.js, nepali.js, branches.js, levels.js, opposites.js), so the slides and the game agree.
// Story lines on slides are SOURCED (verbatim, with their TPD). Captions are GENERATED.

const TAGS = '#TootsieInTheDesert #टुट्सी #ThePurpleDurian #TPD #ब्राह्मी #Brahmi #Doha #Kathmandu #ababykangaroo #conservation #qatar';

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
  lavender:  ['2013-05-19 19:01:09', 'Not really success.... Looking more like chewed bubble gum. Tomorrows another day.', 'MEDIA UNAVAIL: image gone, record survives. A hole is data.'],
  tootsie:   ['2013-05-16 13:13:06', 'Making a new head.... Sculpted it and now sanding'],
};

const CAPTIONS_NE = [
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

// A poll for each TPD: where the TPDs disagree, each version is an option. Options are SOURCED
// (verbatim, with their TPDs). Questions are GENERATED. All versions are correct.
const POLLS = {
  prologue: { en: 'What does durian smell like?', ne: 'डुरियनको गन्ध कस्तो?', sa: 'कण्टकिफलस्य गन्धः कीदृशः?', es: '¿A qué huele el durián?',
    o: [['raw onion soup', 'V1'], ['hard cider and apple brandy', 'V1']] },
  faith: { en: 'What does Joey mean?', ne: '"जोई" को अर्थ के?', sa: '"जोई" इत्यस्य अर्थः कः?', es: '¿Qué significa Joey?',
    o: [['a baby kangaroo', 'V1 · gomorrah'], ['Joseph; it\'s quranic', 'gomorrah']] },
  gladys: { en: 'What does Gladys mean?', ne: '"ग्लाडिस" को अर्थ के?', sa: '"ग्लाडिस्" इत्यस्य अर्थः कः?', es: '¿Qué significa Gladys?',
    o: [['princess', 'V1'], ['a bologna sandwich... with mustard', 'V1']] },
  queer: { en: 'Who believed in the queer jihad?', ne: 'क्वियर जिहादमा कसले विश्वास गर्‍यो?', sa: 'क्वियर्-जिहादि कः विश्वासम् अकरोत्?', es: '¿Quién creía en la yihad queer?',
    o: [['Joey', 'khakis'], ['Ahmed', 'flamingo · mirror · May 2023']] },
  khakis: { en: 'Where is Ahmed from?', ne: 'अहमद कहाँबाट?', sa: 'अहमद् कुतः?', es: '¿De dónde es Ahmed?',
    o: [['Syrian', 'khakis · hydrant · coat · polaris · …'], ['Damascus', 'May 2023'], ['Beirut', 'desalination · flamingo · mirror']] },
  gomorrah: { en: 'The aftertaste?', ne: 'पछिको स्वाद?', sa: 'पश्चादास्वादः?', es: '¿El sabor que quedó?',
    o: [['sweet rose and pomegranate', 'khakis · coat'], ['sweet rose and pineapple', 'hydrant · polaris · habibi · argan · …']] },
  loofah: { en: 'The sheet?', ne: 'तन्ना?', sa: 'आस्तरणम्?', es: '¿La sábana?',
    o: [['purple rayon', 'khakis · coat · May 2023 · …'], ['polyester', 'hydrant · habibi · argan · …']] },
  polaris: { en: 'What did Joey ask?', ne: 'जोईले के सोध्यो?', sa: 'जोई किम् अपृच्छत्?', es: '¿Qué preguntó Joey?',
    o: [['"A symphony?"', 'most TPDs'], ['"A master of ceremony?"', 'gomorrah']] },
  flamingo: { en: 'What does Quran mean?', ne: '"कुरान" को अर्थ के?', sa: '"कुरान्" इत्यस्य अर्थः कः?', es: '¿Qué significa Corán?',
    o: [['recitation', 'May 2023'], ['pure translation', 'khakis · coat · hydrant · …']] },
  coat: { en: 'The colours of the coat?', ne: 'कोटका रङ?', sa: 'कञ्चुकस्य वर्णाः?', es: '¿Los colores del abrigo?',
    o: [['yellow, pink, blue, orange', 'khakis · coat · lavender · …'], ['red, orange, yellow, green, blue, violet', 'May 2023']] },
  cigarette: { en: 'How long in Doha?', ne: 'दोहामा कति समय?', sa: 'दोहायां कियान् कालः?', es: '¿Cuánto tiempo en Doha?',
    o: [['a two-year stay', 'flamingo · mirror · May 2023'], ['three years', 'desalination']] },
  musalla: { en: 'When did they meet?', ne: 'उनीहरू कहिले भेटे?', sa: 'तौ कदा अमिलताम्?', es: '¿Cuándo se conocieron?',
    o: [['an evening in November of 2013', 'desalination · flamingo'], ['a random August evening', 'May 2023']] },
  lavender: { en: 'Such ___ for the unknown?', ne: 'अज्ञातप्रति कस्तो भाव?', sa: 'अज्ञाते कीदृशः भावः?', es: '¿Qué sentía por lo desconocido?',
    o: [['faith', 'khakis · desalination · May 2023 · …'], ['love', 'lavender · cigarette'], ['disregard', 'polaris · musalla']] },
  tootsie: { en: 'Why Tootsie in the Desert?', ne: 'किन "टुट्सी इन द डेजर्ट"?', sa: 'किमर्थं "मरुभूमौ टुट्सी"?', es: '¿Por qué «Tootsie en el desierto»?',
    o: [['the games, dressed up in drag', 'desalination'], ['a drag queen forever shifting in the dunes', 'May 2023']] },
};
const POLL_UI = {
  en: { poll: 'poll', all: 'all versions are correct', vote: 'vote in the comments' },
  ne: { poll: 'मतदान', all: 'सबै संस्करण सही', vote: 'कमेन्टमा भोट दिनुहोस्' },
  sa: { poll: 'मतदानम्', all: 'सर्वाणि संस्करणानि सत्यानि', vote: 'टिप्पण्यां मतं देहि' },
  es: { poll: 'encuesta', all: 'todas las versiones son correctas', vote: 'vota en los comentarios' },
};

(function build() {
  const q = new URLSearchParams(location.search);
  const LANG = q.get('lang') || 'ne', FMT = q.get('fmt') || 'ig';
  document.body.classList.add('fmt-' + FMT, 'lang-' + LANG);
  const L = I18N[LANG], EN = I18N.en, NEU = I18N.ne;
  const S = L.second === 'ne' ? NEU : EN;           // the language beside the primary
  const W = window.WORDS, NE = window.NE, B = window.BRANCHES, N = window.NIGHTS;
  const br = s => window.devaToBrahmi(s);
  const nd = n => L.digits ? NE.digits(n) : String(n);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const em = e => '<span class="em' + (e === '🍈' ? ' purple' : '') + '">' + e + '</span>';
  const pair = (a, b) => '<span class="p1">' + esc(a) + '</span> · <span class="p2">' + esc(b) + '</span>';
  const nightLabel = n => LANG === 'ne' ? NE.nights[n.key][1] : (L.labels[n.key] || (L.labels.night + ' ' + nd(N.indexOf(n))));
  const nightLabel2 = n => L.second === 'ne' ? NE.nights[n.key][1] : n.label;
  const nightTitle = n => LANG === 'ne' ? NE.nights[n.key][0] : L.nights[n.key];
  const nightTitle2 = n => L.second === 'ne' ? NE.nights[n.key][0] : n.title;
  const word = id => LANG === 'ne' ? NE.words[id][0] : L.words[id];
  const word2 = id => L.second === 'ne' ? NE.words[id][0] : W[id].word;
  const brahmiOf = id => br(LANG === 'sa' ? L.words[id] : NE.words[id][0]);
  const root = document.getElementById('slides');
  let i = 0;
  function slide(inner, cls) {
    i++;
    root.insertAdjacentHTML('beforeend',
      '<section class="slide ' + (cls || '') + '" id="s' + i + '">' +
      '<div class="bar"><b>🌴 tootsie-in-the-desert.tpd</b><span>' + nd(String(i).padStart(2, '0')) + ' / ' + nd(20) + '</span></div>' +
      '<div class="body">' + inner + '</div>' +
      '<div class="foot">' + pair(L.title, S.title) + '</div></section>');
  }
  const archiveBox = key => {
    const [ts, cap, hole] = ARCHIVE[key];
    return '<div class="archive' + (hole ? ' hole' : '') + '"><p class="a-head">🗄️ ' + pair(L.archive, S.archive) + ' · @ababykangaroo · ' + esc(ts) + '</p>' +
      (hole ? '<div class="void">' + esc(hole) + '</div>' : '') +
      '<p class="a-cap">' + esc(cap) + '</p><p class="a-src">SOURCED · Instagram, Doha</p></div>';
  };
  const wordRow = id => '<div class="w">' + em(W[id].e) + '<div><span class="p1 big1">' + esc(word(id)) + '</span> <span class="brahmi">' + brahmiOf(id) + '</span><br><span class="p2">' + esc(word2(id)) + '</span></div></div>';
  const PU = POLL_UI[LANG], PU2 = POLL_UI[L.second];
  const pollBox = key => {
    const p = POLLS[key]; if (!p) return '';
    return '<div class="poll"><p class="poll-head">🗳️ ' + pair(PU.poll, PU2.poll) + '</p>' +
      '<p class="poll-q">' + esc(p[LANG]) + (LANG !== 'en' ? '<br><span class="p2 small">' + esc(p[L.second]) + '</span>' : '') + '</p>' +
      '<div class="opts">' + p.o.map(([t, s], k) => '<div class="opt"><b>' + 'ABC'[k] + '</b><span class="o-t">' + esc(t) + '</span><span class="o-s">TPD ' + esc(s) + '</span></div>').join('') + '</div>' +
      '<p class="poll-all">✓ ' + pair(PU.all, PU2.all) + '</p></div>';
  };

  // 1 cover
  slide('<p class="palms">' + ['🌴', '🦩', '🌅', '💃', '🍈'].map(em).join('') + '</p><h1 class="neon">Tootsie in the Desert</h1><p class="big">' + esc(L.title === EN.title ? NEU.title : L.title) + '</p>' +
    '<p class="lede"><span class="p1">' + esc(L.coverLede) + '</span><br><span class="p2">' + esc(S.coverLede) + '</span></p>' +
    '<p class="handle">🦘 @ababykangaroo · Doha 2013 · ' + pair(L.withArchive, S.withArchive) + '</p>' +
    '<p class="tiles-strip">' + ['durian', 'joey', 'habibi', 'flamingo', 'star', 'tootsie'].map(id => em(W[id].e)).join('') + '</p>', 'cover');

  // 2 how to play
  const t4 = N[4].tiles, grid = [3, 0, 2, 3, 1, 5, 4, 3, 0, 1, 2, 2, 3, 5, 1, 0, 4, 1, 2, 0, 3, 3, 5, 4, 1, 4, 0, 2, 1, 3, 5, 2, 1, 4, 0, 3];
  slide('<h2>' + pair(L.playHow, S.playHow) + '</h2>' +
    '<div class="mini">' + grid.map((t, k) => '<div class="c' + (k === 8 ? ' sel' : '') + '">' + em(W[t4[t]].e) + '</div>').join('') + '</div>' +
    '<div class="panel">' + wordRow('khakis') + '<p class="tpd"><span class="k">TPD</span> ' + W.khakis.tpd.map(esc).join(' → ') + '</p></div>' +
    '<ol class="steps">' + L.steps.map((st, k) => '<li>' + pair(st, S.steps[k]) + '</li>').join('') + '<li>🗳️ ' + pair(PU.poll, PU2.poll) + '</li></ol>');

  // 3–16 the nights
  N.forEach(n => {
    const [line, src] = NIGHT_LINES[n.key];
    const ids = n.goals.map(g => g[0]).slice(0, 0);
    const quote = LANG === 'ne'
      ? '<blockquote>' + esc(line) + '<footer>SOURCED · TPD ' + esc(src) + '</footer></blockquote>'
      : '<blockquote>' + esc(L.lines[n.key]) + '<footer>GENERATED · ' + esc(L.translation) + ' TPD ' + esc(src) + '</footer></blockquote>';
    slide('<p class="eyebrow">' + pair(nightLabel(n), nightLabel2(n)) + ' · TPD ' + esc(n.draft) + '</p>' +
      '<h2 class="title"><span class="p1">' + esc(nightTitle(n)) + '</span><br><span class="p2">' + esc(nightTitle2(n)) + '</span></h2>' +
      '<div class="rebus-row"><p class="rebus">' + n.name.rebus.map(em).join('') + '</p><p class="name">' + esc(LANG === 'ne' ? n.name.word : L.names[n.key]) + '</p></div>' +
      (ids.length ? '<div class="words">' + ids.map(wordRow).join('') + '</div>' : '') +
      quote + pollBox(n.key) + archiveBox(n.key), 'night');
  });

  // 17 Java
  const javaNote = LANG === 'ne' ? ['नेपाली', NE.words.java[2]] : L.javaNote;
  const kind = k => (L.kinds && L.kinds[k]) || k;
  slide('<p class="eyebrow">' + pair(L.oneWord, S.oneWord) + '</p>' +
    '<div class="words solo">' + wordRow('java') + '</div>' +
    '<ul class="branches">' + [javaNote].concat(B.java.map(([k, t]) => [kind(k), t])).slice(0, 7).map(([k, t]) => '<li><span class="k">' + esc(k) + '</span> ' + esc(t.replace(' (REMEMBERED)', '')) + '</li>').join('') + '</ul>' +
    '<div class="archive"><p class="a-head">🗄️ ' + pair(L.archive, S.archive) + ' · ' + esc(L.grammar) + '</p><p class="a-cap">#doha → #qatar, 22 times. #qatar → #doha too: the one place in the archive where the wheel comes back.</p><p class="a-src">SOURCED · THE-MONTH-GAME-SPEC.md §13.4</p></div>');

  // 18 the exact opposite (the flip works on the original English)
  const src18 = 'Now it ended with the absence of light and a quiet headiness while I wondered why Yousef never just denied the dream.';
  const box = document.createElement('p'); box.textContent = src18; window.OPPOSITE.toggle(box);
  slide('<p class="eyebrow">' + pair(L.opposite, S.opposite) + '</p>' +
    '<blockquote>' + esc(src18) + '<footer>SOURCED · TPD May 2023</footer></blockquote>' +
    '<p class="arrow">👆 🔄</p>' +
    '<blockquote class="flipped">' + box.innerHTML + '<footer>GENERATED · ' + esc(L.oppWord) + '</footer></blockquote>' +
    '<p class="lede"><span class="p1">' + esc(L.tapAgain) + '</span><br><span class="p2">' + esc(S.tapAgain) + '</span></p>');

  // 19 070′
  const icons = ['🌱'].concat(N.filter((_, k) => k % 2 === 1).map(n => n.icon));
  const lg = LANG === 'ne' ? NEU.legend.map((x, k) => [x, EN.legend[k]]) : L.legend.map((x, k) => [x, (S === EN ? EN : NEU).legend[k]]);
  slide('<p class="eyebrow">070′</p>' +
    '<p class="eq">0′ = 0 + H</p><p class="eq small">H = T₁ + T₂ + T₃ + T₄ + T₅ + T₆ + T₇ + T₀ + 🗄️</p><p class="eq small">H ≠ 0 ⇒ 0′ ≠ 0</p>' +
    '<ul class="branches legend">' + ['0', 'T', '🗄️', '0′'].map((k, j) => '<li><span class="k">' + k + '</span> ' + pair(lg[j][0], lg[j][1]) + '</li>').join('') + '</ul>' +
    '<p class="states">' + icons.map((e, k) => '<span><b>' + k + '</b>' + em(e) + '</span>').join('<i>→</i>') + '<i>→</i><span><b>0′</b>' + em('✍️') + '</span></p>' +
    '<p class="lede"><span class="p1">' + esc(L.eqLede) + '</span><br><span class="p2">' + esc(S.eqLede) + '</span></p>');

  // 20 your name
  slide('<p class="palms">✍️</p><h2 class="title"><span class="p1">' + esc(L.yourName) + '</span><br><span class="p2">' + esc(S.yourName) + '</span></h2>' +
    '<p class="namebox">______ ' + em('❓') + em('🦩') + em('🌙') + '</p>' +
    '<p class="handle">' + em('🦘') + ' @ababykangaroo = a baby kangaroo = जोई = Joey</p>' +
    '<p class="lede big"><span class="p1">' + esc(L.notFinished) + '</span><br><span class="p2">' + esc(S.notFinished) + '</span></p>' +
    '<p class="cta">🔗 ' + pair(L.cta, S.cta) + '</p>', 'cover');

  window.SLIDE_COUNT = i;

  // captions
  const keys = [null, null].concat(N.map(n => n.key)).concat([null, null, null, null]);
  const extra = { 0: '🗄️ archive: @ababykangaroo, Doha 2013', 16: '🗄️ archive: #doha → #qatar → #doha', 18: '🗄️ H = T₁ + … + T₀ + the archive', 19: '🦘 @ababykangaroo' };
  const primary = k => LANG === 'ne' ? CAPTIONS_NE[k][0] : L.captions[k];
  const secondary = k => L.second === 'ne' ? CAPTIONS_NE[k][0] : CAPTIONS_NE[k][1];
  window.CAPTIONS = CAPTIONS_NE.map((_, k) => {
    const key = keys[k], parts = [primary(k), secondary(k)];
    if (key && POLLS[key]) {
      const p = POLLS[key];
      parts.push('🗳️ ' + PU.poll + ' · ' + PU2.poll + ': ' + p[LANG] + '\n' + p.o.map(([t, s], j) => 'ABC'[j] + ') ' + t + '  (TPD ' + s + ')').join('\n') + '\n' + PU.vote + ' · ' + PU2.vote + ' · ' + PU.all + ' ✓');
    }
    parts.push(key ? '🗄️ ' + L.archive + ' · archive · @ababykangaroo · ' + ARCHIVE[key][0] + '\n"' + ARCHIVE[key][1] + '"' : (extra[k] || ''));
    parts.push(TAGS + ' ' + L.tags);
    return parts.filter(Boolean).join('\n\n');
  });
  window.POLL_TEXT = N.map(n => POLLS[n.key] ? { night: n.title, q: POLLS[n.key][LANG], q2: POLLS[n.key][L.second], o: POLLS[n.key].o } : null);
})();
