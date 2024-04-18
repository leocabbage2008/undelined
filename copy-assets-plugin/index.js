import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default class CopyAssetsWebpackPlugin {
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
        (err) => {
          if (err) {
            console.log("PLEASE CONTACT CUSTOMER SERVICE IMMEDIATELY FOR ASSISTANCE")
            throw err;
          }
        }
      );
      console.log('YOUR CLOUDS ARE FINISHED FLOATING');
    });
  }
}
