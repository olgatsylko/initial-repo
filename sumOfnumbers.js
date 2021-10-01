let rest = 0;
const m = 100; // число для которого находим слагаемые
let n = 4; //заданное количество слагаемых
let number = 100; // тоже что и m, но в процессе цикла будет уменьшатся на следующее найденное слагаемое

for (let i = 0; i < (n-1); i++ ){
    let x = Math.floor(Math.random() * number) 
    console.log('Найденное слагаемое ' + ' - '+ x);
    number-= x;
    rest = m - number; //остаток от 100 после нахождения нового слагаемого
}
console.log("Найденное слагаемое " + ' - ' + (m - rest)); //последнее слагаемое


let rest2 = 0.00;
const m2 = 100.00;
let n2 = 4;
let number2 = 100.00;

for (let i = 0; i < (n2-1); i++ ){
    let x2 = (Math.random() * number2).toFixed(2);
    console.log('Найденное слагаемое ' + ' - '+ x2);
    number2-=x2;
    rest2 = (m2 - number2);
}
console.log("Найденное слагаемое " + ' - ' + (m2 - rest2).toFixed(2));