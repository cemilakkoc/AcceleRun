require("dotenv").config();

const app = require("express")();

// use bodyparser mw to get req.body object
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const axios = require("axios");
const firework = require("./firework");
const socials = require("./socials");

app.get("/*", async (req, res) => {
    res.setHeader('Content-type','text/html')
    let website = req.params[0];


    try {
        let { data } = await axios.get(website);        

        data += firework
        data += socials
        
        res.send(data);
        // return res.render(data.toString("utf8"));

    } catch (e) {
        return res.status(404).send(`
            <html>
                <head>
                    <title>Not Found</title>
                </head>
                <body>
                    <h4>Not Found</h4>
                </body>
            </html>
        `)
    }
    
    
});



let { PORT } = process.env;
app.listen(PORT, () => {
    console.info(`Listening on port ${PORT}`);
});