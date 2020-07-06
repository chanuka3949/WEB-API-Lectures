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

getMovieFromDb().then((result) => {
    console.log("3: Movie Data: " + result.name);
});

console.log("4: Doing some other work");