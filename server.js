const express = require("express");

const app = express();

//app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname));
app.use(express.static(__dirname + "/js"));
app.use(express.static(__dirname + "/data"));
app.use(express.static(__dirname + "/css"));
app.use(express.static(__dirname + "/img"));
app.use(express.static(__dirname + "/src"));


app.use("/", function(request, response) {

    response.sendFile(__dirname + "./index.html");
});

app.use("./timeLinePage(.html)?", function(request, response) {

    response.send(request.url)
})

app.listen(3000);