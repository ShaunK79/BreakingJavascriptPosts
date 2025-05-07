
// promise chain
function doSomething() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Did something');
            resolve();
        }, 1000);
    });
}

function doSomethingElse() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Did something else');
            resolve();
        }, 1000);
    });
}

function doAnotherThing() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Did another thing');
            resolve();
        }, 1000);
    });
}

function handleError() {
    console.log('Something went wrong.');
}

function startTasks() {
    doSomething()
        .then(doSomethingElse)
        .then(doAnotherThing)
        .catch(handleError);
}

