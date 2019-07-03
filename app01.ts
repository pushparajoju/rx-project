
const p = new Promise(resolve => {
    setTimeout(() => {
        resolve('Use of promise');
    }, 1000)
});

/* log single value that is emitted. */
p.then(value => console.log(value));