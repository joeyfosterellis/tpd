// Renders build.html into slides for every language and format, and writes the captions.
//   langs: ne (Nepali + English), sa (Sanskrit + English), es (Spanish + Nepali)
//   formats: ig (Instagram 1080 × 1350), tt (TikTok 1080 × 1920)
// Run: node render.js
const path = require('path');
const fs = require('fs');
const { chromium } = require(process.env.PLAYWRIGHT || 'playwright');
const LANGS = { ne: 'Nepali', sa: 'Sanskrit', es: 'Spanish' };
const FMTS = { ig: ['Instagram', 1350], tt: ['TikTok', 1920] };

(async () => {
  const b = await chromium.launch();
  const report = [];
  for (const [fmt, [fname, height]] of Object.entries(FMTS)) {
    for (const [lang, lname] of Object.entries(LANGS)) {
      const out = path.join(__dirname, 'slides', fmt + '-' + lang);
      fs.mkdirSync(out, { recursive: true });
      const p = await b.newPage({ viewport: { width: 1080, height }, deviceScaleFactor: 1 });
      const errs = []; p.on('pageerror', e => errs.push(e.message));
      await p.goto('file://' + path.join(__dirname, 'build.html') + '?lang=' + lang + '&fmt=' + fmt);
      await p.evaluate(() => document.fonts.ready);
      await p.waitForTimeout(600);
      const n = await p.evaluate(() => window.SLIDE_COUNT);
      for (let i = 1; i <= n; i++) await p.locator('#s' + i).screenshot({ path: path.join(out, String(i).padStart(2, '0') + '.png') });
      const caps = await p.evaluate(() => window.CAPTIONS);
      let md = '# Tootsie in the Desert: ' + fname + ', ' + lname + '\n\nOne caption per slide. Slides are in `slides/' + fmt + '-' + lang + '/`.\n\n';
      caps.forEach((c, k) => { md += '## ' + String(k + 1).padStart(2, '0') + '\n\n```\n' + c + '\n```\n\n'; });
      fs.writeFileSync(path.join(__dirname, 'CAPTIONS-' + fmt + '-' + lang + '.md'), md);
      const over = await p.evaluate(() => [...document.querySelectorAll('.slide')].map((s, k) => {
        const body = s.querySelector('.body'); return body.scrollHeight > body.clientHeight + 2 ? k + 1 : null;
      }).filter(Boolean));
      report.push(fmt + '-' + lang + ': ' + n + ' slides, overflow ' + JSON.stringify(over) + (errs.length ? ' errors ' + errs : ''));
      await p.close();
    }
  }
  console.log(report.join('\n'));
  await b.close();
})();
