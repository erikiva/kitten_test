$( document ).ready(function() {
    $( ".kittens" ).delegate( ".kitten", "click", increaseClicks);


    function displayClicks(num, element){
      element.text(num);
    }

    function increaseClicks(){
      var clicksElement = $(this).siblings('.clicks');
      var clicks = parseInt(clicksElement.text()) +1;
      displayClicks(clicks, clicksElement);

    }
});
