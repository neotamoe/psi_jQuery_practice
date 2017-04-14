/*
  Write the code to make clicking on the 'change-highlight' button give a box on the DOM
  the 'highlight' class to turn the box red.
  Each time the 'change-highlight' button is clicked, it should give the next square
  the 'highlight' class.
  Only 1 box should be highlighted at a time.
  You will need to add to the highlightASquare function,
  you are also welcome to write more than the given functions.
*/
var numberOfSquares = 10;
var counter=1;  //global counter (used to assign each square a value)

$(document).ready(onReady);

//Function that runs when html is fully loaded:
function onReady(){
  //click listener to button:
  $('.change-highlight').on('click', highlightASquare);
  console.log(counter);
  //call to put starting squares on DOM
  appendSquaresToDom(numberOfSquares);
}


function highlightASquare(){
  //This variable stores an array of the elements with the 'square' class
  var arrayOfSquares = $('.square');
  //highlights first box, unhighlights last box (if needed)
  if (counter === 1) {
    $( ".square:nth-of-type(" + counter + ")").addClass('highlight');
    $( ".square:nth-of-type(" + (numberOfSquares) + ")").removeClass('highlight');
    counter++;
  //highlights subsequent boxes, unhighlights previous box
  } else if(counter<numberOfSquares){
    $( ".square:nth-of-type(" + counter + ")").addClass('highlight');
    $( ".square:nth-of-type(" + (counter-1) + ")").removeClass('highlight');
    counter++;
  //highlights last box, removes previous box, resets counter
  } else if (counter === numberOfSquares) {
    $( ".square:nth-of-type(" + counter + ")").addClass('highlight');
    $( ".square:nth-of-type(" + (counter-1) + ")").removeClass('highlight');
    counter=1;
  }
}

//You don't need to change this function:
function appendSquaresToDom(number){
  var squaresToAppend = "";
 //concatenate string of squares
  for(var i = 0; i < number; i++){
    squaresToAppend += "<div class='square'></div>";
  }
  //append string of html
  $(".container").append(squaresToAppend);
}
