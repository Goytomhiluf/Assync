const simplePromise = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("message from promise");
    }, 2000);
});

simplePromise.then(data => {
    console.log(data);
}).catch((error) => {
    console.log("error message");
});

