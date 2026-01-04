const express = require("express");

const app = express();

//app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname));
app.use(express.static(__dirname + "/js"));
app.use(express.static(__dirname + "/data"));
app.use(express.static(__dirname + "/css"));
app.use(express.static(__dirname + "/img"));
app.use(express.static(__dirname + "/src"));

// Route handlers should use app.get() and come after static middleware
app.get("/bookPages/timeLinePage", function(request, response) {
    response.sendFile(__dirname + "/bookPages/timeLinePage.html");
});

app.get("/bookPages/timeLinePage.html", function(request, response) {
    response.sendFile(__dirname + "/bookPages/timeLinePage.html");
});

app.get("/bookPages/bookPage.html", function(request, response) {
    response.sendFile(__dirname + "/bookPages/bookPage.html");
});

app.get("/bookPages/privacy.html", function(request, response) {
    response.sendFile(__dirname + "/bookPages/privacy.html");
});

// Root route - should be last
app.get("/", function(request, response) {
    response.sendFile(__dirname + "/index.html");
});

app.listen(3000, function() {
    console.log("Server is running on http://localhost:3000");
});