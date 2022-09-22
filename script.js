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
// const searchBar = document.querySelector(".search-bar");
// const searchSection = document.querySelector(".search-section");

// searchBar.addEventListener("click", e => {
//     console.log(e.target.parentNode);

//     if(e.target.className === "search-section") {
//         e.target.nextElementSibling.classList.toggle("hide");
//     }
// });

const searchSections = document.querySelectorAll(".search-section");
const dropdowns = document.querySelectorAll(".search-dropdown");
const searchBar = document.querySelector(".search-bar");

searchSections.forEach ( elem => {
    elem.addEventListener("click", e => {
        if (elem.nextElementSibling.classList.contains("search-dropdown")) {
            hideDropdowns(); // Apply the .hide class before toggling the section's dropdown
            elem.nextElementSibling.classList.toggle("hide");
        }
    });
});

const hideDropdowns = () => {
    dropdowns.forEach( elem => {
        elem.classList.add("hide");
    });
}

// // Buggy, selecting from dropdown closes dropdown
// window.addEventListener("click", e => {
//     if(!e.target.classList.contains("search-section") && !e.target.classList.contains("search-dropdown")) {
//         hideDropdowns();
//     }
// });

document.addEventListener("click", e => {
    dropdowns.forEach( elem => {
        if(!elem.contains(e.target) && !searchBar.contains(e.target)) {
            hideDropdowns();
        }
    });
});

// Search Section

const originText = document.querySelector("#origin-search");
const originValidate = document.querySelector("#origin-validate");
const originMoves = document.querySelector("#origin-moves");
const originTypeText = document.querySelector("#origin-type-subtitle");
const originPort = document.querySelector("#origin-port");
const originPortText = document.querySelector("#origin-port-subtitle");

let spanDivider = document.createElement("span");
spanDivider.innerHTML = " | ";

// Update subtitles
originMoves.addEventListener("change", () => {
    originTypeText.innerHTML = originMoves.options[originMoves.selectedIndex].text;
    originMoves.append(spanDivider);
});

originPort.addEventListener("change", () => {
    originPortText.innerHTML = originPort.options[originPort.selectedIndex].text;
});

// Validation with Icon

let checkmark = document.createElement("i");
checkmark.classList.add("bi");
checkmark.classList.add("bi-check");
checkmark.classList.add("text-success");

const originDropdown = document.querySelector("#origin-dropdown");

originDropdown.addEventListener("change", () => {
    if (originMoves.value !== "" && originPort.value !==""){
        originValidate.append(checkmark);
    }
});
