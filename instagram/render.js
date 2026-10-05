// Renders build.html into 20 PNGs (1080×1350) and writes CAPTIONS.md.
// Run: node render.js
const path = require('path');
const fs = require('fs');
const { chromium } = require(process.env.PLAYWRIGHT || 'playwright');

(async () => {
  const out = path.join(__dirname, 'slides');
  fs.mkdirSync(out, { recursive: true });
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 1 });
  const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto('file://' + path.join(__dirname, 'build.html'));
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(800);
  const n = await p.evaluate(() => window.SLIDE_COUNT);
  for (let i = 1; i <= n; i++) {
    await p.locator('#s' + i).screenshot({ path: path.join(out, String(i).padStart(2, '0') + '.png') });
  }
  const caps = await p.evaluate(() => window.CAPTIONS);
  let md = '# Tootsie in the Desert: 20 Instagram slides\n\nOne caption per slide. Nepali first, English beside it. Slides are in `slides/`, 1080 × 1350.\n\n';
  caps.forEach((c, k) => { md += '## ' + String(k + 1).padStart(2, '0') + '\n\n```\n' + c + '\n```\n\n'; });
  fs.writeFileSync(path.join(__dirname, 'CAPTIONS.md'), md);
  console.log('slides', n, 'captions', caps.length, 'errors', errs);
  // overflow check: anything running past the bottom of a slide
  const over = await p.evaluate(() => [...document.querySelectorAll('.slide')].map((s, k) => {
    const body = s.querySelector('.body'); return body.scrollHeight > body.clientHeight + 2 ? k + 1 : null;
  }).filter(Boolean));
  console.log('overflowing slides:', over);
  await b.close();
})();
