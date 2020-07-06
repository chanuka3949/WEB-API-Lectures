let p = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve("Success");
        reject("Failure");
    }, 3000);
});

p.then((result)=>{
    console.log("Promise Worked : " + result)
}).catch((error) => {
    console.log("Something went wrong :" + error)
});