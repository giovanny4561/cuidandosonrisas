import { chromium } from 'playwright';

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 375, height: 812 }
];

const browser = await chromium.launch();

for (const vp of viewports) {
  const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
  await page.goto('http://localhost:3020', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);

  // Scroll through the page slowly to trigger GSAP ScrollTrigger
  const totalHeight = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < totalHeight; y += 400) {
    await page.evaluate((scrollY) => window.scrollTo(0, scrollY), y);
    await page.waitForTimeout(120);
  }
  // Scroll back to top
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(600);

  await page.screenshot({ path: `${vp.name}_scroll.png`, fullPage: true });
  console.log('Done:', vp.name, `(${totalHeight}px total)`);
  await page.close();
}

await browser.close();
