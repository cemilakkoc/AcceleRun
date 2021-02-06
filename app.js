require("dotenv").config();

const app = require("express")();

// use bodyparser mw to get req.body object
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const axios = require("axios");

app.post("/website", async (req, res) => {
    let { website } = req.body;

    try {
        let { data } = await axios.get(website);        
        
        return res.json({
            code: 200,
            data: data
        })

    } catch (e) {
        return res.status(400).json({
            error: "The given url is invalid or not reachable.",
            code: 400,
            status: "error"
        })
    }
    
    
});



let { PORT } = process.env;
app.listen(PORT, () => {
    console.info(`Listening on port ${PORT}`);
});