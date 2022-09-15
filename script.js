const originSearch = document.querySelector("#origin-search");
const originDropdown = document.querySelector("#origin-dropdown");

originSearch.addEventListener("click", () => {
    originDropdown.classList.toggle("hide");
});

window.onClick = e => {
    if(!e.target.matches("#origin-search")) {
        console.log("outside click");
        originDropdown.classList.toggle("hide");
    }
}

// Choices.js dropdown menus

