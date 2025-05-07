// form submission
let myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function (event) {
    event.preventDefault(); // stop page to reload
    alert('Form submitted: ' + document.getElementById('name').value);
});

