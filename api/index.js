const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(express.static(path.join(__dirname, "client", "build")));

const port = process.env.PORT || 5000;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

app.use(bodyParser.json());

app.use("/", routes);

app.use("*", (req, res, next) => {
    res.sendFile(path.join(__dirname, '../',"build", "index.html"));
});

app.use((err, req, res, next) => {
    console.log(err);
    next();
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
