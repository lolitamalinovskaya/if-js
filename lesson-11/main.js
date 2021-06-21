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

function updateLabels () {
    document.querySelector('#information_about_order').value =
    `     ${countAdults} Adults - ${countChildren} Children - ${countRooms} Rooms`
    document.querySelector('#counter_adults').innerHTML = `${countAdults}`
    document.querySelector('#counter_children').innerHTML = `${countChildren}`
    document.querySelector('#counter_rooms').innerHTML = `${countRooms}`
}
let decreaseAdults = document.querySelector('.decrease_adults');
decreaseAdults.addEventListener('click', () => (changeAdults(-1)));
let increaseAdults = document.querySelector('.increase_adults');
increaseAdults.addEventListener('click', () => (changeAdults(1)));

function changeColorAdults() {
    if (countAdults === 0 || countAdults === 30) {
        increaseAdults.style.cssText = "color: #CECECE; border-color: #CECECE;";
        decreaseAdults.style.cssText = "color: #CECECE; border-color: #CECECE;";
    } else {
        decreaseAdults.style.cssText = "color: #3077C6; border-color: #3077C6;";
        increaseAdults.style.cssText = "color: #3077C6; border-color: #3077C6;";
    }
}

/* show children years*/

let selectChildrenText = document.querySelector('.children_age');
function updateChildrenList() {
    if (countChildren === 0)  {
        selectChildrenText.style.display = "none";
    } else {
        selectChildrenText.style.display = "";
    }
    let list = '';
    for (let i = 0; i < countChildren; i++) {
        list += `<select class = "select_children">
                        <option>0 years old</option>
                        <option>1 years old</option>
                        <option>2 years old</option>
                        <option>3 years old</option>
                        <option>4 years old</option>
                        <option>5 years old</option>
                        <option>6 years old</option>
                        <option>7 years old</option>
                        <option>8 years old</option>
                        <option>9 years old</option>
                        <option>10 years old</option>
                        <option>11 years old</option>
                        <option>12 years old</option>
                        <option>13 years old</option>
                        <option>14 years old</option>
                        <option>15 years old</option>
                        <option>16 years old</option>
                        <option>17 years old</option>
                </select>`;
    }
    document.querySelector("#children_list").innerHTML = list;
}
function changeColorChildren() {
    if (countChildren === 0 || countChildren === 10) {
        increaseChildren.style.cssText = "color: #CECECE; border-color: #CECECE;";
        decreaseChildren.style.cssText = "color: #CECECE; border-color: #CECECE;";
    } else {
        decreaseChildren.style.cssText = "color: #3077C6; border-color: #3077C6;";
        increaseChildren.style.cssText = "color: #3077C6; border-color: #3077C6;";
    }
}

let decreaseChildren = document.querySelector('.decrease_children');
decreaseChildren.addEventListener('click', () => (changeChildren(-1)));
let increaseChildren = document.querySelector('.increase_children');
increaseChildren.addEventListener('click', () => (changeChildren(1)));

let decreaseRooms = document.querySelector('.decrease_rooms');
decreaseRooms.addEventListener('click', () => (changeRooms(-1)));
let increaseRooms = document.querySelector('.increase_rooms');
increaseRooms.addEventListener('click', () => (changeRooms(1)));

function changeColorRooms() {
    if (countRooms === 0 || countRooms === 30) {
        increaseRooms.style.cssText = "color: #CECECE; border-color: #CECECE;";
        decreaseRooms.style.cssText = "color: #CECECE; border-color: #CECECE;";
    } else {
        decreaseRooms.style.cssText = "color: #3077C6; border-color: #3077C6;";
        increaseRooms.style.cssText = "color: #3077C6; border-color: #3077C6;";
    }
}

function changeAdults(value) {
    countAdults += value;
    if (countAdults < 0) countAdults = 0;
    if (countAdults >= 30) countAdults = 30;
    updateLabels();
    changeColorAdults();
}
function changeChildren (value) {
    countChildren += value;
    if(countChildren < 0) countChildren = 0;
    if(countChildren >= 10)  countChildren = 10;
    updateLabels();
    updateChildrenList();
    changeColorChildren();
}
function changeRooms (value) {
    countRooms += value;
    if (countRooms < 0) countRooms = 0;
    if(countRooms >= 30) countRooms = 30;
    updateLabels();
    changeColorRooms();
}
updateLabels();

