// event keycodes
let detectKey = document.getElementById('detectKey');

detectKey.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        alert('You pressed Enter');
    }
});

