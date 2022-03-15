new Promise((resolve, reject) => {
    let a = 5;
    a > 3 ? resolve() : reject();
})
.then(() => { console.log("a는 3보다 크다.") })
.catch(() => { console.log("a는 3보다 작다.") });
