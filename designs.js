// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    
    
// Your code goes here!
}

function changeColor(){
    
}


var color = document.getElementById("colorPicker").value

function create(){
    var table = document.getElementById("pixelCanvas")
    while(table.firstChild){
        table.removeChild(table.firstChild)
    }
    const height = document.getElementById("inputHeight").value;
    const width = document.getElementById("inputWidth").value;
    for(var i=0;i<height;i++){
        var tr = document.createElement("tr")
        table.appendChild(tr)
        for(var k=0;k<width;k++){
            var td = document.createElement("td")
            tr.appendChild(td)
        }
    }
}

const button = document.getElementById("button");
button.addEventListener("click",function(){
    create()
})