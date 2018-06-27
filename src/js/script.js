svg4everybody(); // иницализация полифила для IE

$(document).ready(function() {

  $(".promo__card-point").click(function() {
    $(".promo__card-baloon").slideToggle();
    $(".promo__card-baloon").slideToggle();
  });

  $(".service__faq-title").click(function() {
    $(this).parent().find(".service__faq-text").slideToggle();
    $(this).parent().toggleClass("active");
  });

  $(".features__item").mouseover(function() {
    $(".features__item").removeClass("active");
    $(this).addClass("active");
  });

  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 500,
    values: [ 75, 300 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
    " - $" + $( "#slider-range" ).slider( "values", 1 ) );

});
