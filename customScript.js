

console.log('Test JS Line 3');

document.addEventListener('DOMContentLoaded', function() {
    // Function to get URL parameters
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        const value = urlParams.get(param);
        console.log('Param in func is: ' + value); // Log the parameter value
        return value;
    }

    // Prepopulate the custom attribute value
    const myTestAKey_1Value = getQueryParam('extension_myTestAKey_1');
    if (myTestAKey_1Value) {
        // Delay to ensure Azure UI elements are loaded
        setTimeout(function() {
            const inputField = document.getElementById('extension_myTestAKey_1'); // Changed to use ID
            if (inputField) {
                inputField.value = myTestAKey_1Value; // Set the value of the existing input field
                inputField.readOnly = true; // Optionally, set it to read-only
                console.log('Field populated with: ' + myTestAKey_1Value);
            } else {
                console.error('Input field not found'); // Log if the field isn't found
            }
        }, 2000); // Adjust delay if necessary
    }
});


console.log('Test JS Line 31 ');


