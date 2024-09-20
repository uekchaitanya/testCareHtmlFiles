window.onload = () => {
    // Function to get a specific query parameter by name
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    // Get the value of 'extension_myTestAKey_1' from the URL
    const myTestAKey_1Value = getQueryParam('extension_myTestAKey_1');
    console.log('Query Parameter Value:', myTestAKey_1Value); // Log to verify the value

    if (myTestAKey_1Value) {
        const inputField = document.getElementById('extension_myTestAKey_1');

        if (inputField) {
            // Temporarily enable the field
            inputField.disabled = false;

            // Set the value from the query parameter
            inputField.value = myTestAKey_1Value;

            // Make it read-only or disable it again if needed
            inputField.readOnly = true; // Change to inputField.disabled = true; if you prefer
            console.log('Field populated with:', myTestAKey_1Value); // Log to confirm the value is set
        } else {
            console.error('Input field not found');
        }
    } else {
        console.log('Query parameter not found');
    }
};
