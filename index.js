'use strict';
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const _application = express();
_application.use(bodyParser.json());
_application.use(bodyParser.urlencoded())
_application.use(cookieParser());

const stage = require('./configuration')[process.env.NODE_ENV];
_application.get('/signin', (request, response)=>{
    var _response = {
        message: "Hello World"
    };
    response.statusCode = 200;
    response.send(_response);
});

var _server = _application.listen('${stage.port}', ()=>{
    var _host = _server.address().address;
    console.log('Application is running and listening at http://%s:${stage.port}', _host);
});

module.exports = _application;