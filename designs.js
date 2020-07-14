
// Vriables Declarations.

const colorPicker = document.getElementById('colorPicker');
const rowsNumber = document.getElementById('inputHeight');
const cellsNumber = document.getElementById('inputWidth');
const pixelCanvas = document.getElementById('pixelCanvas');
const form = document.getElementById('sizePicker');

//when you click submit the function makeGrid() is called.
form.addEventListener('submit',function(e){
  pixelCanvas.innerHTML='';
  e.preventDefault();
  makeGrid();
})

// this function loops over rows and cells to vreate and delete grids.
function makeGrid(){
  for(let i=0; i<rowsNumber.value; i++){
    const row = pixelCanvas.insertRow(0);
    for(let j=0; j<cellsNumber.value; j++){
      row.insertCell(0);
    }
  }
}

function addEventforID(){
    var td = document.getElementsByTagName('td');
    for(var i = 0; i<td.length; i++){
      td[i].addEventListener("click",function(event){
        var curenttd = event.target;
        curenttd.style.backgroundColor=document.getElementById('colorPicker').value;
        
      })
    }                                       
  }
  document.addEventListener('DOMContentLoaded',function(){
    addEventforID();
  })
  