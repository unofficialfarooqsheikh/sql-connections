// this will be Like a main file to communicate with db.js and work with server
// All the crud operations related to employee table are to be done here
var db = require('../core/db');
// db.executeSql is available here

exports.getList=function(req, resp){ //gets all the employee lists
    db.executeSql("SELECT * FROM Employee", function(data,err){ //this will be executed in db.js
        if(err){
            resp.writeHead(500, "internal Error Occured",{"Content-Type":"text/html"});//defining the error (500 is code for internal error)
            resp.write("<html><body><title>500</title>500 Internal Error. Details:"+err+"</boy></html>")//Returning the error as a html page
        }
        else{
            resp.writeHead(200,{"Content-Type":"application/json"});//200 IS CODE FOR SUCCESS
            resp.write(JSON.stringify(data));//What ever iam getting in the data is being converted to JSON
        }
        resp.end();//the error info is sent to the client after ending 
    });
};

exports.get = function(req, resp, empno){ //gets one employee depending on the emp no 

};

exports.add = function( req, resp, reqBody){ //reqbody may be any data we need to post

};

exports.update = function( req, resp, reqBody){


};

exports.delete = function( req, resp, reqBody){ 

};