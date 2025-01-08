const newRandomNumber = document.getElementById("newRandomNumber");
const randomNumberInput = document.getElementById("selectedRandomNumber");
const removeButton = document.getElementById("removeButton");
const removalDescription = document.getElementById("descriptionOfRemoval");

newRandomNumber.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * 99) + 1;
  randomNumberInput.setAttribute("value", randomNumber);
  const allCells = document.querySelectorAll(".gridCell");

  for (let i = 0; i < allCells.length; i++) {
    if (allCells[i].style.backgroundColor === "orange") {
        allCells[i].style.backgroundColor = "";
    }
  }

  for (let i = 0; i < allCells.length; i++) {
    if (allCells[i].textContent == randomNumber) {
      allCells[i].style.backgroundColor = "orange";
    }
  }
});


removeButton.addEventListener("click", () => {
    let counter = 0;
    const allCells = document.querySelectorAll(".gridCell")
    for (let i = 0; i < allCells.length; i++) {
        if (allCells[i].style.backgroundColor === "orange") {
            counter += 1;
            const saveNumber = allCells[i].textContent;
            allCells[i].textContent = "X";
            allCells[i].style.backgroundColor = "red";
            removalDescription.value = `${saveNumber} was removed ${counter} times`;
        }
    }

})
