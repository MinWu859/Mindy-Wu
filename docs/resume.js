window.addEventListener('DOMContentLoaded', init, false);

function init() {
    var fieldset = document.querySelectorAll('input[type="checkbox"]'); // Use querySelectorAll to select checkboxes.

    for (var i = 0; i < fieldset.length; i++) {
        fieldset[i].addEventListener('click', toggle, false);
    }
}

function toggle() {
    var id = this.id;

    switch (id) {
        case "CHARtoggle": {
            var chars = document.getElementsByClassName("character");
            for (var i = 0; i < chars.length; i++) {
                chars[i].classList.toggle("on");
            }
            break;
        }
        case "PLtoggle": {
            var states = document.getElementsByClassName("states");
            for (var i = 0; i < states.length; i++) { // Corrected the typo 'staates' to 'states'.
                states[i].classList.toggle("on");
            }
            break;
        }
        case "OBtoggle": {
            var objects = document.getElementsByClassName("object");
            for (var i = 0; i < objects.length; i++) {
                objects[i].classList.toggle("on");
            }
            break;
        }
    }
}

window.addEventListener('load', init, false); // Use addEventListener for consistency.
