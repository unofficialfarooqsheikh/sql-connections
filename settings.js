exports.dbConfig = { //exports for using this dbConfig in other file(ex:db.js)
    driver: "msnodesqlv8",
    server: "DESKTOP-IRHNO1M",
    database: "test",
    user: "test",
    password: "test",
    options: {
        trustedConnection: true,
    }
};

exports.webPort = 9000;