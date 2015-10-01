$( document ).ready(function() {
    $( ".kittens" ).delegate( ".kitten", "click", increaseClicks);


    function displayClicks(num, element){
      element.text(num);
    }

    function displayCat(element){
      console.log(element.children('h3').text(), element);
      var display = $('#cat-display');
      var cat = '<h3>' + element.children('h3').text()+ '</h3>'+
          '<img src="'+ element.children('img').attr('src') +'" alt="Cute kitten" class="kitten">'+
          '<div class="clicks">'+ element.children('.clicks').text() + '</div>'
      display.html(cat);

    }

    function increaseClicks(){
      var clicksElement = $(this).siblings('.clicks');
      var clicks = parseInt(clicksElement.text()) +1;
      displayClicks(clicks, clicksElement);
      displayCat($(this).parent());
    }
});
