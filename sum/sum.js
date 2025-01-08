const inputSumOfAll = document.getElementById("inputSumOfAll");
const inputSumOfMarked = document.getElementById("inputSumOfMarked");
const sumResetButton = document.getElementById("sumResetButton");

function calculateSumOfAll () {
    const allCells = document.querySelectorAll(".gridCell");
    let totalSum = 0;

    for (let i = 0; i < allCells.length; i++) {
        const textContentToNumber = Number(allCells[i].textContent);
        totalSum += textContentToNumber;
    }
    inputSumOfAll.value = totalSum;
};

button.addEventListener("click", () => {
    calculateSumOfAll();
});


containerForCells.addEventListener("click", (event) => {
    const allCells = document.querySelectorAll(".gridCell"); 
    let totalSum = 0;
    if (!event.target.classList.contains("highlightGreen")) {
        event.target.classList.add("highlightGreen");

    } else if (event.target.classList.contains("highlightGreen")) {
        event.target.classList.remove("highlightGreen");
    }

    for (let i = 0; i < allCells.length; i++) {
        if (allCells[i].classList.contains("highlightGreen")) {
            const textContentToNumber = Number(allCells[i].textContent);
            totalSum += textContentToNumber;
            inputSumOfMarked.value = totalSum;
        }
    }
});

sumResetButton.addEventListener("click", () => {
    const allCells = document.querySelectorAll(".gridCell"); 

    for (let i = 0; i < allCells.length; i++) {
        if (allCells[i].classList.contains("highlightGreen")) {
            allCells[i].classList.remove("highlightGreen");
        }
    }
    inputSumOfMarked.value = "-";
});


