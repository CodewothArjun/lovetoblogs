

let dest = new Date("nov 19,2028 17:00:00").getTime();
let time = setInterval(function () {
    let now = new Date().getTime();
    let diff = dest - now;
    console.log(diff)

    // days
    let days = Math.floor(diff / (1000 * 24 * 60 * 60));

    // hours
    let hours = Math.floor((diff % (1000 * 24 * 60 * 60)) / (1000 * 60 * 60));

    // minutes
    let min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    // seconds
    let sec = Math.floor((diff / 1000)) % 60
    console.log(sec)

    document.getElementById("timer").innerHTML = days + "days, " + hours + "hrs: " + min + "min: " + sec + "sec"

}, 1000);

