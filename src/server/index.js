require('@babel/register')({
  ignore: [/node_modules/],
  presets: ['@babel/preset-env', '@babel/preset-react'],
});

require('asset-require-hook')({
  extensions: ['jpg', 'png', 'svg', 'gif'],
  name: '/assets/[hash].[ext]',
});

require('./server.js');
