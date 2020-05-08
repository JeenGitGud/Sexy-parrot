let sexyParrot = 'Hot AF';
if(sexyParrot === 'Hot AF') {
  alert('Yay, Sexy Parrot!');    
} else {
  alert('Awwww, I wanna cuddle with it');    
}

const myBody = document.querySelector('h2');
myBody.textContent = 'Sexy mothefucken parrot!';

let myHTML = document.querySelector('h3');
myHTML.onclick = function() {
    alert('Ouch! Stop poking me, bitch!');
}

document.querySelector('li').onclick = function() {
    alert('Thats right!')
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/shutterstock_1460930789_1600x.jpg') {
      myImage.setAttribute ('src','images/parrot-2.jpg');
    } else {
      myImage.setAttribute ('src','images/shutterstock_1460930789_1600x.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name, or else');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'The one sexy parrot, ' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'The one sexy parrot, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
  function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
  }
