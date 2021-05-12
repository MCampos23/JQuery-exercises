$(document).ready(function() {
    let caja = $('#caja')
    $('#mostrar').click(function(e) {
        caja.slideDown('normal')
    });

    $('#ocultar').click(function(e) {
        caja.fadeOut('normal')
    });

    $('#mostOcu').click(function(e) {
        caja.slideToggle("slow");
        let texto = $('#mostOcu').text()
        if (texto == "Mostrar") $('#mostOcu').text('Ocultar')
        else $('#mostOcu').text('Mostrar')
    });

    // Crea un puntero en forma de círculo que siga el movimiento del mouse
    $('body').mousemove(function(e) {
        $("body").css("cursor", "none")
            // values: e.clientX, e.clientY, e.pageX, e.pageY
        $('#punt').css("left", e.clientX)
            .css("top", e.clientY)
    });

    // Animate
    $('#animame').click(function() {
        caja.animate({
                left: '250px',
                opacity: '0.5',
                height: '150px',
                width: '150px'
            }, "slow")
            .animate({
                left: '250px',
                opacity: '0.5',
                height: '150px',
                width: '150px',
                borderRadius: '50px'
            }, "5000")
            .animate({
                width: "300px",
                height: "50px",
                margin: "10px",
                opacity: '1',
                left: "0px"
            }, "slow")
    });

});