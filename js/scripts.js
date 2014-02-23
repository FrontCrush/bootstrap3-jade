(function($) {



$(document).on('ready', function() {
  header_class();
});

$(document).on('scroll', function() {
  header_class();
});



function header_class() {
  var header = $('#main-header');
  var distancia_limite = 100;

  if (!$('.ltie9').length) {
    var distancia_scroll = $(document).scrollTop();
  } else {
    var distancia_scroll = $('html, body').scrollTop();
  }

  if (distancia_scroll > distancia_limite) {
    header.addClass('pegajoso');
  } else {
    header.removeClass('pegajoso');
  }

}




}(jQuery));

