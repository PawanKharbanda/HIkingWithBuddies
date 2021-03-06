var express = require("express");
var app = express();
app.use(express.static('public'));

app.get("/", function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3090, function () {
    console.log("Site is running");
});