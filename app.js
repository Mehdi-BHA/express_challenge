const express = require("express");
const app = express();
const port = 5000;

const logger = (req, res, next) => {
    let date = new Date("January 14, 2021 12:15:30");
    if (
        date.getDay() === 0 ||
        date.getDay() > 6 ||
        date.getHours() >= 17 ||
        date.getHours < 9
    ) {
        res.sendFile(__dirname + "/Public/work.html");
    } else {
        next();
    }
};

app.use(logger);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/Public/index.html");
});

app.get("/services", (req, res) => {
    res.sendFile(__dirname + "/Public/services.html");
});

app.get("/contact", (req, res) => {
    res.sendFile(__dirname + "/Public/contact.html");
});

app.get("/css/style.css", (req, res) => {
    res.sendFile(__dirname + "/Public/css/style.css");
});

app.listen(port, () => {
    console.log("Server running on port " + port);
});
