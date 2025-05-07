
// async/await
async function cleanRoom() {
    let message = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Room is clean!');
        }, 1000);
    });

    console.log(message);
    alert(message);
}

function startCleaning() {
    cleanRoom();
}

