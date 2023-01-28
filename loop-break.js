for (var number = 1; number <= 20; number++) {

    if (number > 10) {
        break;
    }
    console.log(number);

}


var i = 0;
while (i <= 30) {

    if (i > 15) {
        continue;
    }

    console.log(i);
    i++

}

var numbers = [45, 89, 56, 32, 51, 25, 88, 41, 25, 8]
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 50) {
        continue;
    }
    console.log(number);
}
