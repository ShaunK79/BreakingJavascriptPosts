// event bubbling
let outer = document.getElementById('outerDiv');
let inner = document.getElementById('innerDiv');

inner.addEventListener('click', function () {
    alert('Inner Div clicked!');
});
outer.addEventListener('click', function () {
    alert('Outer Div clicked');
});

