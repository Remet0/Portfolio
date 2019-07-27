function showImages(el) {
  var windowHeight = jQuery(window).height();
  $(el).each(function() {
    var thisPos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (el === ".card--portfolio") {
      if (
        topOfWindow + windowHeight - 375 > thisPos &&
        topOfWindow + windowHeight - 900 < thisPos
      ) {
        $(this).addClass("clip--Portfolio_In");
        $(this).removeClass("clip--Portfolio_Out");
      } else {
        $(this).removeClass("clip--Portfolio_In");
        $(this).addClass("clip--Portfolio_Out");
      }
  }else if(el === '.card--work'){
    if (
        topOfWindow + windowHeight - 200 > thisPos &&
        topOfWindow + windowHeight - 900 < thisPos
      ) {
        $(this).addClass("clip--Work_In");
        $(this).removeClass("clip--Work_Out");
      } else {
        $(this).removeClass("clip--Work_In");
        $(this).addClass("clip--Work_Out");
      }
  }
});
}
$(document).scroll(function() {
  showImages(".card--portfolio");
  showImages(".card--work");
});

$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	} /* speed */ );
});