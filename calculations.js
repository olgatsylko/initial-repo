let myStr = '100';
let myNumb = 2;
let myBool = true;

console.log('Addition');
console.log(+myStr+myNumb);
console.log(+myStr+myBool);
console.log(myNumb+myBool);
console.log('Multiplication');
console.log(myStr*myNumb);
console.log(myStr*myBool);
console.log(myNumb*myBool);
console.log('Devision');
console.log(myStr/myNumb);
console.log(myStr/myBool);
console.log(myNumb/myBool);
console.log('Conversion');
console.log(parseInt(myStr,10));
console.log(parseInt(myStr+'abc', 10));
console.log(parseFloat("100.05",10));
console.log(Number(myStr));
console.log(Number(myBool));
console.log(myNumb.toString(10));
console.log(String(myNumb));
console.log(String(myBool));
console.log(Boolean(0));
console.log(Boolean(!!''));
console.log(Boolean("0"));
console.log(!!"0");


