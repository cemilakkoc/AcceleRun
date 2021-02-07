require("dotenv").config();


const express = require("express");
const app = express();

const path = require("path");
const cors = require("cors");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// handle cors
app.use(cors());

// public folder for css & js files
app.use(express.static(path.join(__dirname, "public")));

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
        executablePath: '/usr/bin/chromium-browser',
        args: [
        "--no-sandbox",
        "--disable-gpu",
        ]
    });
 
    const page = await browser.newPage();
    await page.goto(url, {
        // timeout: 5000,
        waitUntil: 'domcontentloaded', 
        // see: https://stackoverflow.com/a/64993873/9467969
        //      https://github.com/puppeteer/puppeteer/issues/1552#issuecomment-350954419
    });

    let html = await page.evaluate(() => { return document.documentElement.innerHTML });
    // let html = await page.content();
    await page.close();
    await browser.close();

    return html;
}

app.get("/website/*", async (req, res) => {
    res.setHeader('Content-type','text/html')
    let website = req.params[0];
    
    try {
        // try to see if the url is valid or not.
        new URL(website);
        let data = await getHTML(website);
        // get rid of the script tags
        // so the popups etc won't be executed.
        data.match(/<script.*?>.*?<\/script>/g)
        .forEach(item => {
            data = data.replace(item, "");
        })
        
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

app.get("/", (req, res) => {
    res.render('index.ejs');
});


let { PORT } = process.env;
app.listen(PORT, () => {
    console.info(`Listening on port ${PORT}`);
});