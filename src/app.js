require("dotenv").config();

const app = require("express")();

const axios = require("axios");
const firework = require("./firework");
const socials = require("./socials");

const puppeteer = require("puppeteer");

/**
 * @description Gets the HTML content
 * @param {string} url website to scrape.
 */
getHTML = async (url) => {
    const browser = await puppeteer.launch({
        headless: true,
        // executablePath: '/usr/bin/chromium-browser',
        args: [
        "--no-sandbox",
        "--disable-gpu",
        ]
    });
 
    const page = await browser.newPage();
    await page.goto(url, {
        // timeout: 5000,
        waitUntil: 'networkidle0', // see: https://github.com/puppeteer/puppeteer/issues/1552#issuecomment-350954419
    });

    let html = await page.evaluate(() => { return document.documentElement.innerHTML });
    await page.close();
    await browser.close();

    return html;
}

app.get("/*", async (req, res) => {
    res.setHeader('Content-type','text/html')
    let website = req.params[0];
    
    try {
        // try to see if the url is valid or not.
        new URL(website);
        let data = await getHTML(website);

        data += firework
        data += socials
        
        res.send(data);
    } catch (e) {
        return res.status(404).send(`
            <html>
                <head>
                    <title>Not Found</title>
                </head>
                <body>
                    <h4>Err: ${e.message}</h4>
                </body>
            </html>
        `)
    }
    
    
});



let { PORT } = process.env;
app.listen(PORT, () => {
    console.info(`Listening on port ${PORT}`);
});