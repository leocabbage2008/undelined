function syntaxHighlight(json) {
  // json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
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

const info = async () => {
  console.log(process.env.DATA);
  return process.env.DATA
}

info().then((response) => {
  document.getElementById('info').innerHTML = syntaxHighlight(
    JSON.stringify(response.info, undefined, 4)
  );
});