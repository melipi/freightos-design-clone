// JS generated dropdowns
// https://medium.com/@kyleducharme/developing-custom-dropdowns-with-vanilla-js-css-in-under-5-minutes-e94a953cee75

const dropdownIcon = () => {
    const dropdown = document.createElement("span");
    dropdown.innerHTML = `<svg width="14px" height="7px" viewBox="0 0 10 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Delivery" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Transactions-(Landing)" transform="translate(-1360.000000, -29.000000)" fill="#CDCFD3" fill-rule="nonzero">
            <g id="Group-4" transform="translate(1360.000000, 29.000000)">
                <polygon id="Shape" points="0 0 5 5 10 0"></polygon>
            </g>
        </g>
        </g>
    </svg>`;

    return dropdown;
}

const selections = [{
        id: 1,
        abbrev: "SD",
        type: "Store Door"
    },
    {
        id: 2,
        abbrev: "CY",
        type: "Container Yard"
    }
];

// DOM references
const moveType = document.querySelector("#move-type");

// Create structure
const dropdown = (printArea) => {
    const component = document.createElement("div");

    const input = createInput();
    const dropdown = showDropdown();

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
const showDropdown = () => {
    const structure = document.createElement("div");
    structure.classList.add("structure", "hide");

    selections.forEach(selection => {
        const { id, abbrev, type } = selection;
        const option = document.createElement("div");
        option.addEventListener("click", () => selectOption(abbrev));
        option.setAttribute("id", id);

        const abbrevDisplay = document.createElement("h5");
        abbrevDisplay.textContent = abbrev;

        const typeDisplay = document.createElement("p");
        typeDisplay.textContent = `(${type})`;

        option.appendChild(abbrevDisplay);
        option.appendChild(typeDisplay);
        structure.appendChild(option);
    });

    return structure;
};

// 1st click event - Toggles dropdown
const toggleDropdown = () => {
    const dropdown = document.querySelector(".structure");
    dropdown.classList.toggle("hide");

    const input = document.querySelector(".input");
    input.classList.toggle("input__active");
};

// 2nd click event - Gathers and shows dropdown selection
const selectOption = (abbrev) => {
    const text = document.querySelector(".placeholder");
    text.textContent = abbrev;
    text.classList.add("input__selected");
    toggleDropdown();
};

dropdown(moveType);