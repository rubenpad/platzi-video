require('dotenv').config()

const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 3000,
  apiUrl: process.env.API_URL,
  apiKeyToken: process.env.API_KEY_TOKEN,
}

module.exports = { config }
