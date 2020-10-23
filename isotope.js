$( document ).ready(function() {

    var $container = $('#graphics').isotope({
      itemSelector : '.item',
      isFitWidth: true
    });
  
    $('#filters button').click(function(){
        $('#filters .current').removeClass('current');
        $(this).addClass('current');
    });

    $(window).smartresize(function(){
      $container.isotope({
        columnWidth: '.col-sm-3'
      });
    });
    
      // filter items on button click
    $('#filters').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $container.isotope({ filter: filterValue });
    });
  });
  
  
  