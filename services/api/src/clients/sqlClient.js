// @flow

const MariaSQL = require('mariasql');
const logger = require('../logger');

const getSqlClient = () => {
  const sqlClient = new MariaSQL({
    host: 'api-db',
    port: 3306,
    user: 'api',
    password: 'api',
    db: 'infrastructure',
  });

  sqlClient.on('error', error => {
    logger.error(error);
  });

  return sqlClient;
};

module.exports = {
  getSqlClient,
};
