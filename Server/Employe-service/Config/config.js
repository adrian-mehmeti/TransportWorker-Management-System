const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '',
  user: '',
  password: '',
  database: '',
});

connection.connect(function (error) {
  if (error) {
    console.log('Error');
  } else {
    console.log('Connected');
  }
});

module.exports = connection;
