//Functions:

function createGrid(chosenSize) 
{
    for (let i = 0; i < chosenSize * chosenSize; i++) 
    {
        const newDiv = document.createElement("div");
        newDiv.addEventListener("mouseover", (e) => e.target.style.backgroundColor = getRGB());
        document.getElementById("gridBox").appendChild(newDiv);
    }
}

function setGridSize(size = 16)
{
    resetGrid();
    createGrid(size);
    gridBox.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}
setGridSize();

function resetGrid() 
{
    const element = document.getElementById("gridBox");
    while (element.firstChild) 
    {
        element.removeChild(element.firstChild);
    }
}

function getRGB() 
{
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    return `rgb(${randomR},${randomG},${randomB})`;
}

let gridBoxId = document.getElementById("gridBox");


//Buttons functioning:

const clearGrid = document.querySelector("#clearButton");
clearGrid.textContent = "Clear Grid";

function toClearGrid()
{
    let gridSquares = gridBoxId.querySelectorAll("div");
    gridSquares.forEach(item => item.style.backgroundColor = "rgb(41, 41, 41)");
}
clearGrid.addEventListener("click", () => toClearGrid());

const createNewGrid = document.querySelector("#gridButton");
createNewGrid.textContent = "Start New Grid";

createNewGrid.addEventListener("click", () => 
{
    let newSize = parseInt(prompt("Set a new grid size (from 1 to 100)"));
    if (isNaN(newSize)) {
        alert("Please type a number!");
    }
    else if (newSize > 0 && newSize <= 100) {
        setGridSize(newSize);
    }
    else { alert("Please type a number from 1 to 100") }
});
