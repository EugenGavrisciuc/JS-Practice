/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// let ad = document.getElementsByClassName("promo__adv");
// while(ad.length > 0){
//     ad[0].parentNode.removeChild(ad[0]);
// }
let ad = document.querySelectorAll(".promo__adv > img");

ad.forEach(element => {
    element.remove();
});


let changeGenre = document.getElementsByClassName("promo__genre");
//changeGenre[0].innerHTML = "ДРАМА";
changeGenre[0].textContent = "ДРАМА";


let changeBG = document.getElementsByClassName("promo__bg");
changeBG[0].style.backgroundImage = "url(img/bg.jpg)";
//changeBG[0].style.objectFit = "fill";

movieDB.movies.sort();

let changeContent =  document.getElementsByClassName("promo__interactive-item");

let films = function (){
    for(let i = 0; i<movieDB.movies.length ; i++){
    changeContent[i].innerHTML = `${i+1}. ` + movieDB.movies[i];
    }
};

films();

//console.log(movieDB);