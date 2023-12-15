const container = document.querySelector(".container");

const button = document.createElement("button")
container.setAttribute("style", "text-align:center");
button.textContent = "CLICK!";
container.appendChild(button);

button.addEventListener("click", () => {
    gridSize = prompt("How big do you want the square to be kind sir?")
    while (container.children[1]) {
        container.removeChild(container.children[1]);
    }
    for (let i = 1; i <= gridSize; i++) {
        const column = document.createElement("div");
        column.setAttribute("style", "display:flex; justify-content:space-evenly; align-item:center");
        column.classList.add("columnDiv");
        container.appendChild(column);
        for (let j = 1; j <= gridSize ; j++) {
            const div = document.createElement("div");
            div.classList.add("gridDiv")
            div.setAttribute("style", "height:6px ; width:6px");
            column.appendChild(div);
        }
    }

    const gridSquares = document.querySelectorAll(".gridDiv");
    gridSquares.forEach((grid) => {
    grid.addEventListener("mouseover", () => {
        grid.setAttribute("style", "background-color:black; height:6px ; width:6px");
    });
});
});


