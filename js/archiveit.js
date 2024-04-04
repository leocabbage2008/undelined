import { log } from 'console';
import fs from 'fs';

const sync = (data) => {
  fs.writeFileSync('.env', `DATA=${data}\n`);
};
const info = async () => {
  const response = await fetch(
    'https://weirdscifi.ratiosemper.com/neocities.php?sitename=undelined'
  );
  return response.json();
};
try {
  await info().then((result) => {
    result['info']['timeAccessed'] = new Date();
    sync(JSON.stringify(result));
  });
} catch {
  console.log("no connection");
}