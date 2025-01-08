const addUpToInput = document.getElementById("addUpToInput");
const addUpToButton = document.getElementById("addUpToButton");



addUpToButton.addEventListener("click", () => {
    const currentTotalSum = Number(addUpToInput.value);
    const allCells = document.querySelectorAll(".gridCell");
    
    for (let k = 0; k < allCells.length; k++) {
        if (allCells[k].style.backgroundColor === "green") {
            allCells[k].style.backgroundColor = "";
        }
    }

    for (let i = 0; i < allCells.length; i++) {
        for (let j = 0; j < allCells.length; j++) {
            const firstValue = Number(allCells[i].textContent);
            const secondValue = Number(allCells[j].textContent);

            if (firstValue + secondValue === currentTotalSum) {
                allCells[j].style.backgroundColor = "green";
                allCells[i].style.backgroundColor = "green";
                return;
            }
        }
    }
});