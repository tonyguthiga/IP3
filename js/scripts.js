$(document).ready(function() {
    $(".we").click(function(){
        $(this).children(".hide").slideToggle(1500);
        $(this).children(".show").toggle(1500);
    });

    $(".slide").hover( function() {
        $(this).find(".img-title").fadeIn(300);
    }, function() {
        $(this).find(".img-title").fadeOut(100);
    });
});


