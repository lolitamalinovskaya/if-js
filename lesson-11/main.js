//lesson-11

let clickFilter = document.querySelector('#information_about_order');
let windowForSelection = document.querySelector('.window_for_choose_room');
clickFilter.addEventListener('click', () => {
    windowForSelection.style.cssText = `visibility : visible`;
});
//на плюс минус increase // decrease
let countAdults = 0;
let countChildren = 0;
let countRooms = 0;

let decreaseAdults = document.querySelector('.decrease_adults');
decreaseAdults.addEventListener('click', () => (changeAdults(-1)));
let increaseAdults = document.querySelector('.increase_adults');
increaseAdults.addEventListener('click', () => (changeAdults(1)));

let decreaseChildren = document.querySelector('.decrease_children');
decreaseChildren.addEventListener('click', () => (changeChildren(-1)));
let increaseChildren = document.querySelector('.increase_children');
increaseChildren.addEventListener('click', () => (changeChildren(1)));

let decreaseRooms = document.querySelector('.decrease_rooms');
decreaseRooms.addEventListener('click', () => (changeRooms(-1)));
let increaseRooms = document.querySelector('.increase_rooms');
increaseRooms.addEventListener('click', () => (changeRooms(1)));

function updateLabels() {
    document.querySelector('#information_about_order').value =
        `     ${countAdults} Adults - ${countChildren} Children - ${countRooms} Rooms`
    document.querySelector('#counter_adults').innerHTML = `${countAdults}`
    document.querySelector('#counter_children').innerHTML = `${countChildren}`
    document.querySelector('#counter_rooms').innerHTML = `${countRooms}`
    if (countAdults === 0) {
        decreaseAdults.style.cssText = "color: #CECECE; border-color: #CECECE;";
        increaseAdults.style.cssText = "color: #3077C6; border-color: #3077C6;";
    } else if (countAdults < 30) {
        decreaseAdults.style.cssText = "color: #3077C6; border-color: #3077C6;";
        increaseAdults.style.cssText = "color: #3077C6; border-color: #3077C6;";
    } else if (countAdults === 30) {
        decreaseAdults.style.cssText = "color: #3077C6; border-color: #3077C6;"
        increaseAdults.style.cssText = "color: #CECECE; border-color: #CECECE;";
    }
    if (countChildren === 0) {
        decreaseChildren.style.cssText = "color: #CECECE; border-color: #CECECE;";
        increaseChildren.style.cssText = "color: #3077C6; border-color: #3077C6;";
    } else if (countChildren < 10) {
        decreaseChildren.style.cssText = "color: #3077C6; border-color: #3077C6;";
        increaseChildren.style.cssText = "color: #3077C6; border-color: #3077C6;";
    } else if (countChildren === 10) {
        decreaseChildren.style.cssText = "color: #3077C6; border-color: #3077C6;"
        increaseChildren.style.cssText = "color: #CECECE; border-color: #CECECE;";
    }
   if (countRooms === 0) {
        decreaseRooms.style.cssText = "color: #CECECE; border-color: #CECECE;";
        increaseRooms.style.cssText = "color: #3077C6; border-color: #3077C6;";
    } else if (countRooms < 30) {
        decreaseRooms.style.cssText = "color: #3077C6; border-color: #3077C6;";
        increaseRooms.style.cssText = "color: #3077C6; border-color: #3077C6;";
    } else if (countRooms === 30) {
        decreaseRooms.style.cssText = "color: #3077C6; border-color: #3077C6;"
        increaseRooms.style.cssText = "color: #CECECE; border-color: #CECECE;";
    }
}

let selectChildrenText = document.querySelector('.children_age');

function updateChildrenList() {
    if (countChildren === 0) {
        selectChildrenText.style.display = "none";
    } else {
        selectChildrenText.style.display = "";
    }
    let list = '';
    for (let i = 0; i < countChildren; i++) {
        list += `<select class = "select_children">
                        <option age=0>0 years old</option>
                        <option age=1>1 years old</option>
                        <option age=2>2 years old</option>
                        <option age=3>3 years old</option>
                        <option age=4>4 years old</option>
                        <option age=5>5 years old</option>
                        <option age=6>6 years old</option>
                        <option age=7>7 years old</option>
                        <option age=8>8 years old</option>
                        <option age=9>9 years old</option>
                        <option age=10>10 years old</option>
                        <option age=11>11 years old</option>
                        <option age=12>12 years old</option>
                        <option age=13>13 years old</option>
                        <option age=14>14 years old</option>
                        <option age=15>15 years old</option>
                        <option age=16>16 years old</option>
                        <option age=17>17 years old</option>
                </select>`;
    }
    document.querySelector("#children_list").innerHTML = list;
}

function changeAdults(value) {
    countAdults += value;
    if (countAdults < 0) countAdults = 0;
    if (countAdults >= 30) countAdults = 30;
    updateLabels();

}

function changeChildren(value) {
    countChildren += value;
    if (countChildren < 0) countChildren = 0;
    if (countChildren >= 10) countChildren = 10;
    updateLabels();
    updateChildrenList();

}

function changeRooms(value) {
    countRooms += value;
    if (countRooms < 0) countRooms = 0;
    if (countRooms >= 30) countRooms = 30;
    updateLabels();

}

updateLabels();

// lesson-15
// + Отсортируйте пузырьком данные из блока "Homes guests loves" по полю name.
// + Используя форму из вашей верстки, сделайте поиск отелей:
//  + вам нужно работать только с полем "Your destination or hotel name" и полями фильтра (Adults, Children, etc);
// + запрос GET https://fe-student-api.herokuapp.com/api/hotels;
// + запрос принимает параметры: search - строка, adults - количество взрослых, children - возраст детей перечислен через запятую, rooms – количество номеров;
// + из поля формы "Your destination or hotel name" вы должны записать значение в параметр search;
// из поля формы "Adults" вы должны записать значение в параметр adults;
// в параметр children вы должны записать через запятую возраст детей из выпадающего списка (если ребенок 1, затяную добавлять не нужно);
// важное правило – дети не могут путешествовать без взрослых. Это значит, что вы не можете передать параметр children без параметра alults;
// из поля формы "Rooms" вы должны записать значение в параметр rooms;
// см. возможные передаваемые значения фильтра здесь
// пример запроса: https://fe-student-api.herokuapp.com/api/hotels?search=us&adults=2&children=3,10&rooms=2;
// в ответ вы получите массив;
// массив из ответа необходимо вывести в блок "Available hotels", который вы добавите сразу после блока "Top-section";
// дизайн блока "Available hotels" идентичен блоку "Homes guests loves", только имеет заголовок "Available hotels".*/
const destination = document.getElementById('destination');
const button = document.getElementById('input-button');
const sectionAvailable = document.getElementById('section_available_hotels');

button.addEventListener('click', event => {

    let search = destination.value;
    let adults = countAdults;
    let rooms = countRooms;
    let children = Array.from(document.querySelectorAll('.select_children')).map(function (x) {
        return x.options[x.selectedIndex].getAttribute('age');
    }).join(',');
    console.log(children, search, adults, rooms);
    let body = {'search': search, 'children': children, 'rooms': rooms, 'adults': adults};
    let url = new URL('https://fe-student-api.herokuapp.com/api/hotels');
    url.search = new URLSearchParams(body).toString();
    if (adults === 0 && children.length > 0) {
        return;
    }
     fetch(url, {
        method: 'GET',
    })
        .then(response => response.json())
        .then(data => bubbleSort(data))
        .then(data => { console.log('out: ', data); return data })
        .then(data => { availableData = data; return data })
        .then(data => { sectionAvailable.style.cssText = `display : block`; return data })
        .then(data => createBlock(data, '#available_hotels', availableImgStart, availableImgEnd))
        .catch(err => {
            console.log('Fetch Error :-S', err);
        });
});

