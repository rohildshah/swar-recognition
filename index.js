const swars = [//lower
               "pa\u0323",
               "d\u0332h\u0332\u0323a\u0332",
               "dh\u0323a",
               "n\u0332i\u0332\u0323",
               "ni\u0323",
               //middle
               "sa",
               "r\u0332e\u0332",
               "re",
               "ga\u0332",
               "ga",
               "ma",
               "ma\u030D",
               "pa",
               "d\u0332h\u0332a\u0332",
               "dha",
               "n\u0332i\u0332",
               "ni",
               //upper
               "sa\u0307",
               "r\u0332e\u0332\u0307",
               "re\u0307",
               "ga\u0332\u0307",
               "ga\u0307",
               "ma\u0307",
               "m\u0307a\u030D",
               "pa\u0307"]

function screenClick() {
    numSwars = document.getElementsByClassName('active')[0].children[0].id;
    var randomSwars = randomUnique(0, 25, numSwars);

    for (let i = 0; i < 4; i++) {
        if (i < randomSwars.length) {
            document.getElementById("" + i + "-swar").style.display = "block";
            document.getElementById("" + i + "-swar").innerHTML = swars[randomSwars[i]];
        } else {
            document.getElementById("" + i + "-swar").style.display = "none";
            // console.log(document.getElementById("" + i + "-swar"))
        }
    }
    
}

function randomUnique(min, max, number) {
    let randoms = [];
    let random;
    while (number--) {
        random = Math.floor(Math.random() * (max - min) + min);
        if (randoms.length != 0) {
            while (randoms[randoms.length - 1] == random) {
                random = Math.floor(Math.random() * (max - min) + min);
            }
        }
        randoms.push(random);
    }
    return randoms;
}

screenClick();