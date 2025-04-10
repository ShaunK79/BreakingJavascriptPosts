function name( parameter1, parameter2) {
    // code to executed
}


function greeting() {
    document.write('Good Afternoon');
}
greeting(); // Good Afternoon

function getArea(width, height){
    document.write (width * height);
}
wallWidth = 4;
wallHeight = 5;
getArea(wallWidth, wallHeight);
20

let getArea = function(width, height){
    document.write (width * height);
}
getArea(5, 6); // 30


let getArea = (width, height) => width * height;
document.write(5 * 3); // 15


let getVolume = (function() {
    let x = 10;
    let y = 5;
    return x * y;
    })();
document.write(getVolume);// 50


function greet(fname, callback) {
    document.write('Good afternoon, ' + fname);
    callback();
}
function sayBye() {
    document.write('Goodbye!');
}
greet('Bob ',  sayBye);
// Good afternoon, Bob  Goodbye!


