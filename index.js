'use strict';
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const _application = express();
_application.use(bodyParser.json());
_application.use(bodyParser.urlencoded())
_application.use(cookieParser());

const handler = require('./handler');
const stage = require('./configuration')[process.env.NODE_ENV];
_application.get('/', (request, response)=>{
     var _respose = {
        message: "Hello World"
    };
    response.statusCode = 200;
    response.send(_response);
});

_application.post('/signin', (request,response)=>{
    const {username, password} = request.body;
});

var _server = _application.listen(process.env.NODE_PORT, ()=>{
    var _host = _server.address().address;
    console.log('Application is running and listening at http://%s:%s', _host, process.env.NODE_PORT);
});

module.exports = _application;