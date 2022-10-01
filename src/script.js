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

// Search Section **             searchSections[0]
// -> Search Heading ***         searchSections[0].children[0]
// --> originValidate ***        searchSections[0].children[0].children[1]
// -> Search Subtitle            searchSections[0].children[1]
// --> origin-type-subtitle ***  searchSections[0].children[1].children[0]
// --> origin-port-subtitle ***  searchSections[0].children[1].children[2]

// Search Dropdown **            dropdowns[0]
// -> options-wrapper            dropdowns[0].children[1]
// --> dropdown-origin-type      dropdowns[0].children[1].children[0]
// ---> dropdown-label           dropdowns[0].children[1].children[0].children[0]
// ----> originMoves ***         dropdowns[0].children[1].children[0].children[1].children[0]
// -> dropdown-origin-port       dropdowns[0].children[1].children[1]
// --> div select                dropdowns[0].children[1].children[1].children[1]
// ---> originPort ***           dropdowns[0].children[1].children[1].children[1].children[0]

// ORIGIN - Search Section
// const originValidate = document.querySelector("#origin-validate");
// const originMoves = document.querySelector("#origin-moves");
// const originTypeText = document.querySelector("#origin-type-subtitle");
// const originPort = document.querySelector("#origin-port");
// const originPortText = document.querySelector("#origin-port-subtitle");
// const originDropdown = document.querySelector("#origin-dropdown");
// const originHeading = document.querySelector(".search-heading");

// Update subtitles
// originMoves.addEventListener("change", () => {
//     originTypeText.innerHTML = originMoves.options[originMoves.selectedIndex].text;
//     originMoves.append(spanDivider);
// });

// originPort.addEventListener("change", () => {
//     originPortText.innerHTML = originPort.options[originPort.selectedIndex].text;
// });

// originDropdown.addEventListener("change", () => {
//     if (originMoves.value !== "" && originPort.value !==""){
//         // Remove exclamation if it exists before adding checkmark
//         if(originValidate.contains(exclamation)) {
//             originValidate.removeChild(exclamation);
//             originHeading.firstElementChild.classList.remove("text-danger");
//         }
//         originValidate.append(checkmark);
//     } else {
//         // Remove checkmark if an option is deselected by user
//         if(originValidate.contains(checkmark)) {
//             originValidate.removeChild(checkmark);
//         }
//         originValidate.append(exclamation);
//         originHeading.firstElementChild.classList.add("text-danger");
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
        elem.classList.add("active");
    });
});

// Closes dropdown on an outside click (if it's not the searchbar or dropdown)
document.addEventListener("click", e => {
    // dropdowns.forEach( elem => {
    //     if(!elem.contains(e.target) && !searchBar.contains(e.target)) {
    //         hideDropdowns();
    //     }
    // });

    // Alternative with closest
    if (!e.target.closest(".search-section") && !e.target.closest(".search-dropdown")) {
        hideDropdowns();
    }
});

const hideDropdowns = () => {
    dropdowns.forEach( elem => {
        elem.classList.add("hide");
        elem.previousElementSibling.classList.remove("active"); // Needed if search section is the first one
        elem.nextElementSibling.classList.remove("active");
    });
}

// Update Subtitles
dropdowns.forEach ( dropElem => {
    let firstSelect = dropElem.children[1].children[0].children[1].children[0];
    firstSelect.addEventListener("change", () => {                   
        let firstSub = firstSelect.parentElement.parentElement.parentElement.parentElement.previousElementSibling.children[1].children[0];
        
        firstSub.innerHTML = firstSelect.options[firstSelect.selectedIndex].text + " | ";
    });

    let secondSelect = dropElem.children[1].children[1].children[1].children[0];
    secondSelect.addEventListener("change", () => {
        let secondSub = secondSelect.parentElement.parentElement.parentElement.parentElement.previousElementSibling.children[1].children[1];                
        
        secondSub.innerHTML = secondSelect.options[secondSelect.selectedIndex].text;
    });

    // Update status of user input with a checkmark or exclamation mark
    dropElem.addEventListener ("change", () => {
        let statusText = dropElem.previousElementSibling.children[0].firstElementChild;
        let checkmark = dropElem.previousElementSibling.children[0].children[1].children[0];
        let exclamation = dropElem.previousElementSibling.children[0].children[1].children[1];

        if (firstSelect.value !== "" && secondSelect.value !== "") {
            // Remove exclamation mark if it exists
            exclamation.classList.add("hide");
            checkmark.classList.remove("hide");
            statusText.classList.remove("text-danger");
        } else {
            // Remove checkmark if an option is deselected by user
            checkmark.classList.add("hide");
            exclamation.classList.remove("hide");
            statusText.classList.add("text-danger");
        };

        const search = document.querySelector(".search-button");
        const selects = document.querySelectorAll(".form-select");

        // Counter for select elements with user input
        let counter = 0;
        selects.forEach( s => {
            
            if (s.value !==""){
                counter++;
            }
        });

        // Toggle active search button
        if (counter === 8) {
            console.log("all active")
            search.classList.add("active-submit");
            search.removeAttribute("disabled");
        } else {
            search.classList.remove("active-submit");
            search.setAttribute("disabled", "");
        }
    });
});