$(window).mousemove(function(e) {
    //parallaxIt(e, ".social_icons", -10);
    if($( window ).width()<= 1250)
    {
      parallaxIt(e, "header", 0);
    }
    else
    {
      parallaxIt(e, "header", -50);
    }
  });
  
  function parallaxIt(e, target, movement) {
    var $this = $(".loaded_index");
    var relX = e.pageX - $this.offset().left;
  
    TweenMax.to(target, 1, {
      x: (relX - $this.width() / 2) / $this.width() * movement
    });
  }
  $( document ).ready(function() {
    $(".social_icons").children().addClass("social_animation");
  });
  $(".search_button").click(function(){
    $(".search_section").find("input").focus();
    $(".search_section").toggleClass("active_search_form");
  });
  $(".search_section").find("input").blur(function(){
    $(".search_section").toggleClass("active_search_form");
  });
  $(".header_hamburg").click(function(){
    $(".menu_ul").toggleClass("active_menu_ul");
  });