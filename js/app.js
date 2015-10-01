$( document ).ready(function() {
    var clicks = 0;
    displayClicks();
    function displayClicks(){
      $('#clicks').text(clicks);
    }

    $('#kitten').on('click', increaseClicks);

    function increaseClicks(){
      console.log('clicked');
      clicks += 1;
      displayClicks();
    }
});
