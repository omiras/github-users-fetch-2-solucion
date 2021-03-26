//Step 1 - create an array of photos
fetch(`https://picsum.photos/v2/list`).then((response) => {

  return response.json();

}).then((responseJson) => {

  for (let i = 0; i < responseJson.length; i++) {
    console.log(responseJson[i]);
    injectInfo(responseJson[i]);
  } 

});

//Step 2 - add photos from picsum api via javascript
function injectInfo(responseJson) {

  var table = document.getElementById('myTable');

  for(var r = 1; r < 3; r++){
    var row = table.insertRow(r);
  }
  
  for (var c = 0; c < 2; c++) {
    var cell = row.insertCell(c);
    cell.id = `cellid_${responseJson.id}_${c}`;
  }

  document.querySelector(`#cellid_${responseJson.id}_0`).innerHTML = responseJson.id;

  var avatar = document.createElement('img');
  var src = document.querySelector(`#cellid_${responseJson.id}_1`);
  avatar.src = responseJson.download_url;
  src.appendChild(avatar);

}
