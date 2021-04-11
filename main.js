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
test--; //11
console.log(test);
test = new Boolean(test); //false
console.log(test);
let arr = [2,3,5,8];
let answer = 1;
for (let i=0; i<arr.length; i++) {
    answer = answer * arr[i];
}
console.log(answer);
let arr2 = [2,5,8,15,0,6,20,3];
for (let i=0; i<arr2.length; i++) {
    if (arr2[i] >= 5 && arr2[i] <= 10) {
        console.log(arr2[i]);
    }
}
let arr3 = [2,5,8,15,0,6,20,3];
for (let i=0; i<arr3.length; i++) {
    if (arr3[i] % 2 == 0) {
        console.log(arr3[i]);
    }
}
