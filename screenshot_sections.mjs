import { chromium } from 'playwright';

const browser = await chromium.launch();

// Desktop: capture each section viewport
const deskPage = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await deskPage.goto('http://localhost:3020', { waitUntil: 'networkidle' });
await deskPage.waitForTimeout(1500);

// Scroll slowly to trigger all animations
const totalH = await deskPage.evaluate(() => document.body.scrollHeight);
for (let y = 0; y < totalH; y += 300) {
  await deskPage.evaluate((s) => window.scrollTo(0, s), y);
  await deskPage.waitForTimeout(100);
}
await deskPage.evaluate(() => window.scrollTo(0, 0));
await deskPage.waitForTimeout(800);

// Get section positions
const sections = await deskPage.evaluate(() => {
  const result = [];
  document.querySelectorAll('section, footer').forEach((el, i) => {
    const r = el.getBoundingClientRect();
    const scrollY = window.scrollY;
    result.push({
      tag: el.tagName,
      index: i,
      top: r.top + scrollY,
      height: el.offsetHeight,
      firstH: el.querySelector('h2,h3')?.textContent?.trim().slice(0, 40) || `section-${i}`
    });
  });
  return result;
});

console.log('Sections found:');
sections.forEach(s => console.log(`  [${s.index}] ${s.firstH} — top:${Math.round(s.top)} h:${s.height}`));

// Screenshot each section
for (const s of sections) {
  await deskPage.evaluate((y) => window.scrollTo(0, y), Math.max(0, s.top - 20));
  await deskPage.waitForTimeout(300);
  await deskPage.screenshot({ path: `section_${s.index}_desk.png`, clip: { x: 0, y: 0, width: 1440, height: Math.min(s.height + 40, 1200) } });
}

await deskPage.close();

// Mobile: same process
const mobilePage = await browser.newPage({ viewport: { width: 375, height: 812 } });
await mobilePage.goto('http://localhost:3020', { waitUntil: 'networkidle' });
await mobilePage.waitForTimeout(1500);

const totalHM = await mobilePage.evaluate(() => document.body.scrollHeight);
for (let y = 0; y < totalHM; y += 300) {
  await mobilePage.evaluate((s) => window.scrollTo(0, s), y);
  await mobilePage.waitForTimeout(100);
}
await mobilePage.evaluate(() => window.scrollTo(0, 0));
await mobilePage.waitForTimeout(800);

const sectionsM = await mobilePage.evaluate(() => {
  const result = [];
  document.querySelectorAll('section, footer').forEach((el, i) => {
    result.push({
      index: i,
      top: el.getBoundingClientRect().top + window.scrollY,
      height: el.offsetHeight,
      firstH: el.querySelector('h2,h3')?.textContent?.trim().slice(0, 40) || `section-${i}`
    });
  });
  return result;
});

console.log('\nMobile section heights:');
sectionsM.forEach(s => console.log(`  [${s.index}] ${s.firstH} — h:${s.height}px`));

for (const s of sectionsM) {
  await mobilePage.evaluate((y) => window.scrollTo(0, y), Math.max(0, s.top - 20));
  await mobilePage.waitForTimeout(300);
  await mobilePage.screenshot({ path: `section_${s.index}_mobile.png`, clip: { x: 0, y: 0, width: 375, height: Math.min(s.height + 40, 1600) } });
}

await mobilePage.close();
await browser.close();
console.log('\nDone!');
