// event delegation
let list = document.getElementById('itemList');

list.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        alert('You clicked: ' + event.target.textContent);
    }
});

