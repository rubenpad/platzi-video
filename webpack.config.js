const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const { config } = require('./src/server/config');

const isEnvProduction = config.env === 'production';
const isEnvDevelopment = config.env === 'development';

module.exports = {
  mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',
  entry: './src/frontend/index.js',
  output: {
    path: isEnvProduction
      ? path.join(process.cwd(), './src/server/public')
      : isEnvDevelopment && '/',
    filename: isEnvProduction
      ? 'assets/[name].[hash].js'
      : isEnvDevelopment && 'assets/[name].js',
    publicPath: '/',
  },
  resolve: { extensions: ['.js'] },
  optimization: {
    minimize: isEnvProduction,
    minimizer: isEnvProduction ? [new TerserPlugin()] : [],
    splitChunks: {
      chunks: 'async',
      name: true,
      cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          reuseExistingChunk: true,
          priority: 1,
          filename: isEnvProduction
            ? 'assets/vendor.[hash].js'
            : isEnvDevelopment && 'assets/vendor.js',
          enforce: true,
          test(module, chunks) {
            const name = module.nameForCondition && module.nameForCondition();
            return chunks.some((chunks) => {
              return (
                chunks.name !== 'vendor' && /[\\/]node_modules[\\/]/.test(name)
              );
            });
          },
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: {
          loader: 'eslint-loader',
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|gif|jpg|svg)$/,
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
  devServer: { historyApiFallback: true },
  plugins: [
    isEnvProduction ? new CleanWebpackPlugin() : () => {},
    isEnvProduction ? new ManifestPlugin() : () => {},
    isEnvProduction
      ? new CompressionPlugin({ test: /\.js/, filename: '[path].gz' })
      : () => {},
  ],
};
