let size = 16;
const grid = document.querySelector("#theGrid");

for (let _=0; _<size; _++){
    const row = document.createElement('div');
    row.setAttribute("class", "row");

    for(let i = 0; i<size; i++){
        const cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        cell.addEventListener("mouseover", (c) => c.target.style.backgroundColor = "black");
        row.appendChild(cell);
    };
    grid.appendChild(row);
}

// const cells = document.querySelectorAll(".cell");

// cells.forEach(
//     c => c.addEventListener("click", e => e.target.style['background-color'] = black)
// )