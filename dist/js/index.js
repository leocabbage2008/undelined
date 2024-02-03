function syntaxHighlight(json) {
  // json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    function (match) {
      let cls = 'darkorange';
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = 'red';
        } else {
          cls = 'green';
        }
      } else if (/null/.test(match)) {
        cls = 'magenta';
      }
      cls = 'lime';
      return '<span style="color:' + cls + '">' + match + '</span>';
    }
  );
}
const info = async () => {
  const response = await fetch(
    'https://weirdscifi.ratiosemper.com/neocities.php?sitename=undelined', { cache: "force-cache" }
  );
  return response.json()
}
info().then((response) => {
  { cache: "force-cache" }
  document.getElementById('info').innerHTML = syntaxHighlight(
    JSON.stringify(response.info, undefined, 4)
  );
});