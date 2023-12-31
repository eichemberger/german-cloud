const logger = require('../utils/logs/logger');

require('dotenv').config();

const DEFAULT_SECRET = 'secret';
const LOG_BANNER = process.env.LOG_BANNER === 'true';

const appConfig = {
  PORT: process.env.PORT || 8080,
  LOG_BANNER,
};

const secrets = {
  JWT_SECRET: process.env.JWT_SECRET || DEFAULT_SECRET,
  SESSION_SECRET: process.env.SESSION_SECRET || DEFAULT_SECRET,
};

const {
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
  DB_HOST,
  DB_LOG_QUERIES,
} = process.env;

const db = {
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
  DB_HOST,
  DB_LOG_QUERIES: (DB_LOG_QUERIES && DB_LOG_QUERIES === 'true') || false,
};

const aws = {
  REGION: process.env.AWS_REGION,
  S3_BUCKET: process.env.AWS_S3_BUCKET,
  cdnUrl: process.env.AWS_CDN_URL,
};

function warnUser(secretsObj) {
  Object.entries(secretsObj).forEach(([name, value]) => {
    if (value === DEFAULT_SECRET) {
      logger.warn(`You are not setting a value for the variable ${name}. I'm going to use the default value`);
    }
  });
}

warnUser(secrets);

module.exports = {
  db,
  secrets,
  appConfig,
  aws,
};
