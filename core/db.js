var sql = require("mssql/msnodesqlv8");
var settings = require('../settings');//import from settigns.js
// settings.dbConfig is available here

exports.executeSql = function (sql,callback) {//exports for using this executeSql in other file
    var conn = new sql.Connection(settings.dbConfig); //^(this line is just instance of sql connection)
    conn.connect
    .then(function () { 
        var req = new sql.Request(conn); //Request instance from connection
        req.query(sql)
        .then(function(recordset){
            callback(recordset);
            
         })
        .catch(function(err){ 
            callback(null,err);
        })
    })
    .catch(function(err){
        console.log(err);
        callback(null,err);//always the call back ahs two parameters 1.data(null here) 2.error(err)
    });
};

