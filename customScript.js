console.log('Test JS Line before load 1');

window.onload = () => {
    // Function to get a specific query parameter by name


 // Function to get URL parameters
    function getQueryParam(param) {
        let urlParams = new URLSearchParams(window.location.search);
        let value = urlParams.get(param);
        console.log('Param in func is: '+param + 'and val is ' + value); // Log the parameter value
        if(value ==null){
            return 'TestCheckstr';
        }
        return value; // Ensure the value is returned
    }

// Usage example
window.onload = () => {
    // Get the value of 'extension_myTestAKey_1' from the URL
    const myTestAKey_1Value = getQueryParam('extension_myTestAKey_1');

    console.log('returned val is '+ myTestAKey_1Value)

    if (myTestAKey_1Value) {
        // Get the input field
        const inputField = document.getElementById('extension_myTestAKey_1');

        if (inputField) {
            // Temporarily enable the field
            inputField.disabled = false;

            // Set the value from the query parameter
            inputField.value = myTestAKey_1Value;

            // Optionally, set it to read-only or disable again
            inputField.readOnly = true; // Make it read-only
        } else {
            console.error('Input field not found');
        }
    } else {
        console.log('Query parameter not found');
    }
};


    
};

console.log('Test JS Line outside load');
