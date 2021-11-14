"use strict";
let numberOfFilms = +prompt("How much films did you already watch?", ""),
    lastWatchedFilm = prompt("What was the last watched film?", ""),
    lastWatchedFilm_second = prompt("What was the last watched film?", ""),
    grade = +prompt("Give to this film a grade:", ""),
    grade_second = +prompt("Give to this film a grade:", "");

let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

personalMovieDB.movies[lastWatchedFilm] = grade;
personalMovieDB.movies[lastWatchedFilm_second] = grade_second; 

console.log(personalMovieDB);