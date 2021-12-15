"use strict";

//document.addEventListener("DOMContentLoaded", () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    let addMovie = document.querySelector(".adding__input"),
    newValReg,
    confirmButton = document.querySelector(".add > button"),
    addElemIntoList = document.querySelector(".promo__interactive-list"),
    //divDeleteAdd = document.querySelectorAll(".promo__interactive-item"),
    ElemMovieList,
    newDiv = document.createElement("div");
    newDiv.className = "delete";
    

    confirmButton.setAttribute("type", "button");

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
    // divDeleteAdd.forEach(every_el => {
    //     every_el.append(newDiv);
    // });

    function deleteTest () {
        let deleteButton = document.querySelectorAll(".delete");
        deleteButton.forEach((element, index) => {
            element.addEventListener("click",() => {
                console.log(index);
                element.parentNode.remove();
                movieDB.movies.splice(index, 1);
                console.log(movieDB);
                
                deleteButton.forEach((elm) => {
                    elm.remove();
                    films(deleteTest);
                });

            });
            //console.log("buttons registered");
        });

    }
    let checkElem = document.querySelector('input[type=checkbox]');
    //let verif = [], nv = [];
    let films = function (callback){
        let changeContent =  document.querySelectorAll(".promo__interactive-item");
              for(let i = 0; i<movieDB.movies.length ; i++)
        {
            if(movieDB.movies[i].length > 21)
            {
                // Substring returns value, so it is not necessary to use a new value for that.
                // console.log(movieDB.movies[i]);
                // nv[i] = movieDB.movies[i];
                // verif[i] = nv[i].substring(0, 21);

                movieDB.movies[i] = movieDB.movies[i].substring(0, 21);
                movieDB.movies[i] += "...";
            }
            changeContent[i].innerText = `${i+1}. ` + movieDB.movies[i];
            changeContent[i].append(document.createElement("div"));
            //deleteButton[i].setAttribute("onlick", "alert('a')");
            
        }
        document.querySelectorAll("ul li > div").forEach(elm => {
                elm.className = "delete";
            });
            //console.log("finished");
            callback();
    };
    
    films(deleteTest);

        confirmButton.addEventListener("click", () =>  
        {
        newValReg = addMovie.value;
        movieDB.movies.push(newValReg);
        
        ElemMovieList = document.createElement("li");
        ElemMovieList.className = "promo__interactive-item";
        ElemMovieList.innerText = newValReg;


        addElemIntoList.append(ElemMovieList);
        
        movieDB.movies.sort();
        films(deleteTest);
        
        if (checkElem.checked === true)
        {
            console.log("Added as a favorite movie.");
        }
        console.log(movieDB);
        checkElem.checked = false;
        addMovie.value = "";
        });

        //let checkElem = document.querySelector('input[type=checkbox]');
        // checkElem.addEventListener("click", () => {
        //     if (checkElem.checked === true)
        //     {
        //         console.log("Added as a favorite movie.");
        //     }
        
        // });
    
    console.log(movieDB);
//});