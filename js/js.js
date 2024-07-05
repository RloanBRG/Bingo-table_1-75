document.addEventListener("DOMContentLoaded", function(){

const table = document.getElementById("bingo");

const resetButon = document.getElementById("reset");

table.addEventListener("click",(event) => { 

    if (event.target.tagName === "TD") { 
    event.target.classList.toggle("clicked");
}
});
    resetButon.addEventListener("click", () => {
        const cells = table.querySelectorAll("td.clicked");
            cells.forEach((cell) => {
                cell.classList.remove("clicked");
            })
    })
   
});
