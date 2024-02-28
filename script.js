let ageMessage = null;
let cityMessage = '';
let sportMessage = '';
const errorMessage = 'Здається, ти помилився при вводі';

const yearOfBirth = +prompt('Який твій рік народження');
if (!isNaN(yearOfBirth) && yearOfBirth !== 0) {
    const age = 2024 - yearOfBirth;
    ageMessage = `Тобі ${age} років`;
} else if (yearOfBirth === 0) {
    alert('Шкода, що Ви не захотіли ввести свій рік народження');
    ageMessage = '';
} else {
    alert(errorMessage);
    ageMessage = '';
}

const city = prompt('В якому місті ти живешь?');
if (city === null) {
    alert('Шкода, що Ви не захотіли ввести назву свого міста');
} else if (city.toLowerCase() === 'київ') {
    cityMessage = 'Ти живеш у столиці України';
} else if (city.toLowerCase() === 'вашишгтон') {
    cityMessage = 'Ти живеш у столиці США';
} else if (city.toLowerCase() === 'лондон') {
    cityMessage = 'Ти живеш у столиці Великобританії';
} else if (!isNaN(+city)) {
    alert(errorMessage);
} else {
    cityMessage = `Ти живешь у ${city}`;
}

const kindOfSport = prompt('Який твій улюблений вид спорту');
if (kindOfSport === null) {
    alert('Шкода, що Ви не захотіли ввести вид спорту');
} else if (kindOfSport.toLowerCase() === 'плавання') {
    sportMessage = 'Круто! Хочеш стати Майклом Фелпсом?';
} else if (kindOfSport.toLowerCase() === 'баскетбол') {
    sportMessage = 'Круто! Хочеш стати Майклом Джорданом?';
} else if (kindOfSport.toLowerCase() === 'теніс') {
    sportMessage = 'Круто! Хочеш стати Новаком Джокомічем?';
} else if (!isNaN(+kindOfSport)) {
    alert(errorMessage);
} else {
    sportMessage = `Круто! Ти любиш ${kindOfSport}`;
}

if (ageMessage === '' && cityMessage === '' && sportMessage === '') {
    alert('Шкода, ти нічого нам не сказав про себе');
} else {
    alert(`${ageMessage}\n${cityMessage}\n${sportMessage}`);
}


