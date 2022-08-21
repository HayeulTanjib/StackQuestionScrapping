const puppeteer = require('puppeteer');

const url = 'https://koyeb.com';

const screenshot = async() => {
    console.log('Opening the browser...');
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    console.log(`Go to ${url}`);
    await page.goto(url);

    console.log('Taking the screenshoot');
    await page.screenshot({
        path: './screenshot.png',
        fullPage: true,
    });

    console.log('Closing the browser');
    await page.close();
    await browser.close();
    console.log('Job Done!');
}

screenshot();