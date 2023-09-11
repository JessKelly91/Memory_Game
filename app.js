const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!


// we need to track the divs somehow - dataset?
// setAttribute data-location?
// something with the shuffledColors array?

let colorsInPlay = [];

function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  // console.log("you just clicked", event.target);

  

  event.target.style.backgroundColor = event.target.className;

  colorsInPlay.push(event.target.className);

  if(colorsInPlay.length === 2){
    if(colorsInPlay[0] === colorsInPlay[1]){
      colorsInPlay = [];
    }
    else if (colorsInPlay[0] !== colorsInPlay[1]){
      setTimeout(function(){
        event.target.style.backgroundColor = "white";
      }, 1000);
      colorsInPlay = [];
      //first flipped card to white
      // data-location of cardsInPlay[0] to white....
    }
  }

}

// when the DOM loads
createDivsForColors(shuffledColors);
