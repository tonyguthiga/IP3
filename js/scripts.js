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

    $("form#responce").submit(function(){
        var name = $("#b_name").val();
        alert(name + " we have received your message. Thank you for reaching out to us.")
    })
});


