var sql = require("mssql/msnodesqlv8");

var dbConfig = {
    driver: "msnodesqlv8",
    server: "DESKTOP-IRHNO1M",
    database: "test",
    user: "test",
    password: "test",
    options: {
        trustedConnection: true,
    }
};

function getEmp() {
    var conn = new sql.ConnectionPool(dbConfig); //Can also have callback with comma
    //^(this line is just instance of sql connection)
    var req = new sql.Request(conn); //Request instance from connection

    conn.connect(function (err) { //this function will be executed regardless off connection success or not!
        if (err) {
            console.log(err); //if any error log it
            return;
        }
        req
            .query("SELECT * FROM Employee", function (err, data) { //callback f'n having error which return
                //me any error with the sql query data will have all the data from database
                if (err) {
                    console.log(err); //if any error log it
                    return;
                } else {
                    console.log(data); // if successfull log the data
                }
                conn.close(); // close the connection ***important closing the connection whether succesful or not

            });
    });
}

getEmp();