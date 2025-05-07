// input events
let liveInput = document.getElementById('liveInput');
let outputText = document.getElementById('outputText');

liveInput.addEventListener('input', function () {
    outputText.textContent = liveInput.value;
});

