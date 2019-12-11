const Express = require('express');
const _application = Express();

_application.listen(3000, ()=>{
    console.log("Application is running and listening on port 3000");
});