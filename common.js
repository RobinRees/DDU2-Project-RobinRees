function createGridControlforSite () {
    let targetElement = document.getElementById("gridCreateBox");
    let createParagraph = document.createElement("p");
    let createInput = document.createElement("input");
    let createButton = document.createElement("button");
    createParagraph.textContent = `How many numbers in the grid?`;
    createInput.setAttribute('type', 'text')
    createInput.setAttribute('size', '3')
    createInput.setAttribute('maxlength', '3')
    createButton.textContent = `Create`;
    targetElement.appendChild(createParagraph);
    targetElement.appendChild(createInput);
    targetElement.appendChild(createButton);
}

createGridControlforSite();