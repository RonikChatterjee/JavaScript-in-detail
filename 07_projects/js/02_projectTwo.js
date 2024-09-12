// document.body.style.backgroundColor = 'lightblue';
const form = document.querySelector('#form');
// const button = document.querySelector('#submit');

form.addEventListener('submit', function(event){
    event.preventDefault(); // Prevents the form from submitting as we need to get the values from the form
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result');

    if (height === '' || height <= 0 || isNaN(height)){
        const addText = document.createTextNode(`Please enter a valid number (${height})`);
        result.textContent = ''; // Clearing the previous text if any.
        result.appendChild(addText);
        document.body.appendChild(result);
        // result.innerHTML = `Please enter a valid number (${height})`;
    } else if ( weight === '' || weight <= 0 || isNaN(weight)){
        const addText = document.createTextNode(`Please enter a valid number ${weight})`);
        result.textContent = ''; // Clearing the previous text if any.
        result.appendChild(addText);
        document.body.appendChild(result);
        // result.innerHTML = `Please enter a valid number ${weight})`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        const addText = document.createTextNode(`Your BMI is ${bmi}`);
        result.textContent = ''; // Clearing the previous text if any.
        result.appendChild(addText);
        document.body.appendChild(result);
        // result.innerHTML = `Your BMI is ${bmi}`;
    }
});