// // DOM
// const originSearch = document.querySelector("#origin-search");
// const originDropdown = document.querySelector("#origin-dropdown");

// // Dropdown toggler
// originSearch.addEventListener("click", () => {
//     originDropdown.classList.toggle("hide");
// });

// // Close dropdown if user clicks outside of button or dropdown
// window.addEventListener("click", (e) => {
//     if (!originSearch.contains(e.target) && !originDropdown.contains(e.target)) {
//         originDropdown.classList.add("hide");
//     }
// });

// Event Delegation Version
const searchBar = document.querySelector(".search-bar");
const searchSection = document.querySelector(".search-section");

searchBar.addEventListener("click", e => {
    if(e.target.className === "search-section") {
        e.preventDefault();
        e.target.nextElementSibling.classList.toggle("hide");
    }
});

// Choices.js dropdown menus

