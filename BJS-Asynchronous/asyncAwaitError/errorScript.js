
// async/await error handling
async function cleanRoom() {
    try {
        let message = await new Promise((resolve, reject) => {
            let cleanRoom = true; // Change to false to test error

            if (cleanRoom) {
                resolve('Room is clean!');
            } else {
                reject('Room is messy!');
            }
        });

        console.log(message);
        alert('Success: ' + message);
    } catch (error) {
        console.log('Oops: ' + error);
        alert('Oops: ' + error);
    }
}

function startCleaning() {
    cleanRoom();
}

