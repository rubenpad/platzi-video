const fs = require('fs');

function getManifest() {
  return JSON.parse(fs.readFileSync(`${__dirname}/public/manifest.json`, 'utf8'));
}

export default getManifest;
