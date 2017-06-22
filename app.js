'use strict';

var randomIndex1;
var randomIndex2;
var randomIndex3;
var surveyLength = 0;

var imgArray = [];
// var imgNameArray = [];
// var pathArray = [];
// var arrayOfThree = [];

// var createButtomEl = document.createElement('button');
var subBanners = document.getElementById('subBanners');
var img1 = document.getElementById('img1');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');

function ImgMaker(name, path) {
  this.path = path;
  this.name = name;
  this.timesAppeared = 0;
  this.timesClicked = 0;
  imgArray.push(this);
  // imgNameArray.push(this.name);
}

// for (var i = 0; i < imgArray.length; i++) {
//   imageNameArray.push(imageArray[i].name);
// }

function createCatalog() {
  new ImgMaker('bag', 'img/bag.jpg');
  new ImgMaker('banana', 'img/banana.jpg');
  new ImgMaker('bathroom', 'img/bathroom.jpg');
  new ImgMaker('boots', 'img/boots.jpg');
  new ImgMaker('breakfast', 'img/breakfast.jpg');
  new ImgMaker('bubblegum', 'img/bubblegum.jpg');
  new ImgMaker('chair', 'img/chair.jpg');
  new ImgMaker('cthulhu', 'img/cthulhu.jpg');
  new ImgMaker('dog-duck', 'img/dog-duck.jpg');
  new ImgMaker('dragon', 'img/dragon.jpg');
  new ImgMaker('pen', 'img/pen.jpg');
  new ImgMaker('pet-sweep', 'img/pet-sweep.jpg');
  new ImgMaker('scissors', 'img/scissors.jpg');
  new ImgMaker('shark', 'img/shark.jpg');
  new ImgMaker('sweep', 'img/sweep.png');
  new ImgMaker('tauntaun', 'img/tauntaun.jpg');
  new ImgMaker('unicorn', 'img/unicorn.jpg');
  new ImgMaker('usb', 'img/usb.gif');
  new ImgMaker('water-can', 'img/water-can.jpg');
  new ImgMaker('wine-glass', 'img/wine-glass.jpg');
}

function randomIndex() {
  randomIndex1 = Math.floor(Math.random() * imgArray.length);
  randomIndex2 = Math.floor(Math.random() * imgArray.length);
  randomIndex3 = Math.floor(Math.random() * imgArray.length);
}

function surveyEnd() {
  // createButtonEl.textContent = 'View results';
  // subBanners.appendChild(createButtonEl);
  subBanners.removeEventListener('click', handleClick);
}

function randomPic() {
  if (surveyLength > 24) {
    surveyEnd();
    sPush();
  }
  var lastIndex = [];
  lastIndex.push(randomIndex1);
  lastIndex.push(randomIndex2);
  lastIndex.push(randomIndex3);
  randomIndex();
  while (randomIndex1 === lastIndex[0] || randomIndex1 === lastIndex[1] || randomIndex1 === lastIndex[2] || randomIndex2 === lastIndex[0] || randomIndex2 === lastIndex[1] || randomIndex2 === lastIndex[2] || randomIndex3 === lastIndex[0] || randomIndex3 === lastIndex[1] || randomIndex3 === lastIndex[2] || randomIndex1 === randomIndex2 || randomIndex1 === randomIndex3 || randomIndex2 === randomIndex3) {
    randomIndex();
  }
  img1.src = imgArray[randomIndex1].path;
  img2.src = imgArray[randomIndex2].path;
  img3.src = imgArray[randomIndex3].path;
  imgArray[randomIndex1].timesAppeared += 1;
  imgArray[randomIndex2].timesAppeared += 1;
  imgArray[randomIndex3].timesAppeared += 1;
}

function pull() {
  var stringArray = localStorage.getItem('data');
  imgArray = JSON.parse(stringArray);
}

function handleClick(e) {
  // e.preventDefault();

  if (e.target.id === 'img1') {
    imgArray[randomIndex1].timesClicked += 1;
    sPush();
  } else if (e.target.id === 'img2') {
    imgArray[randomIndex2].timesClicked += 1;
    sPush();
  } else if (e.target.id === 'img3') {
    imgArray[randomIndex3].timesClicked += 1;
    sPush();
  } else {
    alert('Pick a product!');

  }
  surveyLength += 1;
  randomPic();
}

function sPush() {
  localStorage.setItem('data', JSON.stringify(imgArray));
}
function startUp () {
  if (localStorage.length === 0) {
    createCatalog();

  } else {
    pull();
  }
}

startUp();
sPush();

createCatalog();
randomIndex();
randomPic();

subBanners.addEventListener('click', handleClick);
