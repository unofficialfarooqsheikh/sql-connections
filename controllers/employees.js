// this will be Like a main file to communicate with db.js and work with server
// All the crud operations related to employee table are to be done here
var db = require('../core/db');
// db.executeSql is available here

exports.getList=function(req, resp){ //gets all the employee lists
    db.executeSql("SELECT * FROM Employee", function(){

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