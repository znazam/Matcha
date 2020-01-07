var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "node",
  password: "123456",
  //database: "matcha"
});

con.connect(connection);

function connection(err) {
	if (err) throw err;
	console.log("Connected!");
	con.query("CREATE DATABASE IF NOT EXISTS matcha", databaseCallback);
}

function databaseCallback(err, result) {
	if (err) throw err;
	console.log(result);
	console.log("Database created");
}