function showImages(el){
    var windowHeight = jQuery(window).height();
    $(el).each(function(){
        var thisPos = $(this).offset().top;
//add var for div height to subtract from windowHieght
//add if statement to remove fadeIn when outside(might need another calss Fadeout, remove one add other)
        var topOfWindow = $(window).scrollTop();
        if(topOfWindow + windowHeight - 300 > thisPos){
            $(this).addClass("fadeIn");
            $(this).addClass("fix");
            $(this).removeClass("fadeOut")
            $()
        }else{
            $(this).removeClass("fadeIn");
            $(this).removeClass('fix');
            $(this).addClass("fadeOut");
        }
})
}
$(document).ready(function(){
    showImages('#landing')

})

$(document).scroll(function(){
    showImages('.card--portfolio')
    showImages('.card--work');
})