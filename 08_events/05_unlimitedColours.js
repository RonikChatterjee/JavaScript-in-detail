// genarating random colours
const randomcolour = function() {
    const hex = '0123456789ABCDEF';
    let colour = '#';
    for (let i = 0; i < 6; i++) {
        colour += hex[Math.floor(Math.random() * 16)];
    }
    return colour;
};
// console.log(Math.random().toString(16).slice(2, 8));
// console.log(Math.random().toString(16).substr(-6));

let intervalId;

// startChangingColour()
const startChangingColour = () => {
    if (!intervalId) {
        intervalId = setInterval(changeByColour, 500);
    } else {
        alert('Already changing colours');
    }
    function changeByColour () {
        document.body.style.backgroundColor = randomcolour();
    }
};

// stopChangingColour()
const stopChangingColour = () => {
    clearInterval(intervalId);
    intervalId = null;
};

// resetColour()
const resetColour = () => {
    if (intervalId === null) {
        document.body.style.backgroundColor = '#212121';
    } else {
        clearInterval(intervalId);
        intervalId = null;
        document.body.style.backgroundColor = '#212121'
    }
}

const start = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const reset = document.querySelector('#reset');

start.addEventListener('click', function() {
    startChangingColour();
});

stopBtn.addEventListener('click', function() {
    stopChangingColour();
});

reset.addEventListener('click', function() {
    resetColour();
});