"use strict";
let numberOfFilms = +prompt("How much films did you already watch?", ""),
    lastWatchedFilm,
    grade;

let personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

for(let i = 0; i <= 1;i++ )
{
    do{
    lastWatchedFilm = prompt("What was the last watched film?", "");
    }while(lastWatchedFilm == null || lastWatchedFilm == "" || lastWatchedFilm == undefined || lastWatchedFilm.length > 50);
    grade = +prompt("Give to this film a grade:", "");
    personalMovieDB.movies[lastWatchedFilm] = grade;
}

if(personalMovieDB.count < 10)
{
    alert("You watched pretty less movies.");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30)
{
    alert("You are a classic viewer.");
} else if (personalMovieDB.count > 30){
    alert("You are a movie fan.");
} else{
    alert("Error.");
}

console.log(personalMovieDB);