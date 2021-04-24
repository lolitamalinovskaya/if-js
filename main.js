let user = 'John Doe';
console.log(user);
let student = 'Lolita';
console.log(student);
user = student; //Lolita
console.log(user);
let test = 1;
test++;
test = test + '1'; //21
console.log(test);
test--; //20
console.log(test);
test = new Boolean(test); //true
console.log(test);
const arr = [2,3,5,8];
let answer = 1;
for (let i=0; i<arr.length; i++) {
    answer = answer * arr[i];
}
console.log(answer);
const arr2 = [2,5,8,15,0,6,20,3];
for (let i=0; i<arr2.length; i++) {
    if (arr2[i] >= 5 && arr2[i] <= 10) {
        console.log(arr2[i]);
    }
}
const arr3 = [2,5,8,15,0,6,20,3];
for (let i=0; i<arr3.length; i++) {
    if (arr3[i] % 2 == 0) {
        console.log(arr3[i]);
    }
}

function check_palindrome(string) {

    let len = string.length;
    let mid = Math.floor(len/2);

    for ( let i = 0; i < mid; i++ ) {
        if (string[i] !== string[len - 1 - i]) {
            return false;
        }
    }

    return true;
}
console.log(check_palindrome('pollop'));

function checkMinNumber(a,b) {
   if (a <= b) {
   return a;
   }
   return b;
}
function checkMaxNumber(a,y) {
    if (a >= y) {
        return a;
    }
    return y;
}
function checkMinNumberTernary(a,b) {
    return a <= b ? a : b;
}
function checkMaxNumberTernary(a,y) {
    return a >= y ? a : y;
}

let a = 73;
let b = -30;
let y = 82;
console.log(checkMinNumber(a,b));
console.log(checkMaxNumber(a,y));
console.log(checkMinNumberTernary(a,b));
console.log(checkMaxNumberTernary(a,y));

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}

const arr5 = [];
arr5.length=10;
for (let i=0; i<10; i++) {
arr5[i] = getRandomNumber(1, 100);
}
console.log(arr5);

for (let i=0; i<arr5.length; i++) {
  arr5[i] = arr5[i].toString().replaceAll('0','zero');
}
console.log(arr5);


const sum = (arg1) => {
    return (arg2) => {
        arg1 += arg2;
        return arg1;
    }
}
console.log(sum(5)(2));


const p1 = document.getElementById('text1');
const p2 = document.getElementById('text2');
const p3 = document.getElementById('text3');
const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
p1.onclick = color;
p2.onclick = color;
p3.onclick = color;
function color() {
   const colorCurrent = this.style.backgroundColor;
   let getResultIndex = getIndexOf(colorCurrent,colors);
    if (getResultIndex!== -1){
        this.style.backgroundColor = colors[(getResultIndex+1) % colors.length];
        return 1;
    }
    this.style.backgroundColor = colors[0];
    return 1;
}
function getIndexOf(colorCurrent,colors) {
    for (let i=0; i<colors.length; i++){
       if (colorCurrent === colors[i]) {
           return i;
       }
    }
    return -1;
}

let date = '2020-11-26';
console.log(date.split('-').reverse().join('.'));

function searchString(str, data) {
    let result = data.filter(function (e){
        return e.country.includes(str) || e.city.includes(str) || e.hotel.includes(str);
    }).map(function (e){
        return e.country + ', ' + e.city +', ' + e.hotel;
    })
  return result;
}
const data = [
    {
        country: 'Russia',
        city: 'Saint Petersburg',
        hotel: 'Hotel Leopold',
    },
    {
        country: 'Spain',
        city: 'Santa Cruz de Tenerife',
        hotel: 'Apartment Sunshine',
    },
    {
        country: 'Slowakia',
        city: 'Vysokie Tatry',
        hotel: 'Villa Kunerad',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel : 'Hostel Friendship',
    },
    {
        country: 'Indonesia',
        city: 'Bali',
        hotel: 'Ubud Bali Resort&SPA',
    },
    {
        country: 'Netherlands',
        city: 'Rotterdam',
        hotel: 'King Kong Hostel',
    },
    {
        country: 'Marocco',
        city: 'Ourika',
        hotel: 'Rokoko Hotel',
    },
    {
        country: 'Germany',
        city: 'Berlin',
        hotel: 'Hotel Rehberge Berlin Mitte',
    },
];
console.log(searchString('Mitte', data));