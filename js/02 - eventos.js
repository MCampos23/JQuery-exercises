// EVENTOS

$(document).ready(function() {
    console.log("Seguimos aprendiendo JQuery!!");

    // MouseOver
    $("#caja").mouseover(function() {
        $(this).css("background", "red");
    });

    // MouseOut
    $("#caja").mouseout(function() {
        $(this).css("background", "blue");
    });

    // Hover
    $("#caja").hover(
        function() {
            // over
            $(this).css("border", "white");
        },
        function() {
            // out
            $(this).css("border", "5px solid green");
        }
    );

    // Click
    $("#caja").click(function() {
        $(this).css("width", "500px");
    });
    // Doble click
    $("#caja").dblclick(function() {
        $(this).css("height", "500px");
    });

    // Focus
    $("input").focus(function() {
        $(this).css("border", "2px solid white");
    });
    // Blur
    $("input").blur(function() {
        $(this).css("border", "2px solid black");
    });
    // Mousedown 
    $('#caja2').mousedown(function() {
        console.log("Estás presionando el ratón")
    });
    // Mouseup
    $('#caja2').mousedown(function() {
        console.log("Has soltado el ratón")
    });
    // Mousemove
    $(document).mousemove(function(e) {
        $('body').css('cursor', 'none')

        // values: e.clientX, e.clientY, e.pageX, e.pageY
        $('#sigueme').css('left', e.clientX)
            .css('top', e.clientY)
    });
});