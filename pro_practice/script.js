/*
  Write code to make the number on the DOM countdown each second.
  Only one number should be displayed on the DOM at a time.

  HINT: look into javascript's setInterval() function.


  BONUS 1: Add a button for the user to reset the timer.
  BONUS 2: Make something cool happen using a jQuery animation when the timer gets to zero.
*/

$(document).ready(function(){

var counter = $('.count').text();

// function timer (){
  setInterval(function(){
    counter--;
    if (counter<1){
      $('.count').text(0);
      $('div').animate({
        fontSize: '200px',
      }, "slow");
      clearInterval();
    } else {
      $('.count').text(counter);
    }
  }, 1000);
// }


  $('#button').on('click', function(){
    $('div').animate({
      fontSize: '78px',
    }, "slow");
    counter=11;
  });

});  //end document ready
