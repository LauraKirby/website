$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      transitionStyle : "fade",
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
  });



  $('#aboutLink').click(function() {
    $.scrollTo($('#about'), 1000);
  });

  $('#projectsLink').click(function() {
    $.scrollTo($('#projects'), 1000);
  });

  $('#blogLink').click(function() {
    $.scrollTo($('#blog'), 1000);
  });

  $('#contactLink').click(function() {
    $.scrollTo($('#contact'), 1000);
  });
 
}); //end doc.ready