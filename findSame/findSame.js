const resetButton = document.getElementById("resetButton");
const findSameText = document.getElementById("findSameText");

document.addEventListener("DOMContentLoaded", () => {
    const containerForCells = document.getElementById("containerForCells");

    containerForCells.addEventListener("click", (event) => {
        if (event.target.classList.contains("gridCell")) {
            const clickedNumber = event.target.textContent;
            let counter = 0;
            const allCells = document.querySelectorAll(".gridCell");
            

            for (let i = 0; i < allCells.length; i++) {
                allCells[i].style.backgroundColor = "";
            }

            for (let i = 0; i < allCells.length; i++) {
                if (allCells[i].textContent === clickedNumber) {
                    counter += 1;
                    findSameText.textContent = `${counter} copies of the number ${clickedNumber}`;
                    allCells[i].style.backgroundColor = "green";

                }
            }
        }
    })
})

resetButton.addEventListener("click", () => {
    const resetAllCells = document.querySelectorAll(".gridCell");

    for (let i = 0; i < resetAllCells.length; i++) {
        resetAllCells[i].style.backgroundColor = "";
        findSameText.textContent = "Click on a number to find copies of it";
    }
})