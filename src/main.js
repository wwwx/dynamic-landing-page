// Get DOM Element
const time = document.getElementById('time');
const screen = document.getElementById('screen');
const greet = document.getElementById('greet');
const name = document.getElementById('name');
const focusTitle = document.getElementById('focus-title');
const focus = document.getElementById('focus');

// Constants
const LANDING_PAGE_NAME = 'Landing-Page-Name';
const LANDING_PAGE_FOCUS = 'Landing-Page-Focus';

// Options
const showAmPm = true;

// Show Time
function showTime() {
    const today = new Date()
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    // Set Am or Pm
    const amPm = hour >= 12 ? 'pm' : 'am';

    // 12h Format
    hour = hour % 12 || 12;

    hour = addZero(hour);
    min = addZero(min);
    sec = addZero(sec);

    // Output Time
    time.innerHTML = `${hour}:${min}:${sec} ${showAmPm ? amPm.toUpperCase() : ''}`
    setTimeout(showTime, 1000)
}

// Add Zeros
function addZero(num) {
    return (parseInt(num) < 10 ? '0' : '') + num;
}

// Set Background and Greeting
function setBgGreet() {


    // const today = new Date(2021, 7, 24, 13, 34, 23);
    const today = new Date()
    const hour = today.getHours();
    if (hour < 12) {
        screen.style.backgroundImage = 'url(./images/morning-arindam-saha.jpg)';
        greet.textContent = 'Good Morning'
    } else if (hour < 18) {
        screen.style.backgroundImage = 'url(./images/afternoon-ines-iachelini.jpg)'
        greet.textContent = 'Good afternoon'
    } else {
        screen.style.backgroundImage = 'url(./images/evening-jonatan-pie.jpg)'
        greet.textContent = 'Good evening'
        greet.style.color = 'white'
        name.style.color = 'white'
        time.style.color = 'white'
        focusTitle.style.color = 'white'
        focus.style.color = 'white'
    }
}

// Get Name
function getName() {
    if (localStorage.getItem(LANDING_PAGE_NAME) === null) {
        name.textContent = '[Enter Name]'
    } else {
        name.textContent = localStorage.getItem(LANDING_PAGE_NAME)
    }
}

// Set Name
function setName(e) {
    if (e.type === 'keypress') {
        if (e.keyCode === 13) {
            localStorage.setItem(LANDING_PAGE_NAME, e.target.innerText);
            name.blur()
        }
    } else {
        localStorage.setItem(LANDING_PAGE_NAME, e.target.innerText);
    }
}


// Get Focus
function getFocus() {
    if (localStorage.getItem(LANDING_PAGE_FOCUS) === null) {
        focus.textContent = '[Enter Focus]'
    } else {
        focus.textContent = localStorage.getItem(LANDING_PAGE_FOCUS)
    }
}

// Set Focus
function setFocus(e) {
    if (e.type === 'keypress') {
        if (e.keyCode === 13) {
            localStorage.setItem(LANDING_PAGE_FOCUS, e.target.innerText);
            focus.blur()
        }
    } else {
        localStorage.setItem(LANDING_PAGE_FOCUS, e.target.innerText);
    }
}

// Add Event Listener
name.addEventListener('keypress', setName)
name.addEventListener('blur', setName)
focus.addEventListener('keypress', setFocus)
focus.addEventListener('blur', setFocus)


// Run
showTime()
setBgGreet()
getName()
getFocus()
