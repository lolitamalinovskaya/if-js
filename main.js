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
        if (i % daysInWeek == 0) {
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


// lesson-8
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






