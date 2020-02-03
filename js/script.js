$(document).ready(function() {
    $("#button1").mouseenter(function() {
        $("#button1").removeClass("makeRed").addClass("makeBorder");
    });

    $("#button1").mouseleave(function() {
        $("#button1").removeClass("makeBorder").addClass("makeRed");
    });
    $("#button2").click(function() {
        $('#button2').hide(2000).show(2000);

    });
    $("#button2").click(function() {
        $("#para2").fadeIn(2000).fadeOut(1000);
    });


});