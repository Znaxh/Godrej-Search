// pages/api/scrape.js
import puppeteer from 'puppeteer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: 'URL is required' });
    }

    try {
      // Launch Puppeteer in headless mode
      const browser = await puppeteer.launch({ headless: true });
      const page = await browser.newPage();
      
      // Navigate to the specified URL
      await page.goto(url);

      // Scrape the page's content
      const content = await page.evaluate(() => {
        return document.body.innerText; // Gets the text content of the page
      });

      // Close the browser
      await browser.close();

      // Send the scraped content back to the client
      res.status(200).json({ content });
    } catch (error) {
      console.error('Error during scraping:', error);
      res.status(500).json({ error: 'Failed to scrape the page' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
