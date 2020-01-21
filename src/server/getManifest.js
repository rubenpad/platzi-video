const fs = require('fs');
const { config } = require('./config');

function getManifest() {
  if (config.env === 'production') {
    try {
      return JSON.parse(
        fs.readFileSync(`${__dirname}/public/manifest.json`, 'utf8')
      );
    } catch (error) {
      console.error(error);
    }
  }
}

export default getManifest;
