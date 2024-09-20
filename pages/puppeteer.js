const puppeteer = require('puppeteer');

(async () => {
    // Launch a new browser instance in headless mode
    const browser = await puppeteer.launch({ headless: true });
    
    // Open a new page
    const page = await browser.newPage();

    // Navigate to the website you want to scrape
    await page.goto('https://example.com'); // Change to your desired URL

    // Scrape the page's content
    const content = await page.evaluate(() => {
        return document.body.innerText; // Gets the text content of the page
    });

    // Print the content in the console
    console.log(content);

    // Close the browser
    await browser.close();
})();
