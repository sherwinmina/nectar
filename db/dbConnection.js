const bluebird = require('bluebird');

const options = {
  promiseLib: bluebird
};

const pgp = require('pg-promise')(options);

const dbConfiguration = {
  host: 'localhost',
  port: '5432',
  database: 'nectar'
};

const db = pgp(dbConfiguration);

module.exports = db;
