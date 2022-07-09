var mysql = require('mysql');

var conn = mysql.createConnection({
    host: process.env.host,
    port: process.env.dbPort,
    database:process.env.dbName,
    user: process.env.dbusername,
    password: process.env.dbpassword
});
// var conn = mysql.createConnection({
//   host: 'localhost', 
//   user: 'root',      
//   password: '',     
//   database: 'nodeapp'
// }); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;