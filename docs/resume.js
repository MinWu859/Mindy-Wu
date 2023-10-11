function init() {
    // Get all the checkboxes within the fieldset
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // Attach a click event listener to each checkbox
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('click', function() {
            toggle(this); // Pass the clicked checkbox as an argument to the toggle function
        });
    });
}

function toggle(checkbox) {
    // Define the target class based on the checkbox's ID
    var targetClass = checkbox.id.replace("toggle", "").toLowerCase();

    // Get all elements with the target class
    var elements = document.getElementsByClassName(targetClass);

    // Toggle the 'on' class for each element
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("on");
    }
}

// Execute the 'init' function when the page loads
window.onload = init;
