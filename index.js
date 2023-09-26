//the file server
//Debashish Buragohain

require('dotenv').config();
const fs = require('fs');
const express = require('express');
const crypto = require('crypto');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const morgan = require("morgan");

const app = express();
const port = process.env.PORT;
app.set('view engine', 'ejs');

//allowing same origin resource sharing
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', false); //no cookies needed
    next(); //pass to the next layer of middleware
});

app.use("/file", express.static(__dirname + "/views"))
app.use(helmet({ crossOriginResourcePolicy: false }))
app.use(bodyParser.json({ limit: '50MB' }));
app.use(morgan('common'))
app.get('/', (req, res) => {
    res.redirect('/file/upload.html');
});

//the uploader function
app.post("/upload", (req, res) => {
    try {
        const fileBuffer = req.body;
        const hashSum = crypto.createHash('sha256');
        hashSum.update(fileBuffer);
        const hex = hashSum.digest('hex');
        fs.writeFileSync(`./public/${hex}.pdf`, 'binary');
        res.json({ hash: hex });
    }
    catch (err) {
        res.json({ error: err.message });
    }
})

//the downloader function
app.get("/download", (req, res) => {
    const givenHash = req.params;
    try {
        if (!fs.existsSync(`./public/${givenHash}.pdf`)) {
            res.json({ error: 'File does not exist' });
        }
        else {
            const fileBuffer = fs.readFileSync(`./public/${givenHash}.pdf`);
            const hashSum = crypto.createHash('sha256');
            hashSum.update(fileBuffer);
            const hex = hashSum.digest('hex');
            if (hex !== givenHash) {
                res.json({ error: 'File hash does not match' });
            }
            else {
                res.json({ file: fileBuffer });
            }
        }
    }
    catch (err) {
        res.json({ error: err.message });
    }
})


app.listen(port, console.log("Hashing file server running on port", port))