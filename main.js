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
