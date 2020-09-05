const swars = ["sa", "re", "ga", "ma", "pa", "dha", "ni", "ma\u030D", "re", "ga", "dha", "ni"]

function buttonClick() {
    var [firstSwar, secondSwar] = randomUnique(0, 12);

    swarString = firstSwar > 7 ? "<u>" + swars[firstSwar] + "</u>" : swars[firstSwar];
    document.getElementById('first-swar').innerHTML = swarString;

    swarString = secondSwar > 7 ? "<u>" + swars[secondSwar] + "</u>" : swars[secondSwar];
    document.getElementById('second-swar').innerHTML = swarString;
}

function randomUnique(min, max) {
    var first = Math.floor(Math.random() * (max - min) + min);
    var second = Math.floor(Math.random() * (max - min) + min);
    while (second == first) {
        second = Math.floor(Math.random() * (max - min) + min);
    }

    return [first, second];
}

buttonClick();