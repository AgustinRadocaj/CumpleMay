var targetDate = new Date("2024-04-06T21:00:00");
var audio = document.getElementById("audio");
audio.volume = 0.1;

var countdown = setInterval(function() {
    var current = new Date().getTime();
    var restante = targetDate - current;

    var dias = Math.floor(restante / (1000 * 60 * 60 * 24));
    var horas = Math.floor((restante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((restante % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((restante % (1000 * 60)) / 1000);

    var timer = document.getElementById("countdown");
    timer.innerHTML = dias + " Dias " + horas + " Hs " + minutos + " Min " + segundos + " Seg";

    if(restante < 0){
        clearInterval(countdown);
        timer.innerHTML = "FELIZ CUMPLEAÑOS!"
    }
}, 1000)
