let resultOfFirst = 0;
let resultOfSecond = 0;

for (let i = 0; i<3; i++){
    let throw1 = Math.floor(Math.random()*6+1);
    let throw2 = Math.floor(Math.random()*6+1);
    resultOfFirst = resultOfFirst + throw1;
    resultOfSecond = resultOfSecond + throw2;
    console.log("The first gamer throws - " + throw1 + ", result - " +  resultOfFirst);
    console.log("The second gamer throws - " + throw2 + ", result - " +  resultOfSecond);
}

if (resultOfFirst > resultOfSecond ){
    console.log('The first gamer is the Winner!')
} else if (resultOfSecond > resultOfFirst){
    console.log('The second gamer is the Winner!')
} else if(resultOfFirst == resultOfSecond ) {
    console.log('Draw!')
}