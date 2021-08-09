// When submit button is clicked by the user, call makeGrid()
const button = document.getElementById("button");
button.addEventListener("click",function(){
    makeGrid()});

function makeGrid() 
{   
    console.log("makeGrid")
    // Select size input
    const height = document.getElementById("inputHeight").value;
    const width = document.getElementById("inputWidth").value;
    // Select table
    const table = document.getElementById("pixelCanvas");
    // Remove previous grid 
    while(table.firstChild){
        table.removeChild(table.firstChild)
    }
    // Create rows and append to table
    for (let i = 1; i <= height; i++) {
        const tr = document.createElement('tr');
        table.appendChild(tr);
        // Create Columns and append to rows
        for (let i = 1; i <= width; i++) {
            const td = document.createElement('td');
            tr.appendChild(td);
            // Add Click Event
            td.addEventListener('click', function(){
                console.log('A block was clicked.');
                changeColor(td);
            });
        } 
    }
}

function changeColor(element){
    // Select color input
    const color = document.getElementById("colorPicker").value;
    console.log("Change color");
    element.style.backgroundColor = color;
}
