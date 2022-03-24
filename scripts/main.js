/**
 * js doc1
 */

// js doc2


let helloMsg1 = 'Hello ~~~~~~'
let myHeading1 = document.querySelector('h1');

if (100 === 100) {
    myHeading1.textContent = "Hello???!!! \nTrue.\n"
    myHeading1.textContent += helloMsg1;
}
else {
    myHeading1.textContent = 'Hello???!!! False.'
}


const btn1 = document.getElementById('btn1')
btn1.addEventListener('click', updateBtn1)

function updateBtn1() {
    let strHi = 'Hi';
    let strBye = 'Bye';

    if(btn1.textContent === strHi) {
        btn1.textContent = strBye
        alert(addString(strBye, 'aaaaa'))
    }
    else {
        btn1.textContent = strHi
        alert(addString(strHi, 'bbbbb'))
    }
}

const string = 'The revolution will not be televised.';
console.log(string);

function addString(str1, str2) {
    let retStr = '';
    retStr = str1 + str2;
    return retStr;
}

/*
document.querySelector('html').onclick = function() {
    alert('Oops')
}
*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
        myImage.setAttribute ('src','images/star.png');
    } else {
        myImage.setAttribute ('src','images/firefox-icon.png');
    }
}


let myButton = document.getElementById('btn3');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
