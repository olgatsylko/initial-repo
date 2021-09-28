let resultOfFirst = 0;
let resultOfSecond = 0;

for (let i = 0; i<3; i++){
    resultOfFirst = resultOfFirst + Math.floor(Math.random()*6+1)
    console.log(resultOfFirst);
}
for (let n = 0; n<3; n++){
    resultOfSecond = resultOfSecond + Math.floor(Math.random()*6+1)
    console.log(resultOfSecond);
}
if (resultOfFirst > resultOfSecond ){
    console.log('The first gamer is the Winner!')
} else if (resultOfSecond > resultOfFirst){
    console.log('The second gamer is the Winner!')
} else if(resultOfFirst == resultOfSecond ) {
    console.log('Draw!')
}