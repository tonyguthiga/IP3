$(document).ready(function() {
    $(".we").click(function(){
        $(this).children(".hide").slideToggle(1500);
        $(this).children(".show").toggle(1500);
    });
});


$(document).ready(function(){
    $(".space").hover(function(){
        $("#main").fadeOut("slow");
        $("#overlay").fadeIn("Space App");
    }, function(){
        $("#overlay").fadeOut("Space App");
        $("#main").fadeIn("slow");
    });
})