function createGridControlforSite () {
    let targetElement = document.getElementById("gridCreateBox");
    let createParagraph = document.createElement("p");
    let createInput = document.createElement("input");
    let createButton = document.createElement("button");
    createParagraph.textContent = `How many numbers in the grid?`;
    createInput.setAttribute('type', 'text')
    createInput.setAttribute('size', '3')
    createInput.setAttribute('maxlength', '3')
    createInput.setAttribute('id', 'inputNumber')
    createButton.id = "clickToCreateCells"
    createButton.textContent = `Create`;
    targetElement.appendChild(createParagraph);
    targetElement.appendChild(createInput);
    targetElement.appendChild(createButton);
}

createGridControlforSite();

const button = document.getElementById("clickToCreateCells");
const input = document.getElementById("inputNumber");
const containerForCells = document.getElementById("containerForCells");

button.addEventListener('click', () => {
    containerForCells.innerHTML = ``;
    const numberOfCells = parseInt(input.value, 10);

    if (!isNaN(numberOfCells) && numberOfCells > 0) {
        for (let i = 0; i < numberOfCells; i++) {
            const createCell = document.createElement("div");
            const randomNumber = Math.floor(Math.random() * 99) + 1;
            createCell.className = "gridCell";
            createCell.textContent = randomNumber;
            containerForCells.appendChild(createCell);
        }
    } else {
        containerForCells.textContent = `Ange ett giltigt nummer`
    }

});