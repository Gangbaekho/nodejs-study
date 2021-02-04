const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "jinsoo",
  password: "jinsoo",
  database: "node-complete",
});

module.exports = pool.promise();
