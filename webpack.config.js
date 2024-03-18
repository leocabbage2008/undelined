import path from 'path';
import webpack from 'webpack';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const d = dotenv.config({
  path: path.join(__dirname, '/.env'),
});

export default {
  entry: path.resolve(__dirname, '/js/index.js'),
  output: {
    path: path.join(__dirname, 'dist', 'home'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      //CSS loader
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }, {
        test: /\.(jpg|png|svg|gif)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': d.parsed,
    }),
  ]
};
