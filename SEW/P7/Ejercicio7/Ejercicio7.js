function uploadFile() {
  document.getElementById('uploadB').style.cursor = 'wait';
  var ACCESS_TOKEN = document.getElementById('access-token').value;
  var dbx = new Dropbox({
    accessToken: ACCESS_TOKEN,
  });
  var fileInput = document.getElementById('file-upload');
  var file = fileInput.files[0];
  dbx.filesUpload({
      path: '/' + file.name,
      contents: file,
    })
    .then(function (response) {
      var results = document.getElementById('results');
      results.appendChild(document.createTextNode('File uploaded!'));
      document.getElementById('uploadB').style.cursor = 'pointer';
      console.log(response);
    })
    .catch(function (error) {
      console.error(error);
    });

  return false;
}
