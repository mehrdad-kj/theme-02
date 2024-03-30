const scriptTag = document.querySelector('script[type="application/json"]');
const countdownDataString = scriptTag.textContent.trim();
const countdownData = JSON.parse(countdownDataString);
const countDownDate = new Date(countdownData.countDownDate);

var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);



    document.getElementById("days").innerHTML =
        '<span>' + days + '</span>' + '<span>' + "days" + '</span>'

    document.getElementById("hours").innerHTML =
        '<span>' + hours + '</span>' + '<span>' + "hours" + '</span>'

    document.getElementById("minutes").innerHTML =
        '<span>' + minutes + '</span>' + '<span>' + "minutes" + '</span>'

    document.getElementById("seconds").innerHTML =
        '<span>' + seconds + '</span>' + '<span>' + "seconds" + '</span>'


    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "EXPIRED";
    }
}, 1000);


//handling loading 
document.getElementById('main--container').style.display = 'none';
document.getElementById('loading--container').style.display = 'flex';

setTimeout(function () {
    // Hide loading indicator after 2 seconds
    document.getElementById('loading--container').style.display = "none";

    // Show main content after 2 seconds
    document.getElementById('main--container').style.display = "block";
}, 2000); 
