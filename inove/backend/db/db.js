const mysql = require("mysql")

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"12345",
    database: "inove"
})

exports.Connection = function() { 
    return db
}

