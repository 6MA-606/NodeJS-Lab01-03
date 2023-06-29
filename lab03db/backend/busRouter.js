const express = require("express");
const path = require("path");
const mysql = require("mysql");
require("dotenv").config();

const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;

const conn = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
})

conn.connect((err) => {
    if (err) throw err;
})

router.get("/showRoute", (req, res) => {
    conn.query("SELECT routenumber, ticketprice FROM busroute", (err, data) => {
        if (err) throw err;
        res.send(data);
    });
});

router.get("/showSchedule", (req, res) => {
    const busNumber = req.query.busNum;
    const busStartTime = req.query.startTime;
    let sql = `SELECT stopstation, stoptime FROM timetable WHERE routenumber=${busNumber} AND starttime='${busStartTime}'`
    // const schedule = {station: "", time: ""}
    conn.query(sql, (err, data) => {
        if (err) throw err;
        res.render(path.join(__dirname+"/../frontend/schedule.ejs"), {
            schedule: data,
            busRouteNumber: busNumber,
        })
    });
});

router.get("/addNewBus", (req, res) => {
    const data = req.query;
    const userData = {
        routeNumber: data.busNum,
        ticketP: data.price,
        startLoc: data.start,
        endLoc: data.end,
    }
    let sql = `INSERT INTO busroute VALUES (${userData.routeNumber}, ${userData.ticketP}, '${userData.startLoc}', '${userData.endLoc}')`;
    console.log(sql);
    conn.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
    });
    res.send("Your new bus info is proceed");
});

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname+"/../frontend/index.html"));
});

app.use("/", router);

app.listen(port, '10.4.53.25', () => {
    console.log(`Server running on port ${port}`)
})