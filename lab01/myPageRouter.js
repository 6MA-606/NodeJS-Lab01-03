const express = require("express");
const app = express();
const path = require("path")
const router = express.Router();
const port = 4084;

router.get("/", (req, res) => {
    if (req.query.std) {
        res.send("https://10.4.53.25:" + req.query.std);
    } else { 
        res.sendFile(path.join(__dirname + "/index.html"));
    }
});

router.get("/phamacy", (req, res) => {
    res.sendFile(path.join(__dirname + "/phamacy.html"));
});

app.use("/", router);

const server = app.listen(port, '10.4.53.25', () => {
    console.log("listening on port " + port)
})