console.log("1: Before calling Db...");

function getMovieFromDb() {
    setTimeout(() => {
        console.log("2: Reading movie from DB");
        return { id: 30, name: "Avengers"}
    }, 4000);
}

let movieFromDb = getMovieFromDb();

console.log("3: Movie Data: " + movieFromDb);

console.log("4: Doing some other work");