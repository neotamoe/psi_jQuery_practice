/*
  Write code to make the number on the DOM countdown each second.
  Only one number should be displayed on the DOM at a time.

  HINT: look into javascript's setInterval() function.


  BONUS 1: Add a button for the user to reset the timer.
  BONUS 2: Make something cool happen using a jQuery animation when the timer gets to zero.
*/

$(document).ready(timer);


function timer (){
  var counter = $('.count').text();
  setInterval(function(){
    counter--;
    if (counter<1){
      $('.count').text(0);
      $('div').animate({
        fontSize: '200px',
      }, "slow");
      clearInterval(timer);
    } else {
      $('.count').text(counter);
    }
  }, 1000);
}

// function resetCounter(){
//   var counterResetValue=$('.count').text(10);
//   counter=counterResetValue;
// }


$('#button').on('click', clearInterval(timer));
