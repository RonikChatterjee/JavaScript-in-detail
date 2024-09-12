// const clock = document.querySelector('#clock');
const clock = document.getElementById('digital-clock');

setInterval(function() {
    const date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000); // 1000ms = 1s