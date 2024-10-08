const urlParams1 = new URLSearchParams(window.location.search);
let value1 = urlParams1.get('extension_myTestAKey_1');
alert('hello and the val is '+ value1 );

alert('before innter text ' +document.getElementById('extension_myTestAKey_1').innerText );

alert('before value is ' +document.getElementById('extension_myTestAKey_1').value );

document.getElementById('extension_myTestAKey_1').innerText = value1;


document.getElementById('email').innerText = value1;



console.log('The value is set ');

window.onload = () => {

    alert('val 1 is ' + value1);

    document.getElementById('extension_myTestAKey_1').innerText = value1;
    
    alert('its set');

};

alert('after innter text ' +document.getElementById('extension_myTestAKey_1').innerText );

alert('after  value is ' +document.getElementById('extension_myTestAKey_1').value );

alert('after email innter text ' +document.getElementById('email').innerText );

alert('after  email value is ' +document.getElementById('email').value );


document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded event fired'); // Log when the event fires

    // Function to get query parameters
    const getQueryParam = (param) => {
        const urlParams = new URLSearchParams(window.location.search);
        const value = urlParams.get(param);
        console.log(`Query Parameter Value for ${param}:`, value); // Log the parameter value
        return value;
    };

    // Get the value for myTestAKey_1
    const myTestAKey_1Value = getQueryParam('extension_myTestAKey_1');
    
    if (myTestAKey_1Value) {
        console.log('myTestAKey_1Value found:', myTestAKey_1Value); // Log if value is found
    } else {
        console.log('myTestAKey_1Value not found in URL'); // Log if value is not found
    }

    // MutationObserver to watch for changes in the DOM
    const observer = new MutationObserver(() => {
        const inputField = document.getElementById('extension_myTestAKey_1');

        if (inputField) {
            console.log('Input field found in DOM'); // Log when the input field is found

            if (myTestAKey_1Value) {
                inputField.disabled = false; // Temporarily enable the field
                inputField.value = myTestAKey_1Value; // Set the value
                inputField.readOnly = true; // Set to read-only
                console.log('Field populated with:', myTestAKey_1Value); // Log successful population
            } else {
                console.error('myTestAKey_1Value was not found, cannot populate field'); // Log if value is missing
            }

            observer.disconnect(); // Stop observing after finding and populating the field
        } else {
            console.log('Input field not found yet, waiting for changes...'); // Log if the field isn't found
        }
    });

    // Start observing for changes in the body
    observer.observe(document.body, { childList: true, subtree: true });

    console.log('MutationObserver is set up'); // Log when the observer is set up
});
