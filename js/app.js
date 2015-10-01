$( document ).ready(function() {

    $( ".kittens" ).delegate( "h3", "click", display);
    $( ".cat-display" ).delegate( "img", "click", increaseClicks);
    $("#admin-area").delegate("button#cancel", "click", hideAdmin);
    $("#admin-area").delegate("form", "submit", saveData);


    function display(){
        var element = $(this).parent();
        displayCat(element);
    }

    function displayCat(element){
      var display = $('.cat-display');
      var cat = '<h3>' + element.children('h3').text()+ '</h3>'+
          '<img src="img/'+ element.data('img') +'.jpg" alt="Cute kitten" class="kitten">'+
          '<div class="clicks">'+ element.data('clicks') + '</div>'
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

    $('#show-admin').on('click', loadAdmin);

    function loadAdmin(){
      $('#admin-area').load('admin.html', loadFormData);
    }

    function loadFormData(){
        var cat_id = $('.cat-display').attr('id');
      if (!cat_id){
          cat_id = 1;
      }
      var selected_cat = $(".kittens").find("[data-id='" + cat_id + "']");
      $("#admin input[name='name']").val(selected_cat.children('h3').text());
      $("#admin input[name='clicks']").val(selected_cat.data('clicks'));
      $("#admin input[name='id']").val(cat_id);
    }

    function saveData(ev){
      ev.preventDefault();
      var selected_cat = $(".kittens").find("[data-id='" + $("#admin input[name='id']").val() + "']");
      selected_cat.data('clicks', $("#admin input[name='clicks']").val());
      selected_cat.children('h3').text($("#admin input[name='name']").val());
      displayCat(selected_cat);
      hideAdmin();
    }

    function hideAdmin(ev){
      if (ev){
        ev.preventDefault();
      }
      $('#admin-area').text("");
    }



});
