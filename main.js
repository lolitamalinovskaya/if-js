/*
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
    let result = data.filter(function (e) {
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
console.log(searchString('M', data));

function checkPalindrome(str) {
return str.split('').reverse().join('') === str;
}
console.log(checkPalindrome('poloolop'))

function searchHotels(str, hotels) {
    let result = hotels.filter(function (e) {
        return e.country.includes(str) || e.city.includes(str) || e.name.includes(str);
    }).map(function (e){
        return e.country + ', ' + e.city +', ' + e.name;
    })
    return result;
}
const hotels = [
    {
        name: 'Hotel Leopold',
        city: 'Saint Petersburg',
        country: 'Russia',
    },
    {
        name: 'Apartment Sunshine',
        city: 'Santa Cruz de Tenerife',
        country: 'Spain',
    },
    {
        name: 'Villa Kunerad',
        city: 'Vysokie Tatry',
        country: 'Slowakia',
    },
    {
        name: 'Hostel Friendship',
        city: 'Berlin',
        country: 'Germany',
    },
    {
        name: 'Radisson Blu Hotel',
        city: 'Kyiv',
        country: 'Ukraine',
    },
    {
        name: 'Paradise Hotel',
        city: 'Guadalupe',
        country: 'Mexico',
    },
    {
        name: 'Hotel Grindewald',
        city: 'Interlaken',
        country: 'Switzerland',
    },
    {
        name: 'The Andaman Resort',
        city: 'Port Dickson',
        country: 'Malaysia',
    },
    {
        name: 'Virgin Hotel',
        city: 'Chicago',
        country: 'USA',
    },
    {
        name: 'Grand Beach Resort',
        city: 'Dubai',
        country: 'United Arab Emirates',
    },
    {
        name: 'Shilla Stay',
        city: 'Seoul',
        country: 'South Korea',
    },
    {
        name: 'San Firenze Suites',
        city: 'Florence',
        country: 'Italy',
    },
    {
        name: 'The Andaman Resort',
        city: 'Port Dickson',
        country: 'Malaysia',
    },
    {
        name: 'Black Penny Villas',
        city: 'BTDC, Nuca Dua',
        country: 'Indonesia',
    },
    {
        name: 'Koko Hotel',
        city: 'Tokyo',
        country: 'Japan',
    },
    {
        name: 'Ramada Plaza',
        city: 'Istanbul',
        country: 'Turkey',
    },
    {
        name: 'Waikiki Resort Hotel',
        city: 'Hawaii',
        country: 'USA',
    },
    {
        name: 'Puro Hotel',
        city: 'Krakow',
        country: 'Poland',
    },
    {
        name: 'Asma Suites',
        city: 'Santorini',
        country: 'Greece',
    },
    {
        name: 'Cityden Apartments',
        city: 'Amsterdam',
        country: 'Netherlands',
    },
    {
        name: 'Mandarin Oriental',
        city: 'Miami',
        country: 'USA',
    },
    {
        name: 'Concept Terrace Hotel',
        city: 'Rome',
        country: 'Italy',
    },
    {
        name: 'Ponta Mar Hotel',
        city: 'Fortaleza',
        country: 'Brazil',
    },
    {
        name: 'Four Seasons Hotel',
        city: 'Sydney',
        country: 'Australia',
    },
    {
        name: 'Le Meridien',
        city: 'Nice',
        country: 'France',
    },
    {
        name: 'Apart Neptun',
        city: 'Gdansk',
        country: 'Poland',
    },
    {
        name: 'Lux Isla',
        city: 'Ibiza',
        country: 'Spain',
    },
    {
        name: 'Nox Hostel',
        city: 'London',
        country: 'UK',
    },
    {
        name: 'Leonardo Vienna',
        city: 'Vienna',
        country: 'Austria',
    },
    {
        name: 'Adagio Aparthotel',
        city: 'Edinburgh',
        country: 'UK',
    },
    {
        name: 'Steigenberger Hotel',
        city: 'Hamburg',
        country: 'Germany',
    },
];
console.log(searchHotels('B', hotels));

function getCity (hotels) {
    let object = {};
    for(let i=0; i<hotels.length; i++){
        let currentPair = hotels[i];
       if (currentPair.country in object) {
           object[currentPair.country].push(currentPair.city)
       } else {
           object[currentPair.country] = [currentPair.city];
       }
    }
   return object;
}
console.log(getCity(hotels));

function getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek) {
    if (dayOfWeek >= daysInWeek)
        throw Error(`${dayOfWeek} >= ${daysInWeek}`)

    let month = []
    let x = (daysInWeek - ((daysInMonth + dayOfWeek) % daysInWeek)) % daysInWeek // count of days to complete last week.
    for (let i = 0; i < daysInMonth + dayOfWeek + x; i++) {
        if (i % daysInWeek === 0) {
            month.push([])
        }
        let last = month.length - 1
        if (i < dayOfWeek) {
            month[last].push(daysInMonth - dayOfWeek + i + 1)
        } else if (i >= daysInMonth + dayOfWeek) {
            month[last].push(i % daysInMonth - dayOfWeek + 1)
        } else {
            month[last].push(i - dayOfWeek + 1);
        }
    }
    return month;
}
console.log(getCalendarMonth(30, 7, 4));

//lesson 7
const obj1 = {
    a: 'a',
    b: {
        a: 'a',
        b: 'b',
        c: {
            a: 1,
        },
    },
};
const obj2 = {
    b: {
        c: {
            a: 1,
        },
        b: 'b',
        a: 'a',
    },
    a: 'a',
};
const obj3 = {
    a: {
        c: {
            a: 'a',
        },
        b: 'b',
        a: 'a',
    },
    b: 'b',
};
const deepEqual = (object1, object2) => {
    let object1_names = Object.getOwnPropertyNames(object1); //obj1_names - Array of children of obj1
    let object2_names = Object.getOwnPropertyNames(object2);
    if (object1_names.length != object2_names.length)
        return false;
    for (let i = 0; i < object1_names.length; i++) {
        if (!(object1_names[i] in object2))
            return false;
        if (!(object2_names[i] in object1))
            return false;
        let object1_value = object1[object1_names[i]];
        let object2_value = object2[object1_names[i]];
        if ((typeof object1_value) != (typeof object2_value))
            return false;
        if (object1_value instanceof Object) {
            if (!deepEqual(object1_value, object2_value))
                return false;
        } else if (object1_value !== object2_value) return false;
        object1_value = object1[object2_names[i]];
        object2_value = object2[object2_names[i]];
        if ((typeof object1_value) != (typeof object2_value))
            return false;
        if (object1_value instanceof Object) {
            if (!deepEqual(object1_value, object2_value))
                return false;
        } else if (object1_value !== object2_value)
            return false;
    }
    return true;
}
console.log(deepEqual(obj1,obj2));
console.log(deepEqual(obj1,obj3));

function getCalendarMonth(daysInMonth, daysInWeek, dayOfWeek, checkInDate, checkOutDate) {
    if (dayOfWeek >= daysInWeek)
        throw Error(`${dayOfWeek} >= ${daysInWeek}`)
    if (checkInDate > daysInMonth || checkOutDate > daysInMonth)
        throw Error('Check in range is invalid')
    if (checkOutDate < checkInDate)
        throw Error(`${checkOutDate} < ${checkInDate}`)

    let month = []
    let x = (daysInWeek - ((daysInMonth + dayOfWeek) % daysInWeek)) % daysInWeek // count of days to complete last week.
    for (let i = 0; i < daysInMonth + dayOfWeek + x; i++) {
        if (i % daysInWeek === 0) {
            month.push([])
        }
        let last = month.length - 1
        if (i < dayOfWeek) {
            //get last element in array
            month[last].push({
                dayOfMonth: daysInMonth - dayOfWeek + i + 1,
                notCurrentMonth: true,
                selectedDay: false,

            })
        } else if (i >= daysInMonth + dayOfWeek) {
            month[last].push({
                dayOfMonth: i % daysInMonth - dayOfWeek + 1,
                notCurrentMonth: true,
                selectedDay: false,
            })
        } else {
            let date = i - dayOfWeek + 1;
            month[last].push({
                dayOfMonth: date,
                notCurrentMonth: false,
                selectedDay: (date >= checkInDate && date <= checkOutDate),
            });
        }
    }
    return month;
}
class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;

    }
    get fullName () {
        return `${this.firstName} ${this.lastName}`;
    }

}

class Student extends User {
    constructor(firstName, lastName, admissionYear, courseName) {
        super(firstName, lastName);
        this.admissionYear = admissionYear;
        this.courseName = courseName;
    }
    get course () {

        let currentYear = new Date().getFullYear();
        return currentYear - this.admissionYear;
    }
}

class Students {
    constructor(students){
        this.students = students;
    }
}
Students.prototype.getInfo = function (){
    let sorted = this.students.sort(function (a,b) {
        return a.course - b.course;
    });

    return sorted.map(function (a) {
        return `${a.fullName} - ${a.courseName}, ${a.course} курс`;
    })

}

const students = new Students([
    new Student('Ivan', 'Petrov', 1993, 'Java'),
    new Student('Lolita', 'Malinovskaya', 768, 'C++'),
    new Student('Matvei', 'Alekseev', 2001, 'Python'),

]);
console.log(students.getInfo());

//lesson-9

const createColor = () => {
    return {
        data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
        i: 0,
        [Symbol.iterator]() {
            return this;
        },
        next() {
            if (this.i >= this.data.length){
                this.i = 0;
            }
            return {
                done: false,
                value: this.data[this.i++],
            }
        }
    }
}
const colorIterators = {};
function onClick(element) {
    const id = element.id;
    if(colorIterators[id] === undefined) {
        colorIterators[id] = createColor();
    }
    element.style.backgroundColor = colorIterators[id].next().value;
}*/
//lesson-10 DOM Используя верстку из первого модуля, сделайте отображение контентв блока "Homes guests loves" из массива.
/*
const data = [
    {
        name: 'Hotel Leopold',
        city: 'Saint Petersburg',
        country: 'Russia',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
    },
    {
        name: 'Apartment Sunshine',
        city: 'Santa  Cruz de Tenerife',
        country: 'Spain',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
    },
    {
        name: 'Villa Kunerad',
        city: 'Vysokie Tatry',
        country: 'Slowakia',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
    },
    {
        name: 'Hostel Friendship',
        city: 'Berlin',
        country: 'Germany',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
    },
    {
        name: 'Radisson Blu Hotel',
        city: 'Kyiv',
        country: 'Ukraine',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
    },
    {
        name: 'Paradise Hotel',
        city: 'Guadalupe',
        country: 'Mexico',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
    },
    {
        name: 'Hotel Grindewald',
        city: 'Interlaken',
        country: 'Switzerland',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
    },
    {
        name: 'The Andaman Resort',
        city: 'Port Dickson',
        country: 'Malaysia',
        imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
    },
];

const hotelsName = document.querySelector('.hotels_name_container')
let imgStart = 0;
let imgEnd = 4;
let imgCount = 4;
function createBlock () {
   hotelsName.innerHTML = ``;
    for (let i = imgStart; i < imgEnd ; i++) {
        hotelsName.innerHTML += `
        <div class="hotels_card">
        <img src="${data[i].imageUrl}" class="images"> 
            <p class="homes_guests_loves_main_name_hotel"> ${data[i].name} </p> 
            <p class="homes_guests_loves_main_name_place"> ${data[i].city}, ${data[i].country} </p>
        </div>
        `;
    }
}
createBlock();
const spinnerPosition = document.querySelector('.arrow_position_right');
spinnerPosition.addEventListener('click', evt => (spinner()));
const spinner = () => {
    if(imgEnd >= data.length) {
       imgStart = 0;
       imgEnd = imgCount;
    } else {
        imgStart = imgEnd;
        imgEnd += imgCount;
    } if (imgEnd > data.length)
        imgEnd = data.length;
    createBlock();
};
*/

/*
lesson 12 перенести
Используя верстку из первого модуля,
    получите и отобразите контент блока "Homes guests loves" на основе данных,
    полученных с помощью fetch по url https://fe-student-api.herokuapp.com/api/hotels/popular.

*/
/*
const spinnerPosition = document.querySelector('.arrow_position_right');
const hotelsName = document.querySelector('.hotels_name_container');

let imgStart = 0;
let imgEnd = 4;
let imgCount = 4;
let fetchedData = [];

 fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
    .then(response => response.json())
    .then(data => createBlock(data))
    .catch(err => {
        console.log('Fetch Error :-S', err);
    });
const spinner = (data) => {
    if(imgEnd >= data.length) {
        imgStart = 0;
        imgEnd = imgCount;
    } else {
        imgStart = imgEnd;
        imgEnd += imgCount;
    } if (imgEnd > data.length)
        imgEnd = data.length;
        createBlock(data);
};

function createBlock (data) {
    fetchedData = data;
    hotelsName.innerHTML = ``;
    for (let i = imgStart; i < imgEnd ; i++) {
        hotelsName.innerHTML += `
        <div class="hotels_card">
            <img src="${data[i].imageUrl}" class="images"> 
            <p class="homes_guests_loves_main_name_hotel"> ${data[i].name} </p> 
            <p class="homes_guests_loves_main_name_place"> ${data[i].city}, ${data[i].country} </p>
        </div>
        `;
    }
}
spinnerPosition.addEventListener('click', () => (spinner(fetchedData)));
*/
/*lesson-13
Сократите количество запросов к серверу. Для этого вам нужно:
  перед выполнением запроса проверить, есть ли у вас уже данные в sessionStorage, которые хотите получить;
если нет, то необходимо выполнить AJAX-запрос и полученные данные сохранить в sessionStorage;
если есть, то использовать данные из sessionStorage и не выполнять запрос к серверу для получения этих данных.*/
const spinnerPosition = document.querySelector('.arrow_position_right');
const hotelsName = document.querySelector('.hotels_name_container');

let imgStart = 0;
let imgEnd = 4;
let imgCount = 4;
let fetchedData = [];

if (sessionStorage.getItem('data' ) == null) {
    fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
        .then(response => response.json())
        .then(data => {
            sessionStorage.setItem('data', JSON.stringify(data));
            createBlock(data)
        })
        .catch(err => {
            console.log('Fetch Error :-S', err);
        });
} else {
    createBlock(JSON.parse(sessionStorage.getItem('data')));
}

const spinner = (data) => {
    if(imgEnd >= data.length) {
        imgStart = 0;
        imgEnd = imgCount;
    } else {
        imgStart = imgEnd;
        imgEnd += imgCount;
    } if (imgEnd > data.length)
        imgEnd = data.length;
    createBlock(data);
};

function createBlock (data) {
    fetchedData = data;
    hotelsName.innerHTML = ``;
    for (let i = imgStart; i < imgEnd ; i++) {
        hotelsName.innerHTML += `
        <div class="hotels_card">
            <img src="${data[i].imageUrl}" class="images"> 
            <p class="homes_guests_loves_main_name_hotel"> ${data[i].name} </p> 
            <p class="homes_guests_loves_main_name_place"> ${data[i].city}, ${data[i].country} </p>
        </div>
        `;
    }
}
spinnerPosition.addEventListener('click', evt => (spinner(fetchedData)));


