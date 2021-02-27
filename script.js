//Functions:

function createGrid(chosenSize) 
{
    for (let i = 0; i < chosenSize * chosenSize; i++) 
    {
        const newDiv = document.createElement("div");
        newDiv.setAttribute("id","newDiv");
        document.getElementById("gridBox").appendChild(newDiv);
    }
}
function setGridSize(size)
{
    resetGrid();
    createGrid(size);
    gridBox.style.gridTemplateColumns = `repeat(${size}, 1fr)`
}
function resetGrid() {
    const element = document.getElementById("gridBox");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}
setGridSize(16);
//Button functioning:

const createNewGrid = document.querySelector("#gridButton");
createNewGrid.textContent = "Start New Grid";

createNewGrid.addEventListener("click", function() {
    let newSize = parseInt(prompt("Set a new grid size (from 1 to 64)"));
    if (isNaN(newSize)) {
        alert("Please type a number!");
    }
    else if (newSize > 0 && newSize <= 64) {
        setGridSize(newSize);
    }
    else { alert("Please type a number from 1 to 64") }
});

