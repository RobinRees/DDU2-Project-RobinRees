const newRandomNumberButton = document.getElementById("newRandomNumber");
const randomNumberInput = document.getElementById("selectedRandomNumber")
const removeButton = document.getElementById("removeButton");
const descriptionInput = document.getElementById("descriptionOfRemoval");

newRandomNumberButton.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * 99) + 1;
    randomNumberInput.value = randomNumber;
    const allCells = document.querySelectorAll(".gridCell"); 
    
    for (let j = 0; j < allCells.length; j++) {
        if (allCells[j].textContent != randomNumberInput.value) {
            allCells[j].classList.remove("orange");
        }
    }

    for (let i = 0; i < allCells.length; i++) {
        if (allCells[i].textContent == randomNumberInput.value) {
            allCells[i].classList.add("orange");
        }
    }
});

removeButton.addEventListener("click", () => {
    const allCells = document.querySelectorAll(".gridCell");
    let counter = 0;
    let currentNumber = 0;

    for (let i = 0; i < allCells.length; i++) {
        if (allCells[i].classList.contains("orange")) {
            currentNumber = allCells[i].textContent;
            allCells[i].classList.add("red");
            allCells[i].classList.remove("orange");
            allCells[i].textContent = "X"
            counter++;
        }

    }
    descriptionInput.value = `${currentNumber} was removed ${counter} time/s`;
})