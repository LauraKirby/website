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

// //------------- NAV BAR -------------
//   $('.ui.sticky')
//   .sticky({
//     context: '#navBar',
//     pushing: true
//   });

//   $('#aboutLink').click(function() {
//     $.scrollTo($('#about'), 1000);
//   });

//   $('#projectsLink').click(function() {
//     $.scrollTo($('#projects'), 1000);
//   });

//   $('#blogLink').click(function() {
//     $.scrollTo($('#blog'), 1000);
//   });

//   $('#contactLink').click(function() {
//     $.scrollTo($('#contact'), 1000);
//   });

 



//------------- NAV BAR DEMO-------------
 // fix main menu to page on passing
      $('.main.menu').visibility({
        type: 'fixed'
      });
      $('.overlay').visibility({
        type: 'fixed',
        offset: 80
      });

      // lazy load images
      $('.image').visibility({
        type: 'image',
        transition: 'vertical flip in',
        duration: 500
      });

      // show dropdown on hover
      $('.main.menu  .ui.dropdown').dropdown({
        on: 'hover'
      });



}); //end doc.ready
