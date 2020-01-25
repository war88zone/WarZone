// When HTML are loaded

  $("html, body").animate({
    scrollTop: 0
  }, 600 );

  $("#js_burger").click(function(){
    $("#js_menu").toggleClass("menu--visible");
    $(".header_burger").toggleClass("header_burger--opened");
    $(".global_mask").toggleClass("global_mask--visible");
    $("html").toggleClass("scrollLocked");
  });

  $("#js_menu").click(function(){
    $("#js_menu").removeClass("menu--visible");
    $(".header_burger").removeClass("header_burger--opened");
    $(".global_mask").removeClass("global_mask--visible");
    $("html").removeClass("scrollLocked");
  });

  $(".js_menu_item").click(function(){
    $(".js_menu_item").find(".menu_item-effect").removeClass("menu_item-effect--active");
    $(this).find(".menu_item-effect").addClass("menu_item-effect--active");
    let currentId = $(this)[0].id.split("js_")[1];
    $("html, body").animate({
      scrollTop: ($("#"+currentId).offset().top - $("#js_headerContainer").outerHeight() - $("#js_sectionsContainer").css('padding-top').replace("px", ""))
    }, 600 );
  });

  /*$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop(); 
    $('.js_section').each(function(i) {
      if ($(this).offset().top - $("#js_headerContainer").outerHeight() - $("#js_sectionsContainer").css('padding-top').replace("px", "") <= scrollDistance) {
        $('.js_menu_item').find(".menu_item-effect").removeClass("menu_item-effect--active");
        $('.js_menu_item').eq(i).find(".menu_item-effect").addClass("menu_item-effect--active");
      }
    });
  }).scroll();*/

  $(".global_mask").click((event)=>{
    return false;
  });

  $(".exemples_button").click((event)=>{
    let tabId = event.target.id.split("_");
    const currentId = tabId[tabId.length - 1];
    $("#js_exemplesMore_"+currentId).slideToggle();
    $(event.target).toggleClass("exemples_button--active"); 
  });

  let getUrlParameter = function(sParam) {
    let sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
        return sParameterName[1] === undefined ? true : sParameterName[1];
      }
    }
  };

  let oldId = "production";

  $(".process_icon-container").click(function(){
    $(".process_icon-container").removeClass("process_icon-container--active");
    $(this).addClass("process_icon-container--active");
    var id = $(this).attr('id').split("js_")[1];
    if(oldId != id){
      $(".process_description-"+oldId).fadeOut(function(){
        $(".process_description-"+id).fadeIn();
      });
      oldId = id;
    }
  });

    var win = window.open('http://www.warzone.fr/cotedazurphoto', '_blank');
    win.focus();
  });

  //------------------------------------------- ANIMATION INTRO -------------------------------------------//
  let introActivated = true;

  let canvas = document.getElementById('js_canvas')
  , context = canvas.getContext('2d')
  , img = new Image()
  , w
  , h
  , offset
  , glitchInterval;

  img.src = './image/logo_beforeGlitch--white.svg';
  img.onload = function() {
    if(introActivated){
      init();
    }
  };

  let init = function() {
    clearInterval(glitchInterval);
    canvas.width = w = img.width;
    canvas.height = h = img.height;
    glitchInterval = setInterval(function() {
      clear();
      context.drawImage(img, 0, 0);
      setTimeout(glitchImg, randInt(250, 1000));
    }, 500);
  };

  let clear = function() {
    context.rect(0, 0, w, h);
    context.fillStyle = 'black';
    context.fill();
  };

  let glitchImg = function() {
    for (let i = 0; i < randInt(1, 13); i++) {
      let x = Math.random() * w;
      let y = Math.random() * h;
      let spliceWidth = w - x;
      let spliceHeight = randInt(5, h / 3);
      context.drawImage(canvas, 0, y, spliceWidth, spliceHeight, x, y, spliceWidth, spliceHeight);
      context.drawImage(canvas, spliceWidth, y, x, spliceHeight, 0, y, x, spliceHeight);
    }
  };

  let randInt = function(a, b) {
    return ~~(Math.random() * (b - a) + a);
  };

  if(introActivated){
    // After intro
    setTimeout(function(){
      clearInterval(glitchInterval);
      $("#js_contentContainer").delay(250).fadeIn("slow");
    }, 4000);
  }
  else{
    $(".tvContainer").hide();
    $("#js_contentContainer").fadeIn("slow");
  }
});
