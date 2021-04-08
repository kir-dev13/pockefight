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
    const logDiv = document.createElement("div");
    logDiv.classList.add("logs");
    document.querySelector(".body").appendChild(logDiv);
    character.renderHP();
    enemy.renderHP();

    kickBtn.addEventListener("click", kick);
    punchBtn.addEventListener("click", punch); //???    кАК ПЕРЕДАВАТЬ ПАРАМЕТРЫ В CALLBACK
}

function random(param) {
    let result = Math.ceil(Math.random() * param);
    // console.log("аргумент функции рандом: " + param);
    // console.log("результат функции рандом: " + result);

    return result;
}

function damage(damageEffect) {
    let damageHP = random(damageEffect);
    this.health -= damageHP;
    // console.log("аргумент damageEffect " + damageEffect);

    // console.log(
    //     person.name + "получил повреждение " + random(damageEffect)
    // );
    // console.log(generateLog(this.name));
    const log =
        this === enemy
            ? generateLog(this, character.name, damageHP)
            : generateLog(this, enemy.name, damageHP);
    // console.log(log);

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

function generateLog(firstPerson, secondPerson, damageHP) {
    const logs = [
        `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson}, не помня себя от испуга, ударил в предплечье врага.`,
        `${firstPerson.name} поперхнулся, и за это ${secondPerson} с испугу приложил прямой удар коленом в лоб врага.`,
        `${firstPerson.name} забылся, но в это время наглый ${secondPerson}, приняв волевое решение, неслышно подойдя сзади, ударил.`,
        `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson} случайно нанес мощнейший удар.`,
        `${firstPerson.name} поперхнулся, но в это время ${secondPerson} нехотя раздробил кулаком <вырезанно цензурой> противника.`,
        `${firstPerson.name} удивился, а ${secondPerson} пошатнувшись влепил подлый удар.`,
        `${firstPerson.name} высморкался, но неожиданно ${secondPerson} провел дробящий удар.`,
        `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson} беспричинно ударил в ногу противника`,
        `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson} случайно влепил стопой в живот соперника.`,
        `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson} со скуки, разбил бровь сопернику.`,
    ];

    let result = `${
        logs[random(logs.length - 1)]
    } Урон: ${damageHP}; осталось здоровья: ${firstPerson.health} / ${
        firstPerson.healthMax
    }`;

    let logP = document.createElement("p");
    logP.classList.add("log-item");

    let logDiv = document.querySelector(".logs");
    logDiv.insertBefore(logP, logDiv.children[0]);
    logP.innerHTML = result;
    // console.log(logDiv.children[0]);
}

startGame();
