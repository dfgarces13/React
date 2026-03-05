const myPromise = new Promise( (resolve, reject) => {

    setTimeout(() => {
        //! yo quiero mi dinero
        //resolve(100);
        reject('no me pagaron');
    }, 2000);
});

myPromise.then(
    (myMoney) => {
        console.log(`My money is back ${myMoney}`);
    }
    
).catch( reason => {
    console.warn(reason);
}).finally(() => {
    console.log('No le vuelvo a prestar');
})