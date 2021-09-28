let counter = 0;

for (let i = 0; i < 22; i++) {
  fridays13iYear(2000 + i);
}
console.log(counter);

function fridays13iYear(year){
    for (let month = 1; month <= 12; month++){
        let date = new Date (year, month, 13);
            if (date.getDay()==5){
                counter++;
            }
    }
    return counter;
}
