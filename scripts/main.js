var qs = document.querySelector.bind(document)

let myImage = qs('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/hinata.png') {
      myImage.setAttribute('src','images/team.png');
    }
	else if (mySrc === 'images/team.png') {
      myImage.setAttribute('src','images/hinata.png');
    }
}

let myButton = qs('button')
let myHeading = qs('h1')

myButton.onclick = function() {
	if (! localStorage.getItem('name')) {
		setUserName();
	}
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Haikyuu is cool, ' + myName;
}

function setUserName() {
	let myName = prompt('There is Virus!. Enter name to proceeds');
	localStorage.setItem('name', myName);
}
