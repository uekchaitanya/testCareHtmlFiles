
console.log('Test JS Line 2');

document.addEventListener('DOMContentLoaded', function() {
    // Function to get URL parameters
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        const value = urlParams.get(param);
        console.log('Param in func is: ' + value); // Log the parameter value
        return value;
    }

    // Prepopulate the field with the custom attribute value
    const myTestAKey_1Value = getQueryParam('extension_myTestAKey_1');
    const inputField = document.getElementById('extension_myTestAKey_1');
    
    if (inputField) {
        // If you want to set the value and keep it disabled
        inputField.value = myTestAKey_1Value || ''; // Use the value or an empty string if no value found
        console.log('Field populated with: ' + myTestAKey_1Value);
    } else {
        console.error('Input field not found');
    }
});

console.log('Test JS Line 26 ');


