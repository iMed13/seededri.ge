// $(window).mousemove(function(e) {
//     parallaxIt(e, ".address_content", -100);
//   });
  
//   function parallaxIt(e, target, movement) {
//     var $this = $(window);
//     var relX = e.pageX - $this.offset().left;
//     var relY = e.pageY - $this.offset().top;
  
//     TweenMax.to(target, 1, {
//       x: (relX - $this.width() / 2) / $this.width() * movement,
//       y: (relY - $this.height() / 2) / $this.height() * movement
//     });
//   }
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

  $(".address_p").click(function(){
    setTimeout(function(){ $(".address_content").toggleClass("active_address_content"); }, 500);
    $(".addres_popup").toggleClass("active_address");
    $(".contact_popup").removeClass("active_address");
    setTimeout(function(){ $(".contact_content").removeClass("active_address_content"); }, 500);
  });
  $(".contact_p").click(function(){
    setTimeout(function(){ $(".contact_content").toggleClass("active_address_content"); }, 500);
    $(".contact_popup").toggleClass("active_address");
    $(".addres_popup").removeClass("active_address");
    setTimeout(function(){ $(".address_content").removeClass("active_address_content"); }, 500);
  });

  $(".other_pages").siblings("header").css("position", "unset");