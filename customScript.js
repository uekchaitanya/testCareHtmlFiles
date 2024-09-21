window.onload = () => {
    // Function to get a specific query parameter by name
    console.log('window on load called);
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    // Get the value of 'extension_myTestAKey_1' from the URL
    const myTestAKey_1Value = getQueryParam('extension_myTestAKey_1');
    console.log('Query Parameter Value:', myTestAKey_1Value); // Log for debugging

    if (myTestAKey_1Value) {
        const inputField = document.getElementById('extension_myTestAKey_1');

        if (inputField) {
            // Temporarily enable the field to set the value
            inputField.disabled = false;

            // Set the value from the query parameter
            inputField.value = myTestAKey_1Value;

            // Make it read-only after setting
            inputField.readOnly = true; 
            console.log('Field populated with:', myTestAKey_1Value); // Log to confirm the value is set
        } else {
            console.error('Input field not found');
        }
    } else {
        console.log('Query parameter not found');
    }

    Console.log('window on load done);
};
