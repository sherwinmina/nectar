const pgp = require('pg-promise')();

const dbConfiguration = {
  host: 'localhost',
  port: '5432',
  database: 'nectar'
};

const db = pgp(dbConfiguration);
