import getManifest from '../getManifest';

const { config } = require('../config');

let files = {};

if (config.env === 'production') {
  files = getManifest();
} else {
  files = {
    'main.js': 'assets/main.js',
    'vendors.js': 'assets/vendor.js',
  };
}

function render(body, styles, preloadedState) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css?family=Muli&display=swap" rel="stylesheet">
    <title>Platzi Video | Watch videos and movies anytime.</title>
    ${styles}
  </head>
  <body>
    <div id="app">${body}</div>
    <script>
      // WARNING: See the following for security issues around embedding JSON in HTML:
      // http://redux.js.org/recipes/ServerRendering.html#security-considerations
      window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')};
      </script>
    <script src="${files['main.js']}" type="text/javascript"></script>
    <script src="${files['vendors.js']}" type="text/javascript"></script>
  </body>
  </html>
  `;
}

export default render;
