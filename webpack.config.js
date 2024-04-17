import path from 'path';
import webpack from 'webpack';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const d = dotenv.config({
  path: path.join(__dirname, '.env'),
});

const entry = {
  'bundle.js': [
    path.resolve(__dirname, 'js/info.js'),
    path.resolve(__dirname, 'js/mouse.js'),
    path.resolve(__dirname, 'js/pagination.js'),
    path.resolve(__dirname, 'js/index.js'),
  ],
  'env.js': path.resolve(__dirname, 'js/env.js'),
  'replacer.js': path.resolve(__dirname, 'js/replacer.js'),
};
for (let i of Object.keys(entry)) {
  delete Object.assign(entry, { ['js/' + i]: entry[i] })[i];
}
export default {
  entry: entry,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]',
    assetModuleFilename: 'assets/[name][ext]',
  },
  module: {
    rules: [
      // CSS loader
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': d.parsed,
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '!**/*.*', "!home"],
    }),
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
};
