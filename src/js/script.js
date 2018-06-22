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

});
