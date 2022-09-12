// JS generated dropdowns
// https://medium.com/@kyleducharme/developing-custom-dropdowns-with-vanilla-js-css-in-under-5-minutes-e94a953cee75

const dropdownIcon = () => {
    const dropdownArrow = document.createElement("span");
    dropdownArrow.innerHTML = `<svg width="14px" height="7px" viewBox="0 0 10 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Delivery" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Transactions-(Landing)" transform="translate(-1360.000000, -29.000000)" fill="#CDCFD3" fill-rule="nonzero">
            <g id="Group-4" transform="translate(1360.000000, 29.000000)">
                <polygon id="Shape" points="0 0 5 5 10 0"></polygon>
            </g>
        </g>
        </g>
    </svg>`;

    return dropdownArrow;
}

// Idea & structure from https://codepen.io/jasesnider/pen/QKLQgP?editors=0011

const JSON = {
    data: [
        {id: 1, title: "move type", options: [
            {abbrev: "SD", full: "Store Door"},
            {abbrev: "CY", full: "Container Yard"}
        ]},
        {id: 2, title: "country", options: [
            {abbrev: "US", full: "United States"},
            {abbrev: "GT", full: "Guatemala"}
        ]}
    ]
};

const moves = [{
        id: 1,
        abbrev: "SD",
        full: "Store Door"
    },
    {
        id: 2,
        abbrev: "CY",
        full: "Container Yard"
    }
];

const countries =[{
        id: 1,
        abbrev: "US",
        full: "United States"
    },
    {
        id: 2,
        abbrev: "GT",
        full: "Guatemala"
    }
];

// DOM references
const moveType = document.querySelector("#move-type");
const country = document.querySelector("#country");

// Create structure
const dropdown = (printArea, selections) => {
    const component = document.createElement("div");

    const input = createInput();
    const dropdown = showDropdown(selections);

    component.appendChild(input);
    component.appendChild(dropdown);
    printArea.appendChild(component);
};

// Create fake input box
const createInput = () => {

    // Input outline
    const input = document.createElement("div");
    input.classList = "input";
    input.addEventListener("click", toggleDropdown);

    // Input placeholder text
    const inputPlaceholder = document.createElement("div");
    inputPlaceholder.classList = "input__placeholder";

    const placeholder = document.createElement("p");
    placeholder.textContent = "Select move type";
    placeholder.classList.add('palceholder');

    // Appends placeholder and chevron
    inputPlaceholder.appendChild(placeholder);
    inputPlaceholder.appendChild(dropdownIcon());
    input.appendChild(inputPlaceholder);

    return input;
};

// Create dropdown with options
const showDropdown = (selections) => {
    const structure = document.createElement("div");
    structure.classList.add("structure", "hide");

    selections.forEach(selection => {
        const { id, abbrev, full } = selection;
        const option = document.createElement("div");
        option.addEventListener("click", () => selectOption(abbrev));
        option.setAttribute("id", id);

        const abbrevDisplay = document.createElement("h5");
        abbrevDisplay.textContent = abbrev;

        const typeDisplay = document.createElement("p");
        typeDisplay.textContent = `(${full})`;

        option.appendChild(abbrevDisplay);
        option.appendChild(typeDisplay);
        structure.appendChild(option);
    });

    return structure;
};

// 1st click event - Toggles dropdown
const toggleDropdown = () => {
    const dropdown = document.querySelectorAll(".structure");
    dropdown.forEach( e => {
        e.classList.toggle("hide");
    });

    const input = document.querySelectorAll(".input");
    input.forEach( e => {
        e.classList.toggle("input__active");
    });
};

// 2nd click event - Gathers and shows dropdown selection
const selectOption = (abbrev) => {
    const text = document.querySelector(".placeholder");
    text.textContent = abbrev;
    text.classList.add("input__selected");
    toggleDropdown();
};

dropdown(moveType, moves);
dropdown(country, countries);