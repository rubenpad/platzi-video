const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const config = require('./src/server/config/env');

const isEnvProduction = config.mode === 'production';

module.exports = {
  mode: isEnvProduction ? 'production' : 'development',
  devtool: isEnvProduction ? 'hidden-source-map' : 'cheap-source-map',
  entry: './src/frontend/index.js',
  output: {
    path: isEnvProduction
      ? path.join(process.cwd(), './src/server/public/') : '/',
    filename: isEnvProduction
      ? 'static/js/[name].[hash].js'
      : 'static/js/[name].js',
    publicPath: '/',
    chunkFilename: isEnvProduction
      ? 'static/js/[hash].chunk.js'
      : 'static/js/[name].chunk.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    minimize: isEnvProduction,
    minimizer: [
      new TerserPlugin({
        terserOptions: { ecma: 8 },
      }),
    ],
    splitChunks: {
      chunks: 'all',
      name: true,
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          reuseExistingChunk: true,
          priority: 1,
          filename: isEnvProduction
            ? 'static/vendor.[hash].js'
            : 'static/vendor.js',
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
          options: {
            cacheDirectory: true,
            cacheCompression: false,
            compact: isEnvProduction,
          },
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
    isEnvProduction && new webpack.HotModuleReplacementPlugin(),
    isEnvProduction && new CompressionPlugin({ test: /\.js$/, filename: '[path].gz' }),
    isEnvProduction && new ManifestPlugin(),
  ],
};
