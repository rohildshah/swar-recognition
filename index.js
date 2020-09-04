const svars = ["sa", "re", "ga", "ma", "pa", "dha", "ni"]
const max = 0;
const min = 7;

function buttonClick() {
    document.getElementById('first-svar').innerHTML = svars[Math.floor(Math.random() * (max - min) + min)];
    document.getElementById('second-svar').innerHTML = svars[Math.floor(Math.random() * (max - min) + min)];
    // console.log(svars[Math.floor(Math.random() * (max - min) + min)]);
}