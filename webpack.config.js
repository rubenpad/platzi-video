const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const config = require('./src/server/config/index');

const isProd = config.mode === 'production';

module.exports = {
  mode: config.mode,
  devtool: isProd ? 'hidden-source-map' : 'cheap-source-map',
  entry: './src/frontend/index.js',
  output: {
    path: isProd ? path.join(process.cwd(), './src/server/public') : '/',
    filename: isProd ? 'assets/app-[hash].js' : 'assets/app.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  optimization: {
    minimizer: isProd ? [new TerserPlugin()] : [],
    splitChunks: {
      chunks: 'async',
      name: true,
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          reuseExistingChunk: true,
          priority: 1,
          filename: isProd ? 'assets/vendor-[hash].js' : 'assets/vendor.js',
          enforce: true,
          test(module, chunks) {
            const name = module.nameForCondition && module.nameForCondition();
            return chunks.some((chunk) => chunk.name !== 'vendor' && /[\\/]node_modules[\\/]/.test(name));
          },
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: {
          loader: 'eslint-loader',
        },
      },
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(svg|png|jpg|gif|mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    isProd ? () => {} : new webpack.HotModuleReplacementPlugin(),
    isProd ? new CompressionPlugin({
      test: /\.js$/,
      filename: '[path].gz',
    }) : () => {},
  ],
};
