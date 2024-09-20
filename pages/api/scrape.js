import puppeteer from 'puppeteer';

export default async function handler(req, res) {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ error: "URL is required" });
  }

  try {
    // Launch a new browser instance in headless mode
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    // Navigate to the provided URL
    await page.goto(url);
    
    // Scrape the page's content
    const content = await page.evaluate(() => document.body.innerText);
    
    await browser.close();

    // Return the scraped content as a response
    res.status(200).json({ content });
  } catch (error) {
    console.error("Error scraping the website:", error);
    res.status(500).json({ error: "Failed to scrape the website" });
  }
}
