// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()



const button = document.getElementById("button");
button.addEventListener("click",function(){
    makeTable()});

function makeTable() 
{   
    console.log("makeTable")
    const height = document.getElementById("inputHeight").value;
    const width = document.getElementById("inputWidth").value;
    const table = document.getElementById("pixelCanvas");

    while(table.firstChild){
        table.removeChild(table.firstChild)
    }
    for (let i = 1; i <= height; i++) {
        const tr = document.createElement('tr');
        table.appendChild(tr);
        for (let i = 1; i <= width; i++) {
            const td = document.createElement('td');
            tr.appendChild(td);
            td.addEventListener('click', function(){
                console.log('A block was clicked.');
                changeColor(td);
            });
        } 
    }
}

function changeColor(element){
    const color = document.getElementById("colorPicker").value;
    console.log("Change color");
    element.style.backgroundColor = color;
}
