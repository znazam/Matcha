var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "node",
	password: "123456",
	database: "matcha"
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   var sql = "CREATE TABLE IF NOT EXISTS `users` ("+
//   " `Id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,"+
//   " `Username` VARCHAR(30) NOT NULL,"+
//   " `Firstname` VARCHAR(30) NOT NULL,"+
//   " `Surname` VARCHAR(30) NOT NULL,"+
//   " `Age` BOOL NOT NULL,"+
//   " `Gender` VARCHAR(1) NOT NULL,"+
//   " `Province` VARCHAR(30) NOT NULL,"+
//   " `Interested` VARCHAR(1) NOT NULL,"+
//   " `Race` VARCHAR(1) NOT NULL,"+
//   " `Email` VARCHAR(255) UNIQUE NOT NULL,"+
//   " `Passwd` VARCHAR(255) NOT NULL,"+
//   " `Verified` BOOL NOT NULL DEFAULT 0,"+
//   " `Notify` BOOL NOT NULL DEFAULT 0,"+
//   " `reg_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)";	
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });
// });

// con.connect(function(err) {
// 	if (err) throw err;
// 	console.log("Connected!");
// 	var sql = "CREATE TABLE IF NOT EXISTS `hobies` ("+
// 	" `Id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,"+
// 	" `Username` VARCHAR(30) NOT NULL,"+
// 	" `hobies` VARCHAR(500) NOT NULL,"+
// 	" `reg_date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP)";	
// 	con.query(sql, function (err, result) {
// 	  if (err) throw err;
// 	  console.log("Table created");
// 	});
//   });


// to alter a table that already exists
/////////////////////////////////////////////////////////////////////////////////
// con.connect(function(err) {
// 	if (err) throw err;
// 	console.log("Connected!");
// 	var sql = "ALTER TABLE `users` ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
// 	con.query(sql, function (err, result) {
// 	  if (err) throw err;
// 	  console.log("Table altered");
// 	});
//   });


// to insert into a table
//////////////////////////////////////////////////////////////////////////////////////
// con.connect(function(err) {
// 	if (err) throw err;
// 	console.log("Connected!");
// 	var sql = "INSERT INTO `hobies` (Username, hobies) VALUES ('MICH', 'drawing, working out, playing video games')";
// 	con.query(sql, function (err, result) {
// 	  if (err) throw err;
// 	  console.log("1 record inserted");
// 	});
//   });


// to insert multiple at a time 
//////////////////////////////////////////////////////////////
// con.connect(function(err) {
// 	if (err) throw err;
// 	console.log("Connected!");
// 	var sql = "INSERT INTO `users` (name, suname) VALUES ?";
// 	var values = [
// 	  ['John', 'a'],
// 	  ['Peter', 'b'],
// 	  ['Amy', 'q'],
// 	  ['Hannah', 'z'],
// 	  ['Michael', 'w'],
// 	  ['Sandy', 's'],
// 	  ['Betty', 'x'],
// 	  ['Richard', 'e'],
// 	  ['Susan', 'd'],
// 	  ['Vicky', 'c'],
// 	  ['Ben', 'r'],
// 	  ['William', 'f'],
// 	  ['Chuck', 'v'],
// 	  ['Viola', 't']
// 	];
// 	con.query(sql, [values], function (err, result) {
// 	  if (err) throw err;
// 	  console.log("Number of records inserted: " + result.affectedRows);
// 	});
//   });


// // to display specific information about a table
// //////////////////////////////////////////////////////////////
// con.connect(function(err) {
// 	if (err) throw err;
// 	var sql = "INSERT INTO `users` (username, Firstname, surname, age, gender, race, email, passwd) VALUES ('MICH', 'Michelle', 'Blue', '20', 'f', 'c', 'absome@e.com', 'pass')";
// 	con.query(sql, function (err, result) {
// 	  if (err) throw err;
// 	  console.log(result);
// 	});
//   });


// // select from a table
// //////////////////////////////////////////////////////////////
// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM users", function (err, result, fields) {
//     if (err) throw err;
//     console.log(fields);
//   });
// });

// //using where
// //////////////////////////////////////////////////////////////
//	con.connect(function(err) {
//	if (err) throw err;
//	con.query("SELECT * FROM users WHERE age = '20'", function (err, result) {
// 		if (err) throw err;
//			console.log(result);
// 		});
//	});

// // Use the '%' wildcard to represent zero, one or multiple characters:
// // //////////////////////////////////////////////////////////////
// con.connect(function(err) {
// 	if (err) throw err;
// 	con.query("SELECT * FROM users WHERE Firstname LIKE 'M%'", function (err, result) {
// 	  if (err) throw err;
// 	  console.log(result);
// 	});
//   });

// //Escape query values by using the placeholder ? method:
// //////////////////////////////////////////////////////////////
// var adr = '20';
// var gen = 'f';
// var sql = 'SELECT * FROM users WHERE age = ? OR Gender = ?';
// con.query(sql, [adr, gen], function (err, result) {
//   if (err) throw err;
//   console.log(result);
// });

// // Sort the result alphabetically by name: add DESC to oder it decending
// //////////////////////////////////////////////////////////////
// con.connect(function(err) {
// 	if (err) throw err;
// 	con.query("SELECT * FROM users ORDER BY Firstname", function (err, result) {
// 	  if (err) throw err;
// 	  console.log(result);
// 	});
//   });

// // Delete any record with the age "17":
// //////////////////////////////////////////////////////////////
// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "DELETE FROM users WHERE age = '17'";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Number of records deleted: " + result.affectedRows);
//   });
// });

// // deleting a table
// //////////////////////////////////////////////////////////////
// con.connect(function(err) {
// 	if (err) throw err;
// 	var sql = "DROP TABLE IF EXISTS users";
// 	con.query(sql, function (err, result) {
// 	  if (err) throw err;
// 	  console.log("Table deleted");
// 	});
//   });

// // overwrites data in a table
// //////////////////////////////////////////////////////////////
// con.connect(function(err) {
// 	if (err) throw err;
// 	var sql = "UPDATE users SET age = '21' WHERE Firstname = 'Michelle' AND Surname = 'Blue'";
// 	con.query(sql, function (err, result) {
// 	  if (err) throw err;
// 	  console.log(result.affectedRows + " record(s) updated");
// 	});
//   });

// // limits the amount of affected rows... adding offset will tell it where to start from OFFSET 2 which means start from 3 not 2.... to put this all into shorter terms you can user limit 2, 5 which means start from 2 and return 5
// //////////////////////////////////////////////////////////////
// con.connect(function(err) {
// 	if (err) throw err;
// 	var sql = "SELECT * FROM users LIMIT 5";
// 	con.query(sql, function (err, result) {
// 	  if (err) throw err;
// 	  console.log(result);
// 	});
//   });

// //finding a match in the two different tables
// //////////////////////////////////////////////////////////////
// con.connect(function(err) {
// 	if (err) throw err;
// 	var sql = "SELECT users.Username AS user, hobies.Username AS hobies FROM users JOIN hobies ON users.Username = hobies.Username";
// 	con.query(sql, function (err, result) {
// 	  if (err) throw err;
// 	  console.log(result);
// 	});
//   });  