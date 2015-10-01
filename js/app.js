$( document ).ready(function() {
    $( ".kittens" ).delegate( "h3", "click", displayCat);

    $( ".cat-display" ).delegate( "img", "click", increaseClicks);

    function displayCat(){
      var element = $(this).parent();
      var display = $('.cat-display');
      var cat = '<h3>' + element.children('h3').text()+ '</h3>'+
          '<img src="img/'+ element.data('img') +'.jpg" alt="Cute kitten" class="kitten">'+
          '<div class="clicks">'+ element.children('.clicks').text() + '</div>'
      display.html(cat);
      display.attr('id', element.data('id')) ;

    }

    function increaseClicks(){
      var display = $(this).parent();
      var id = display.attr('id');
      var clicksElement = $(".kittens").find("[data-id='" + id + "']");
      var clicks = parseInt(clicksElement.data('clicks')) +1;
      clicksElement.data('clicks', clicks);
      display.children('.clicks').text(clicks);

    }
});
