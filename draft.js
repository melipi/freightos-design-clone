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