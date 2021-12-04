"use strict";
let numberOfFilms,
    lastWatchedFilm,
    grade;

function start() {
    numberOfFilms = +prompt("How much films did you already watch?", "");
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        //numberOfFilms = +prompt("How much films did you already watch?", "");
        start();
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i <= 1; i++) {
        do {
            lastWatchedFilm = prompt("What was the last watched film?", "");
        } while (lastWatchedFilm == null || lastWatchedFilm == "" || lastWatchedFilm == undefined || lastWatchedFilm.length > 50);
        grade = +prompt("Give to this film a grade:", "");
        personalMovieDB.movies[lastWatchedFilm] = grade;
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("You watched pretty less movies.");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("You are a classic viewer.");
    } else if (personalMovieDB.count >= 30) {
        alert("You are a movie fan.");
    } else {
        alert("Error.");
    }
}
detectPersonalLevel();

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Your favorite gender number ${i+1}.`);
    }
}

writeYourGenres();

// function showMyDB() {
//     if (personalMovieDB.privat == false) {
//         console.log(personalMovieDB);
//     }
// }
// showMyDB();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);