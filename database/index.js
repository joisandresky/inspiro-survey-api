var mysql = require('mysql');

var instance = null;

class DBConnection {
  constructor() {
    if (!instance) instance = this;
    this.conn = mysql.createConnection({
      host: 'localhost',
      // port: 8889,
      user: 'root',
      password: 'root',
      database: 'inspiro_survey_db'
    });

    return this.conn;
  }
}

module.exports = DBConnection;