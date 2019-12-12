'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const _application = express();
_application.use(bodyParser.json());
_application.use(cookieParser());

_application.get('/signin', (request, response)=>{
    var _response = {
        message: "Hello World"
    };
});

var _server = _application.listen(3000, ()=>{
    var _host = _server.address().address;
    var _port = _server.address().port;
    console.log("Application is running and listening at http://%s:%s", _host, _port);
});