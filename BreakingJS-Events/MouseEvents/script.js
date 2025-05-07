// mouse events
const box = document.getElementById('hoverBox');

box.addEventListener('mouseover', function () {
    box.style.backgroundColor = 'lightgreen';
});

box.addEventListener('mouseout', function () {
    box.style.backgroundColor = 'lightblue';
});