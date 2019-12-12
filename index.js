'use strict';
const Express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const _application = Express();
_application.use(bodyParser.json());
_application.use(cookieParser());

_application.post('/signin', signin);

_application.listen(3000, ()=>{
    console.log("Application is running and listening on port 3000");
});