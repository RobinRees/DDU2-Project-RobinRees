const resetButton = document.getElementById("resetButton");

document.addEventListener("DOMContentLoaded", () => {
    const containerForCells = document.getElementById("containerForCells");

    containerForCells.addEventListener("click", (event) => {
        if (event.target.classList.contains("gridCell")) {
            const clickedNumber = event.target.textContent;

            const allCells = document.querySelectorAll(".gridCell");

            for (let i = 0; i < allCells.length; i++) {
                allCells[i].style.backgroundColor = "";
            }

            for (let i = 0; i < allCells.length; i++) {
                if (allCells[i].textContent === clickedNumber) {
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
    }
})