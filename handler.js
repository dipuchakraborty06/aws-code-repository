'use strict';

const signin = (request, respose)=>{
    var _respose = {
        message: "Hello World"
    };
    return respose.status(200).end(_respose);
};