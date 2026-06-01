import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  headless: false,
  args: ['--no-sandbox', '--window-size=1400,900'],
  defaultViewport: null
});

const page = await browser.newPage();
await page.setViewport({ width: 1400, height: 900 });
page.on('pageerror', e => console.error('[JS ERROR]', e.message));

await page.goto('file:///C:/Users/tn/Twinssey-Odyseey/index.html', { waitUntil: 'domcontentloaded' });
await page.waitForFunction(() => typeof renderer !== 'undefined' && scene.children.length > 5, { timeout: 15000 });

// Let animation loop run for 3s to populate everything
await new Promise(r => setTimeout(r, 3000));

const dataUrl = await page.evaluate(() => {
  renderer.render(scene, camera);
  return document.querySelector('#world canvas').toDataURL('image/png');
});

const { writeFileSync } = await import('fs');
writeFileSync('C:\\Users\\tn\\Twinssey-Odyseey\\screenshot.png', Buffer.from(dataUrl.split(',')[1], 'base64'));
console.log('Done');
await browser.close();
