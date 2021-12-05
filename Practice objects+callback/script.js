"use strict";
let counter = 0;


let house = {
    bedroom: 'parents',
    living_room: 'guests',
    kitchen: {
        mother: 'cook',
        father: 'clean'
    },
    makeTest: function(){
        console.log("Test");
    }

};


function deleteThenShow(showres, callback) {
    console.log(showres);
    for (let key in house) {
        if (typeof (house[key]) === 'object') {
            for (let i in house[key]) {
                console.log(`Propriety: ${i} has the following value: ${house[key][i]}`);
            }
        } else {
            console.log(`Propriety: ${key} has the following value: ${house[key]}`);
        }
    }
    callback();
}

deleteThenShow(house, function () {
    delete house.living_room;
    console.log(house);

    for (let key in house) {
        if (typeof (house[key]) === 'object') {
            for (let i in house[key]) {
                console.log(`Propriety: ${i} has the following value: ${house[key][i]}`);
                counter++;
            }
        } else {
            console.log(`Propriety: ${key} has the following value: ${house[key]}`);
            counter++;
        }
    }

    console.log(counter);
});

console.log(Object.keys(house).length);
house.makeTest();
console.log(house.makeTest);

const {mother, father} = house.kitchen;
console.log(mother);
console.log(father);