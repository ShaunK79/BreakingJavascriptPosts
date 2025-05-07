
// callback
function doHomework(subject, callback) {
    console.log(`Starting my ${subject} homework.`);
    callback();
}

function finished() {
    console.log('Yay! Homework is done!');
    alert('Yay! Homework is done!');
}

function startHomework() {
    doHomework('Math', finished);
}