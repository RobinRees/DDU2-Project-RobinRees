const clearButton = document.getElementById("clearButton");

containerForCells.addEventListener("click", (event) => {
    const randomNumber = Math.floor(Math.random() * 99) + 1;

    if (event.target.classList.contains("classForClear")) {
        event.target.classList.remove("classForClear");
        event.target.classList.add("secondClassForClear");
        event.target.textContent = "";
    }

    else if (event.target.classList.contains("secondClassForClear")) {
        event.target.classList.remove("secondClassForClear");
        event.target.classList.add("classForClear");
        event.target.textContent = randomNumber;
    }
});

clearButton.addEventListener("click", () => {
    const allCells = document.querySelectorAll(".gridCell");

    for (let i = 0; i < allCells.length; i++) {
        if (allCells[i].classList.contains("secondClassForClear")) {
            const randomNumber = Math.floor(Math.random() * 99) + 1;
            allCells[i].classList.remove("secondClassForClear");
            allCells[i].classList.add("classForClear");
            allCells[i].textContent = randomNumber;
        }
    }
})