const sizer = document.querySelector("#sizer");
const grid = document.querySelector("#theGrid");
const slider = document.querySelector("#sizing")
const whipe = document.querySelector("#whipe");

let defaultSize = slider.value;

load(defaultSize);


slider.addEventListener("mouseup",
        () => {let newSize = Number(slider.value);
        if (newSize){
        const lines = document.querySelectorAll(".row");
                lines.forEach(
                    (rw) => rw.remove()
                );
                load(newSize);
                defaultSize = newSize;
             }
            }
    )


sizer.addEventListener("click",
        () => {let newSize = Number(prompt("Size of the square"));
        if (newSize){
        const lines = document.querySelectorAll(".row");
                lines.forEach(
                    (rw) => rw.remove()
                );
                load(newSize);
                defaultSize = newSize;
                slider.value = newSize;
             }
            }
    )

whipe.addEventListener("click",
    () => {
    const lines = document.querySelectorAll(".row");
            lines.forEach(
                (rw) => rw.remove()
            );
            load(defaultSize);
            slider.value = defaultSize;
         }
         
);

function load(s){
    const padd = 800/(2*s) + "px";
    for (let _=0; _<s; _++){
        const row = document.createElement('div');
        row.setAttribute("class", "row");
        for(let i = 0; i<s; i++){
            const cell = document.createElement("div");
            cell.setAttribute("class", "cell");
            cell.style.padding = padd;
            cell.addEventListener("mousemove", (c) => {
                const randomColor = Math.floor(Math.random()*16777215).toString(16);
                c.target.style.backgroundColor = "#"+randomColor; 
            }   
            );
            row.appendChild(cell);
        };
        grid.appendChild(row);
    };
}