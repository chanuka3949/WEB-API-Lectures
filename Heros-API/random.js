console.log("1: Before calling Db...");

function getMovieFromDb() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("2: Reading movie from DB");
            let dbData =  { id: 30, name: "Avengers"};
            resolve(dbData);
        }, 4000);
    });
}

//Using Async Await
async function printMovieDetails() {
    let movieDataFromDB = await getMovieFromDb();
    let secondFucntion = await getAnotherAction();
    console.log("3: Movie Data:");
    console.log(result.name);
}

//Using Resolve Promise
getMovieFromDb().then((result) => {
    console.log("3: Movie Data:");
    console.log(result.name);
});

console.log("4: Doing some other work");