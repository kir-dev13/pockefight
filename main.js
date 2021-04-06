// "use strict";

const character = {
    name: "Pickachu",
    healthMax: 100,
    health: 100,
    elHP: document.querySelector("#health-character"),
    elScrl: document.querySelector("#progressbar-character"),
};

const enemy = {
    name: "Charmanber",
    healthMax: 100,
    health: 100,
    elHP: document.querySelector("#health-enemy"),
    elScrl: document.querySelector("#progressbar-enemy"),
};

const kickBtn = document.querySelector("#btn-kick"),
    punchBtn = document.querySelector("#btn-punch");
// console.log(kick);

// console.log(random(20));

function startGame() {
    console.log("game start!");

    renderHP(character);
    renderHP(enemy);

    kickBtn.addEventListener("click", kick);
    punchBtn.addEventListener("click", punch); //???    кАК ПЕРЕДАВАТЬ ПАРАМЕТРЫ В CALLBACK
}

function random(param) {
    let result = Math.ceil(Math.random() * param);
    // console.log("аргумент функции рандом: " + param);
    console.log("результат функции рандом: " + result);

    return result;
}

function damage(persons, damageEffect) {
    persons.forEach((person, index, persons) => {
        person.health -= random(damageEffect);
        // console.log("аргумент damageEffect " + damageEffect);

        // console.log(
        //     person.name + "получил повреждение " + random(damageEffect)
        // );
        if (person.health < 0) {
            person.health = 0;
            if (index == 0) {
                console.log(persons[index + 1].name + " выиграл");
            } else {
                console.log(persons[index - 1].name + " выиграл");
            }
            kickBtn.disabled = "true";
            punchBtn.disabled = "true";
        }

        renderHP(person);
    });
}

function kick() {
    damage([character, enemy], 40);
    // damage(enemy);
}

function punch() {
    damage([character, enemy], 10);
}

function renderHP(person) {
    person.elHP.innerHTML = person.health + "/" + person.healthMax;
    person.elScrl.style.width = (person.health * 100) / person.healthMax + "%";
}

startGame();
