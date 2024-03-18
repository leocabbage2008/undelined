import path from "path"
import webpack from "webpack"
import dotenv from "dotenv"
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const d = dotenv.config({
  path: path.join(__dirname, '/.env')
});

export default {
  entry: "./js/index.js",
  output: {
    path: path.resolve(__dirname, "home"),
    filename: "bundle.js",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": d.parsed
    }),
  ], devServer: {
    static: {
      directory: path.join(__dirname, 'home'),
    },
    compress: true,
    port: 6969,
  },
};