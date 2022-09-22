
// *******************************************
// ** Iterations of code that were scrapped **
// *******************************************

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

// // Buggy, selecting from dropdown closes dropdown
// window.addEventListener("click", e => {
//     if(!e.target.classList.contains("search-section") && !e.target.classList.contains("search-dropdown")) {
//         hideDropdowns();
//     }
// });

// ******************************************
// ** FINAL JS FOR FREIGHTOS DESIGN CLONE **
// ******************************************

const searchSections = document.querySelectorAll(".search-section");
const dropdowns = document.querySelectorAll(".search-dropdown");
const searchBar = document.querySelector(".search-bar");

// Toggle Dropdowns
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

// Closes dropdown on an outside click (if it's not the searchbar or dropdown)
document.addEventListener("click", e => {
    dropdowns.forEach( elem => {
        if(!elem.contains(e.target) && !searchBar.contains(e.target)) {
            hideDropdowns();
        }
    });
});


// Divider for Search Section
let spanDivider = document.createElement("span");
spanDivider.innerHTML = " | ";

// ORIGIN - Search Section
const originText = document.querySelector("#origin-search");
const originValidate = document.querySelector("#origin-validate");
const originMoves = document.querySelector("#origin-moves");
const originTypeText = document.querySelector("#origin-type-subtitle");
const originPort = document.querySelector("#origin-port");
const originPortText = document.querySelector("#origin-port-subtitle");

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

let exclamation = document.createElement("i");
exclamation.classList.add("bi");
exclamation.classList.add("bi-exclamation-circle");
exclamation.classList.add("text-danger");

const originDropdown = document.querySelector("#origin-dropdown");

originDropdown.addEventListener("change", () => {
    if (originMoves.value !== "" && originPort.value !==""){
        // Remove exclamation if it exists before adding checkmark
        if(originValidate.contains(exclamation)) {
            originValidate.removeChild(exclamation);
        }
        originValidate.append(checkmark);
    } else {
        // Remove checkmark if an option is deselected by user
        if(originValidate.contains(checkmark)) {
            originValidate.removeChild(checkmark);
        }
        originValidate.append(exclamation);
    }
});
