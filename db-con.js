const mysql = require('mysql');

function connection() {
	con = mysql.createPool({
		connectionLimit: 10,
		host: 'localhost',
		user: 'root',
		password: '12345',
		database: 'test',
		debug: false
	});

	return con;
}

module.exports = {
	connection
};
