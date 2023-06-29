const express = require("express");
const path = require("path")
const router = express.Router();
const port = 4084;

const app = express();

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname+"/../frontend/bookshopMain.html"));
});

router.get("/booklist", (req, res) => {
    app.use(express.static(__dirname+"/../frontend"));
    res.sendFile(path.join(__dirname+"/../frontend/listOfBooks.html"));
});

router.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname+"/../frontend/contact.html"));
});

router.get("/test", (req, res) => {
    xValue = parseInt(req.query.x);
    yValue = parseInt(req.query.y);
    console.log(xValue*yValue);
});

router.get("/sell", (req, res) => {
    bookisbn = parseInt(req.query.isbn);
    amountOfBook = parseInt(req.query.amount);
    price = [100,150];
    bookisbn = bookisbn%10;
    bookprice = price[bookisbn - 1];
    pay = amountOfBook * bookprice;
    res.write("<html><body>");
    res.write("Cost of book is " + pay);
    res.write("</body></html>");
    res.end();
});

app.use("/", router);

app.listen(port, '10.4.53.25', () => {
    console.log("listening on port " + port);
});