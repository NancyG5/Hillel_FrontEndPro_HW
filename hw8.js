let myClock = setInterval(myTimer, 1000);

function myTimer() {
    let d = new Date();
    document.getElementById('clock').innerHTML = d.toLocaleTimeString();
}

function startB() {
    myClock = setInterval(myTimer, 1000);
}

function stopB() {
    clearInterval(myClock);
} 



