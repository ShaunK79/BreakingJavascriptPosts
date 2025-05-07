
// promise
function checkRoom() {
    let promise = new Promise(function (resolve, reject) {
        let cleanRoom = true; // Change to false to test reject

        if (cleanRoom) {
            resolve('Room is clean!');
        } else {
            reject('Room is dirty.');
        }
    });

    promise
        .then(function (message) {
            console.log('Success: ' + message);
            alert('Success: ' + message);
        })
        .catch(function (error) {
            console.log('Oops: ' + error);
            alert('Oops: ' + error);
        });
}