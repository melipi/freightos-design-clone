const originSearch = document.querySelector("#origin-search");
const originDropdown = document.querySelector("#origin-dropdown");

originSearch.addEventListener("click", () => {
    originDropdown.classList.toggle("hide");
});

window.addEventListener("click", (e) => {
    if (!originSearch.contains(e.target)) {
        originDropdown.classList.add("hide");
    }
});

// Choices.js dropdown menus

