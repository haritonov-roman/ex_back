const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  password: 'rootfront0312',
  host: 'localhost',
  port: 5432,
  database: 'express_db'
});

module.exports = pool;