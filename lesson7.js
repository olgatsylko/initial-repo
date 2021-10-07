// поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1]
let array1 = [1,2,3,4,5,6];
let array2 = array1.reverse();
console.log(array2);

// сортировка массива по возрастанию/убыванию
let array3 = array2.sort();
console.log(array3);
let array4 = array1.sort().reverse();
console.log(array4);

// найти максимальное значение числа в массиве ([3,67,15...])
let array5 = [3,67,15,202];

function compareValues(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
let temp = array5.sort(compareValues);
console.log('Way 1: Max value is ' + temp[temp.length-1]);

//another way to get Max value
let arrayMax = Math.max(...array5);
console.log('Way 2: Max value is ' + arrayMax);

// записать в массив ряд фибаначи начиная с N члена с длинной массива M
let arr = [];
let n = 5; // индекс с которого заполн нов масс
let m = 8; // длинна нов масс
let fib = m + n;

arr[0] = 0;
arr[1] = 1;

for(let i = 2; i < fib; i++ ){
    arr[i] = arr[i-1] + arr[i-2];
}
let targetArr = arr.slice([n], [fib])
console.log(targetArr);

// удалить из массива все повторяющиеся элементы 
let array7 = [5, 6, 5, 7, 8, 7, 7, 8, 8];
function getUnique(value, index, array) {
    return array.indexOf(value) === index;
}
let arUnique = array7.filter(getUnique);
console.log(arUnique);

// даны 2 4-хзначных числа с неповторяющимися цифрами, надо определить сколько цифр в этих числах совпадают по значению и позиции и сколько только по значению 
//(3487 и 3794) 

let str1 = '3487';
let str2 = '3794';

let a = str1.split('');
let b = str2.split('');
let match = 0;
let exectMatch = 0;

a.forEach(function(element, index){
    if (b.includes(element)) {
        match++;
    }
    if (element === b[index]){
        exectMatch++;
    }
})
console.log('Match by value - '+ match);
console.log('Full Match - '+ exectMatch);
console.log('Match by value excluding cases(s) with Full Match - '+ (match - exectMatch));

