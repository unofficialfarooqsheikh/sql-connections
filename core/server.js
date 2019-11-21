//this is the server part of our application
var http = require("http");
var emp = require('../controllers/employees');//emp.get,add,... can be seen here
var settings =require('../settings');

http.createServer(function(req, resp){
    switch(req.method) { //req.method will contain what kind of request is made

        case "GET":
            //the requests are as folllows which will be served by GET
            //EX: http://web:9000/employees       GET (fetch/read/query)
            //EX: http://web:9000/employees/1001   GET (fetch/read/query)
            if(req.url === "/"){
                resp.end();
            }
            else if(req.url === "/employees"){
                emp.getList(req, resp);
            }
             break;
        case "POST":
            //EX: http://web:9000/employees/1001   POST (Insert)
            break;
        case "PUT":
             break;
        case "DELETE":
             break;
        default:
            break;
    }


}).listen(settings.webPort,//port where it listens which is mentioned in settings.js
    function(){

        console.log("started listening at:" + settings.webPort);
    }

)