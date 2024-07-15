import fs from 'fs';

const sync = (data) => {
  fs.writeFileSync('info.json', `${data}`);
};

const fetchRes = async (url) => {
  const r = await fetch(url);
  return await r.json();
};

const fetchData = async () => {
  const [site, commit, run] = await Promise.all([
    fetchRes(
      'https://weirdscifi.ratiosemper.com/neocities.php?sitename=undelined'
    ),
    fetchRes(
      'https://api.github.com/repos/leocabbage2008/undelined/commits/master'
    ),
    fetchRes(
      'https://api.github.com/repos/leocabbage2008/undelined/actions/runs?per_page=1'
    ),
  ]);
  const result = {
    info: site.info,
    commit: {
      message: commit['commit']['message'],
      stats: commit['stats'],
      filesChanged: commit['files'].length,
      time: commit['commit']['author']['date'],
    },
    run: {
      start: run['workflow_runs'][0]["run_started_at"],
      length: (new Date(run['workflow_runs'][0]['updated_at']) - new Date(run['workflow_runs'][0]["run_started_at"])) / 1000,
      status: run['workflow_runs'][0]['status'],
      event: run['workflow_runs'][0]['event'],
      run_number: run['workflow_runs'][0]['run_number'],
    },
  };
  result['info']['timeAccessed'] = new Date();
  sync(JSON.stringify(result));
};
fetchData();
// fs.cp("/Users/coder/Downloads/scyzku", "./music", { recursive: true }, () => { console.log("sd card successfully copied"); })
