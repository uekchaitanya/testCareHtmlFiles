console.log('Test JS Line 1 ');

document.addEventListener('DOMContentLoaded', function() {
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        const value = urlParams.get(param);
        console.log('Param in func is ' + value);
        return value;
    }

    const myTestAKey_1Value = getQueryParam('extension_myTestAKey_1');
    if (myTestAKey_1Value) {
        setTimeout(function() {
            const inputField = document.querySelector('input[name="extension_myTestAKey_1"]');
            if (inputField) {
                inputField.value = myTestAKey_1Value;
                inputField.readOnly = true; // Optionally, make it read-only
                console.log('Field populated with: ' + myTestAKey_1Value);
            } else {
                console.log('Input field not found');
            }
        }, 2000);
    }
});
