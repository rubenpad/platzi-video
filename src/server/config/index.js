require('dotenv').config();

const config = {
  mode: process.env.NODE_ENV,
  port: process.env.PORT || 3000,
};

module.exports = config;
