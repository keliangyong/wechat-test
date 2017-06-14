var express = require('express');
var app = express();

app.get('/wx', function (req, res) {
    token = "evakely";
    res.send(token);
});



var server = app.listen(80, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});