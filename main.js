// "use strict";

const character = {
    name: "Pickachu",
    healthMax: 100,
    health: 100,
    elHP: document.querySelector("#health-character"),
    elScrl: document.querySelector("#progressbar-character"),
    damage: damage,
    renderHP: renderHP,
};

const enemy = {
    name: "Charmander",
    healthMax: 100,
    health: 100,
    elHP: document.querySelector("#health-enemy"),
    elScrl: document.querySelector("#progressbar-enemy"),
    damage: damage,
    renderHP: renderHP,
};

const kickBtn = document.querySelector("#btn-kick"),
    punchBtn = document.querySelector("#btn-punch");
// console.log(kick);

// console.log(random(20));

function startGame() {
    console.log("game start!");

    character.renderHP();
    enemy.renderHP();

    kickBtn.addEventListener("click", kick);
    punchBtn.addEventListener("click", punch); //???    кАК ПЕРЕДАВАТЬ ПАРАМЕТРЫ В CALLBACK
}

function random(param) {
    let result = Math.ceil(Math.random() * param);
    // console.log("аргумент функции рандом: " + param);
    console.log("результат функции рандом: " + result);

    return result;
}

function damage(damageEffect) {
    this.health -= random(damageEffect);
    // console.log("аргумент damageEffect " + damageEffect);

    // console.log(
    //     person.name + "получил повреждение " + random(damageEffect)
    // );
    if (this.health <= 0) {
        this.health = 0;
        console.log(this.name + " проиграл!");

        kickBtn.disabled = "true";
        punchBtn.disabled = "true";
    }

    this.renderHP();
}

function kick() {
    character.damage(40);
    enemy.damage(40);
    // damage(enemy);
}

function punch() {
    character.damage(10);
    enemy.damage(10);
}

function renderHP() {
    this.elHP.innerHTML = this.health + "/" + this.healthMax;
    this.elScrl.style.width = (this.health * 100) / this.healthMax + "%";
}

startGame();
