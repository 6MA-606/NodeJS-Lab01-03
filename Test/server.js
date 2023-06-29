const express = require("express");
const path = require("path");
const router = express.Router();
const port = 4084;

const app = express();
app.use(express.json());

router.post("/", (req, res) => {
    const data = req.body;
    var resData = { "result": data.x + data.y };
    res.json(resData);
});

app.use("/", router);

app.listen(port, "10.4.53.25", () => {
    console.log(`Listening on port ${port}`);
});