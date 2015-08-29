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


// $.get('http://codetoempower.tumblr.com/rss').then(function(data) {
//   console.log(data);
// });
  //user AJAX to make this call
  //blog xml
  // var tyResult = Typhoeus.get('http://codetoempower.tumblr.com/rss');

  // //parse xml, so we can interact with it with jquery
  // var myXmlDoc = $.parseXML( tyResult );

  // //wrap string in a jquery object
  // var $myXml = $(myXmlDoc);

  // //can now use jquery to search xml doc or $xml
  // var $myTitle = $myXml.find( "title" );

  // // Append "RSS Title" to #someElement
  // $( ".mySomeElement" ).append( $myTitle.text() );



  //sample xml
  // var xml = "<rss version='2.0'><channel><title>Adventures of Learning to Code</title></channel></rss>";
  // console.log(xml);
  // //parse xml, so we can interact with it with jquery
  // var xmlDoc = $.parseXML( xml );
  
  // //wrap string in a jquery object
  // var $xml = $( xmlDoc );

  // //can now use jquery to search xml doc or $xml
  // var $title = $xml.find( "title" );
   
  //   // Append "RSS Title" to #someElement
  //   $( ".someElement" ).append( $title.text() );
     
  //   // Change the title to "XML Title"
  //   $title.text( "XML Title" );
     
  //   // Append "XML Title" to #anotherElement
  //   $( "#anotherElement" ).append( $title.text() );

 
}); //end doc.ready