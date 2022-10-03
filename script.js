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