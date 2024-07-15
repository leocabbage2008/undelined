import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const assetPath = path.join(__dirname, '..', 'assets');

const resize = (file) => {
  sharp(path.join(assetPath, 'images', file)).resize(200).toFile(path.join("dist/assets/thumb", file.split('.')[0] + '200x__.jpg'));
}
const error = (err) => {
  if (err) {
    console.log("PLEASE CONTACT CUSTOMER SERVICE IMMEDIATELY FOR ASSISTANCE")
    throw err;
  }
}

export default class AssetsWebpackPlugin {
  constructor(options) {
    this.options = options;
  }
  apply(compiler) {
    console.log('...YOUR CLOUDS ARE FLOATING...');
    compiler.hooks.done.tap('CopyAssetsWebpackPlugin', (stats) => {
      fs.cp(
        path.join(__dirname, '..', 'assets'),
        'dist/assets/',
        { recursive: true },
        error
      );
      fs.mkdir("dist/assets/thumb", error);
      fs.readdir(path.join(assetPath, "images"), (err, files) => {
        error(err)
        for (const i of files) {
          if (i == '.DS_Store' || i.indexOf('.') == -1) {
            continue
          } else {
            resize(i)
          }
        }
      })
      console.log('YOUR CLOUDS ARE FINISHED FLOATING');
    });
  }
}
