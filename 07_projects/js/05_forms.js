// Selectors
const f_name = document.getElementById('fname');
const m_name = document.getElementById('mname');
const l_name = document.getElementById('lname');
const dob = document.getElementById('dob');
const genders = document.getElementsByName('gender');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const country_dropdown = document.getElementById('country');
const state_dropdown = document.getElementById('state');
const city_dropdown = document.getElementById('city');
const address = document.getElementById('address');
const zip = document.getElementById('zip');
const color = document.getElementById('favColor');
const pass = document.getElementById('pass');
const password = document.getElementById('password');
const c_password = document.getElementById('confirmPassword');
const form = document.getElementById('form');
const submitBtn = document.getElementById('submit');

// Constants
// const email_pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const email_pattern = new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$'); // done
const phone_pattern = new RegExp('^\\d{10}$'); // done
// const eightChar = new RegExp('(?=.*\\{8,})');
const lowercase = new RegExp('(?=.*[a-z])');
const uppercase = new RegExp('(?=.*[A-Z])');
const number = new RegExp('(?=.*[0-9])');
const specialChar = new RegExp('(?=.*[!@#\$%\^&\*])');

// Validations

function validateFirstName () {
    if (f_name.value.length > 0) {
        return true;
    } else {
        return false;
    }
}

function validateLastName () {
    if (l_name.value.length > 0) {
        return true;
    } else {
        return false;
    }
}

function validateDOB () {
    if (dob.value.length > 0) {
        return true;
    } else {
        return false;
    }
}

function validateGender () {
    for(const gender in genders) {
        if (gender.ckecked) {
            return true;
        }
    }
}

function validateEmail () {
    if (email_pattern.test(email.value)) {
        return true;
    } else {
        return false;
    }
}

function validatePhone () {
    if (phone_pattern.test(phone.value)) {
        return true;
    } else {
        return false;
    }
}

function validateCountry () {
    if (country_dropdown.value === 'India') {
        return true;
    } else {
        return false;
    }
}

function validate (index) {
    if (!(index.value === '')) {
        return true;
    } else {
        return false;
    }
} // state, city, address

function validateZipCode () {
    if (zip.value.length === 6) {
        return true;
    } else {
        return false;
    }
}

function validateColor () {
    if (!(color.value === '')) {
        return true;
    } else {
        return false;
    }
}

function validatePassword () {
    if (!(password.value.length >= 8 && lowercase.test(password.value) && uppercase.test(password.value) && number.test(password.value) && specialChar.test(password.value))) {
        return false;
    } else {
        return true;
    }
}

function validateConfirmPassword () {
    const parent = c_password.parentElement;
    if (!(password.value === c_password.value)) {
        return false;
    } else {
        return true;
    }
}

function finalCheck () {
    if (validateFirstName() && validateLastName() && validateDOB() && validateGender() && validateEmail() && validatePhone() && validateCountry() && validate(state_dropdown) && validate(city_dropdown) && validate(address) && validateZipCode() && validateColor() && validatePassword() && validateConfirmPassword()) {
        return true;
    } else {
        return false;
    }
}

function validateForm () {
    
    if (!(validateFirstName())) {
        const parent = f_name.parentElement;
        f_name.classList.add('error');
        parent.children[2].classList.remove('hidden');
    } else {
        f_name.classList.remove('error');
        parent.children[2].classList.add('hidden');
    }

    if (!(validateLastName())) {
        const parent = f_name.parentElement;
        l_name.classList.add('error');
        parent.children[2].classList.remove('hidden');
    } else {
        l_name.classList.remove('error');
        parent.children[2].classList.add('hidden');
    }

    if (!(validateDOB())) {
        const parent = dob.parentElement;
        dob.classList.add('error');
        parent.children[2].classList.remove('hidden');
    } else {
        dob.classList.remove('error');
        parent.children[2].classList.add('hidden');
    }

    if (!(validateGender())) {
        const parent = genders[0].parentElement;
        parent.children[6].classList.remove('hidden');
    } else {
        parent.children[6].classList.add('hidden');
    }

    if (!(validateEmail())) {
        const parent = email.parentElement;
        email.classList.remove('noError');
        email.classList.add('error');
        parent.children[2].classList.remove('hidden');
    } else {
        email.classList.remove('error');
        email.classList.add('noError');
        parent.children[2].classList.add('hidden');
    }

    if (!(validatePhone())) {
        const parent = phone.parentElement;
        phone.classList.remove('noError');
        phone.classList.add('error');
        parent.children[2].classList.remove('hidden');
    } else {
        phone.classList.remove('error');
        phone.classList.add('noError');
        parent.children[2].classList.add('hidden');
    }

    if (!(validateCountry())) {
        const parent = country_dropdown.parentElement;
        country_dropdown.classList.add('error');
        parent.children[2].classList.remove('hidden');
    } else {
        country_dropdown.classList.remove('error');
        parent.children[2].classList.add('hidden');
    }

    if (!(validate(state_dropdown))) {
        const parent = state_dropdown.parentElement;
        state_dropdown.classList.add('error');
        parent.children[2].classList.remove('hidden');
    } else {
        state_dropdown.classList.remove('error');
        parent.children[2].classList.add('hidden');
    }

    if (!(validate(city_dropdown))) {
        const parent = city_dropdown.parentElement;
        city_dropdown.classList.add('error');
        parent.children[2].classList.remove('hidden');
    } else {
        city_dropdown.classList.remove('error');
        parent.children[2].classList.add('hidden');
    }

    if (!(validate(address))) {
        const parent = address.parentElement;
        address.classList.add('error');
        parent.children[2].classList.remove('hidden');
    } else {
        address.classList.remove('error');
        parent.children[2].classList.add('hidden');
    }

    if (!(validateZipCode())) {
        const parent = zip.parentElement;
        zip.classList.remove('noError');
        zip.classList.add('error');
        parent.children[2].classList.remove('hidden');
    } else {
        zip.classList.remove('error');
        zip.classList.add('noError');
        parent.children[2].classList.add('hidden');
    }

    if (!(validateColor())) {
        const parent = color.parentElement;
        color.classList.add('error');
        parent.children[2].classList.remove('hidden');
    } else {
        color.classList.remove('error');
        parent.children[2].classList.add('hidden');
    }
    
    if (validatePassword()) {
        password.classList.remove('error');
        password.classList.add('noError');
        displayPasswordError();
    } else {
        password.classList.remove('noError');
        password.classList.add('error');
        displayPasswordError();
    }

    if (validateConfirmPassword()) {
        c_password.classList.remove('error');
        c_password.classList.add('noError');
        displayConfirmPasswordError();
    } else {
        c_password.classList.add('error');
        c_password.classList.remove('noError');
        displayConfirmPasswordError();
    }
}

// function

function getGenderValue () {
    for(const gender of genders) {
        if (gender.checked) {
            return gender.value;
        }
    }
}

function pushStates() {
    for(const state in citiesAndStates) {
        let option = document.createElement('option'); // can we use const here?
        option.value = state;
        option.text = state;
        state_dropdown.appendChild(option);
    };
}

function pushCity (state) {
    for(const city of citiesAndStates[state]) {
        let new_option = document.createElement('option');
        console.log(`2nd: ${city}`);
        new_option.value = city;
        new_option.text = city;
        city_dropdown.appendChild(new_option);
    };
};

function getColorValue () {
    return color.value;
}

function displayPasswordError () {

    const parent = password.parentElement;

    if (password.value.length < 8) {
        parent.children[2].classList.add('hidden');
    } else {
        parent.children[2].classList.remove('hidden');
    }
    
    if (lowercase.test(password.value)) {
        parent.children[3].classList.add('hidden');
    } else {
        parent.children[3].classList.remove('hidden');
    }
    
    if (uppercase.test(password.value)) {
        parent.children[4].classList.add('hidden');
    } else {
        parent.children[4].classList.remove('hidden');
    }
    
    if (number.test(password.value)) {
        parent.children[5].classList.add('hidden');
    } else {
        parent.children[5].classList.remove('hidden');
    }

    if (specialChar.test(password.value)) {
        parent.children[6].classList.add('hidden');
    } else {
        parent.children[6].classList.remove('hidden');
    }
}

function displayConfirmPasswordError () {
    const parent = c_password.parentElement;
    if (!(password.value === c_password.value)) {
        parent.lastElementChild.classList.remove('hidden');
        // return false;
    } else {
        parent.lastElementChild.classList.add('hidden');
        // return true;
    }
}

// Event Listeners

document.addEventListener('DOMContentLoaded', () => {
    state_dropdown.disabled = true;
    city_dropdown.disabled = true;
    // console.log(genders[0].parentNode);
});

email.addEventListener('input', () => {
    if (validateEmail()) {
        email.classList.remove('error');
        email.classList.add('noError');
        email.parentElement.children[2].classList.add('hidden');
        // console.log('Email validated'); 
    } else {
        email.classList.remove('noError');
        email.classList.add('error');
        email.parentElement.children[2].classList.remove('hidden');
        // console.log('Email not validated');
    }
});

phone.addEventListener('input', () => {
    if (validatePhone()) {
        phone.classList.remove('error');
        phone.classList.add('noError');
        phone.parentElement.children[2].classList.add('hidden');
        // console.log('Phone validated');
    } else {
        phone.classList.remove('noError');
        phone.classList.add('error');
        phone.parentElement.children[2].classList.remove('hidden');
        // console.log('Phone not validated');
    }
});

country_dropdown.addEventListener('input', () => {
    if (validateCountry()) {
        pushStates();
        state_dropdown.disabled = false;
    } else {
        state_dropdown.disabled = true;
    }
});

state_dropdown.addEventListener('input', () => {
    for(const state in citiesAndStates) {
        if(state === state_dropdown.value) {
            city_dropdown.disabled = false;
            pushCity(state);
            break;
        }
    }
});

zip.addEventListener('input', () => {
    if (validateZipCode()) {
        zip.classList.remove('error');
        zip.classList.add('noError');
        zip.parentElement.children[2].classList.add('hidden');
        // console.log('Zip validated');
    } else {
        zip.classList.remove('noError');
        zip.classList.add('error');
        zip.parentElement.children[2].classList.remove('hidden');
        // console.log('Zip not validated');
    }   
});

password.addEventListener('input', () => {
    if (validatePassword()) {
        password.classList.remove('error');
        password.classList.add('noError');
        displayPasswordError();
    } else {
        password.classList.remove('noError');
        password.classList.add('error');
        displayPasswordError();
    }
});

c_password.addEventListener('input', () => {
    if (validateConfirmPassword()) {
        c_password.classList.remove('error');
        c_password.classList.add('noError');
        displayConfirmPasswordError();
    } else {
        c_password.classList.add('error');
        c_password.classList.remove('noError');
        displayConfirmPasswordError();
    }
});

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (finalCheck()) {
        localStorage.setItem('First Name', f_name.value);
        localStorage.setItem('Middle Name', m_name.value);
        localStorage.setItem('Last Name', l_name.value);
        localStorage.setItem('Date of Birth', dob.value);
        localStorage.setItem('Gender', getGenderValue());
        localStorage.setItem('Email', email.value);
        localStorage.setItem('Phone', phone.value);
        localStorage.setItem('Country', country_dropdown.value);
        localStorage.setItem('State', state_dropdown.value);
        localStorage.setItem('City', city_dropdown.value);
        localStorage.setItem('Zip Code', zip.value);
        localStorage.setItem('Address', address.value);
        localStorage.setItem('Favorite Color', getColorValue());
        localStorage.setItem('Password', password.value);
        alert('Form submitted successfully');
    } else {
        alert('Form submission failed');
        validateForm();
    }
});