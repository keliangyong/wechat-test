var express = require('express');
var app = express();

app.get('/wx', function (req, res) {
    console.log(req.params)
    if (!req.params.data) {
        res.send('Hello World!');
    }
    var data = req.params.data
    console.log(data)
    var signature = data.signature,
    timestamp = data.timestamp,
    nonce = data.nonce,
    echostr = data.echostr,
    token = "evakely";
    console.log(data)

    var list = [token, timestamp, nonce]
    res.send(echostr);
});



var server = app.listen(80, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});