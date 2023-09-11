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
    newDiv.setAttribute("data-revealed", "false")

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

// let colorsInPlay = [];
let activeTile = null;
let awaitingEndOfMove = false;

function handleCardClick(event) {

  let revealed = event.target.getAttribute("data-revealed");

  if(awaitingEndOfMove || revealed === "true" || event.target === activeTile){
    return;
  }

  event.target.style.backgroundColor = event.target.className;

  if(!activeTile){
    activeTile = event.target;
    return
  }

  if(activeTile){
    if(activeTile.className === event.target.className){
      activeTile.setAttribute("data-revealed", "true");
      event.target.setAttribute("data-revealed", "true");

      awaitingEndOfMove = false;
      activeTile = null;

      //update score here
      //if-else logic to see if game is complete

      return;
    }
  }


  awaitingEndOfMove = true;

  setTimeout(function(){
    event.target.style.backgroundColor = null;
    activeTile.style.backgroundColor = null;

    awaitingEndOfMove = false;
    activeTile = null;
  }, 1000);

  //removeEventListener when all tiles are flipped

}

// when the DOM loads
createDivsForColors(shuffledColors);
