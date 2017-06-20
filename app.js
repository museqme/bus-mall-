'use strict';

var imgArray = [];
var pathArray = [];
var arrayOfThree = [];

function imgMaker(name,path) {
  this.path = path;
  this.name = name;
  this. timesAppeared = 0;
  this. timesClicked = 0;
  imgArray.push(this);
  pathArray.push(this.path);
};

new imgMaker('bag', 'img/bag.jpg');
new imgMaker('banana', 'img/banana.jpg');
new imgMaker('bathroom', 'img/bathroom.jpg');
new imgMaker('boots', 'img/boots.jpg');
new imgMaker('breakfast', 'img/breakfast.jpg');
new imgMaker('bubblegum', 'img/bubblegum.jpg');
new imgMaker('bus', 'img/bus.jpg');
new imgMaker('chair', 'img/chair.jpg');
new imgMaker('cthulhu', 'img/cthulhu.jpg');
new imgMaker('dragon', 'img/dragon.jpg');
new imgMaker('pen', 'img/pen.jpg');
new imgMaker('pet-sweep', 'img/pet-sweep.jpg');
new imgMaker('scissors', 'img/scissors.jpg');
new imgMaker('shark', 'img/shark.jpg');
new imgMaker('sweep', 'img/sweep.jpg');
new imgMaker('tauntaun', 'img/tauntaun.jpg');
new imgMaker('unicorn', 'img/unicorn.jpg');
new imgMaker('usb', 'img/usb.jpg');
new imgMaker('water-can', 'img/water-can.jpg');
new imgMaker('wine-glass', 'img/wine-glass.jpg');

function randomPic() {
  var tempArray = [];
  for (var i = 0; i < 3; i++) {
    var randomNum = Math.floor(Math.random() * imgArray.length + 1);
    tempArray.push(imgArray [randomNum].path);
  }
  while( tempArray [0] === tempArray [1] || tempArray [1] === tempArray [2] || tempArray [2] === tempArray [3] || tempArray.length < 3) {
    console.log('dupe spotted');
  };
}
document.getElementById('img1').src = tempArray[0];
document.getElementById('img2').src = tempArray[1];
document.getElementById('img3').src = tempArray[2];

randomPic();
// while(right === center || right === left || center === left) {
//   console.log( 'dupe spotted' );
//   randomPic(); //call function to re-roll
// }

// Roll Pic 1
// Roll Pic 2
// while (1 === 2) {
//   console.log("dupe spotted")
//   re-roll
// }
// Pic 3
// while ( 1 === 3 ) ( 2 === 3 ) {
//   re-roll
// }
// container.addEventListeners('clicks', handleClick);

// function handleClick(event) {
//   console.log(event.target.id);
