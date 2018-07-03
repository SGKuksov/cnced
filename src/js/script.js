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

  // $(".catalog__sidenav-title").click(function() {
  //   $(this).parent().find(".service__faq-text").slideToggle();
  //   $(this).parent().toggleClass("active");
  // });

  $(".sort__item").click(function() {
    if ( $(this).hasClass("active") && !$(this).hasClass("disabled")) {
      $(this).toggleClass("reverse");
    } else {
      $(".sort__item").removeClass("active");
      $(this).toggleClass("active");
    }
  });

  $(".features__item").mouseover(function() {
    $(".features__item").removeClass("active");
    $(this).addClass("active");
  });

  $(".chips__remove").click(function() {
    $(this).parent().remove();
  });

  $( "#slider-range" ).slider({
    // orientation: "vertical",
    // step: 15,
    range: true,
    min: 900,
    max: 850800,
    values: [ 10000, 250000 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( ui.values[ 0 ] );
      $( "#amount_1" ).val( ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) );
  $( "#amount_1" ).val( $( "#slider-range" ).slider( "values", 1 ) );

  // Изменение местоположения ползунка при вводиде данных в первый элемент input
  $("input#amount").change(function(){
    var value1=$("input#amount").val();
    var value2=$("input#amount_1").val();
      if(parseInt(value1) > parseInt(value2)){
      value1 = value2;
      $("input#amount").val(value1);
    }
    $("#slider-range").slider("values",0,value1);
  });

  // Изменение местоположения ползунка при вводиде данных в второй элемент input
  $("input#amount_1").change(function(){
    var value1=$("input#amount").val();
    var value2=$("input#amount_1").val();

    if(parseInt(value1) > parseInt(value2)){
      value2 = value1;
      $("input#amount_1").val(value2);
    }
    $("#slider-range").slider("values",1,value2);
  });

  // фильтрация ввода в поля
  jQuery('#amount, #amount_1').keypress(function(event){
    var key, keyChar;
    if(!event) var event = window.event;

    if (event.keyCode) key = event.keyCode;
    else if(event.which) key = event.which;

    if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
    keyChar=String.fromCharCode(key);

    if(!/\d/.test(keyChar))	return false;
  });

  var mySwiper = new Swiper ('.popular__card-list', {
    direction: 'horizontal',
    loop: true
  });

});
