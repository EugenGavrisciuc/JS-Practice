"use strict";
let lastWatchedFilm,
    grade;

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function () {
        personalMovieDB.count = +prompt("How much films did you already watched?", "");
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.start();
        }
    },

    rememberMyFilms: function () {
        for (let i = 0; i <= 1; i++) {
            do {
                lastWatchedFilm = prompt("What was the last watched film?", "");
            } while (lastWatchedFilm == null || lastWatchedFilm == "" || lastWatchedFilm == undefined || lastWatchedFilm.length > 50);
            grade = +prompt("Give to this film a grade:", "");
            personalMovieDB.movies[lastWatchedFilm] = grade;
        }
    },

    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert("You watched pretty less movies.");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert("You are a classic viewer.");
        } else if (personalMovieDB.count >= 30) {
            alert("You are a movie fan.");
        } else {
            alert("Error.");
        }
    },

    writeYourGenres: function () {
        let i;

        for (i = 0; i < 3; i++) {
            personalMovieDB.genres[i] = prompt(`Your favorite gender number ${i+1}.`);

            if (personalMovieDB.genres[i] == null || personalMovieDB.genres[i] == "") {
                i--;
            }

        }

    },

    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function (verify) {
        if (verify) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }

};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.toggleVisibleMyDB(personalMovieDB.privat);
personalMovieDB.genres.forEach((element, index) => console.log(`Your favorite genre number ${[index+1]} - is ${element}`));