import env from '../info.json'

function syntaxHighlight(json) {
  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    function (match) {
      let cls = '#BDE0FE;font-size:120%;';
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'pink';
        } else {
          cls = 'lightblue';
        }
      } else if (/null/.test(match)) {
        cls = '#56CFE1';
      }
      return '<span style="color:' + cls + '">' + match + '</span>';
    }
  );
}
document.getElementById('info').innerHTML = syntaxHighlight(
  JSON.stringify(env.info, undefined, 4)
);
// document.getElementById('run').innerHTML = JSON.stringify(env.run, undefined, 4)
// document.getElementById('commit').innerHTML = JSON.stringify(env.commit, undefined, 4)