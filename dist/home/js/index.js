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
    'https://neocities.org/api/info?sitename=undelined'
  );
  return response.json()
}
info().then((response) => {
  console.log(response);
  document.getElementById('info').innerHTML = syntaxHighlight(
    JSON.stringify(response.info, undefined, 4)
  );
});