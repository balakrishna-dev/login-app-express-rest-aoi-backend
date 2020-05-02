const mysql = require('mysql');

function connection(){
 con = mysql.createConnection({
    host : "localhost",
    user : "root" ,
    password : "12345",
    database : "test"
});
return con;
}


module.exports= {
    connection
}