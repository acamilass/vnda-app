$(document).ready(function(){
    $("h1").on("click", function() {
        alert("Action is working");
    });

    $(".toolbar").mouseover(function(){
        $(this).css("text-transform", "lowercase");
    });
})