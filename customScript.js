console.log('Test JS Line before load 1');

window.onload = () => {
    let myTestAKey_1Value = sessionStorage.getItem('myTestAKey_1');
    if (myTestAKey_1Value) {
        document.getElementById('myTestAKey_1_input').value = myTestAKey_1Value; // Assuming input field has this ID

        document.getElementById('extension_myTestAKey_1').value = myTestAKey_1Value; // Assuming input field has this ID
    }

    console.log('line break 1');

    let inputField = document.getElementById('myTestAKey_1'); // Use the correct ID
    if (inputField) {
        inputField.value = myTestAKey_1Value; // Set the value
    }
    console.log('line break 2');

    // Function to get URL parameters
    function getQueryParam(param) {
        let urlParams = new URLSearchParams(window.location.search);
        let value = urlParams.get(param);
        console.log('Param in func is: ' + value); // Log the parameter value
        if(value ==null){
            return 'TestCheckstr';
        }
        return value; // Ensure the value is returned
    }

    console.log('line break 3');
    // Prepopulate the custom attribute value
    myTestAKey_1Value = getQueryParam('extension_myTestAKey_1');
    if (myTestAKey_1Value) {
        // Delay to ensure Azure UI elements are loaded
        setTimeout(function() {
            inputField = document.getElementById('extension_myTestAKey_1');
            if (inputField) {
                inputField.disabled = false; // Temporarily enable the field
            inputField.value = myTestAKey_1Value; // Set the value
            inputField.disabled = true; // Disable it again
                console.log('Field populated with: ' + myTestAKey_1Value);
            } else {
                console.error('Input field not found'); // Log if the field isn't found
            }
        }, 2000); // Adjust delay if necessary
    }

    console.log('line break 4');

    
};

console.log('Test JS Line outside load');
