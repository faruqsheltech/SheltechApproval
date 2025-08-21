function submitForm(event) {
    // Get the input values
    const name = document.getElementById('nameInput').value;
    console.log(name);
    const age = document.getElementById('ageInput').value;

    // Display the values in an alert
    alert(`Name: ${name}, Age: ${age}`);
}