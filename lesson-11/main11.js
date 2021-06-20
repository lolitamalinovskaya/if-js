//lesson-11

let clickFilter = document.querySelector('#information_about_order');
let windowForSelection = document.querySelector('.window_for_choose_room');
clickFilter.addEventListener('click', (event) => {
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
decreaseAdults.addEventListener('click', (evt => (changeAdults(-1))));
let increaseAdults = document.querySelector('.increase_adults');
increaseAdults.addEventListener('click', (evt => (changeAdults(1))));

/* show children years*/
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

let decreaseChildren = document.querySelector('.decrease_children');
decreaseChildren.addEventListener('click', (evt => (changeChildren(-1))));
let increaseChildren = document.querySelector('.increase_children');
increaseChildren.addEventListener('click', (ev) => {
  changeChildren(1);
});

let decreaseRooms = document.querySelector('.decrease_rooms');
decreaseRooms.addEventListener('click', (evt => (changeRooms(-1))));
let increaseRooms = document.querySelector('.increase_rooms');
increaseRooms.addEventListener('click', (evt => (changeRooms(1))));

function changeAdults (value) {
    countAdults += value;
    if(countAdults < 0) countAdults = 0;
    if(countAdults >= 30) countAdults = 30;
    updateLabels();
}
function changeChildren (value) {
    countChildren += value;
    if(countChildren < 0) countChildren = 0;
    if(countChildren >= 10) countChildren = 10;
    updateLabels();
    updateChildrenList();
}
function changeRooms (value) {
    countRooms += value;
    if (countRooms < 0) countRooms = 0;
    if(countRooms >= 30) countRooms = 30;
    updateLabels();
}
updateLabels();
updateChildrenList();
