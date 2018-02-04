$(document).ready(function() {
  $("#js_burger").click(function(){
    $("#js_menu").addClass("menu--visible");
  });

  $("#js_menu").click(function(){
    $("#js_menu").removeClass("menu--visible");
  });

  $(".js_menu_item").click(function(){
    $(".js_menu_item").find(".menu_item-effect").removeClass("menu_item-effect--active");
    $(this).find(".menu_item-effect").addClass("menu_item-effect--active");
    let currentId = $(this)[0].id.split("js_")[1];
    $("html, body").animate({
      scrollTop: ($("#"+currentId).offset().top - $("#js_headerContainer").outerHeight() - $("#js_sectionsContainer").css('padding-top').replace("px", ""))
    }, 600 );
  });

  //------------------------------------------- ANIMATION INTRO -------------------------------------------//
  var canvas = document.getElementById('js_canvas')
    , context = canvas.getContext('2d')
    , img = new Image()
    , w
    , h
    , offset
    , glitchInterval;

  img.src = './image/logo_beforeGlitch--white.svg';
  img.onload = function() {
    init();
  };

  var init = function() {
    clearInterval(glitchInterval);
    canvas.width = w = img.width;
    canvas.height = h = img.height;
    glitchInterval = setInterval(function() {
      clear();
      context.drawImage(img, 0, 0);
      setTimeout(glitchImg, randInt(250, 1000));
    }, 500);
  };

  var clear = function() {
    context.rect(0, 0, w, h);
    context.fillStyle = 'black';
    context.fill();
  };
      
  var glitchImg = function() {
    for (var i = 0; i < randInt(1, 13); i++) {
      var x = Math.random() * w;
      var y = Math.random() * h;
      var spliceWidth = w - x;
      var spliceHeight = randInt(5, h / 3);
      context.drawImage(canvas, 0, y, spliceWidth, spliceHeight, x, y, spliceWidth, spliceHeight);
      context.drawImage(canvas, spliceWidth, y, x, spliceHeight, 0, y, x, spliceHeight);
    }
  };

  var randInt = function(a, b) {
    return ~~(Math.random() * (b - a) + a);
  };

  // After intro
  setTimeout(function(){
    clearInterval(glitchInterval);
    $("#js_contentContainer").delay(250).fadeIn("slow");
  }, 3000);
});
