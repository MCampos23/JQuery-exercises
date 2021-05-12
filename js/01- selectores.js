// Sintaxis básica

$(document).ready(function() {

    // Selectores de ID
    let rojo = $("#rojo").css("background", "red")
        .css("color", "white")
    let amarillo = $("#amarillo").css("background", "yellow")
        .css("color", "grey")
    let verde = $("#verde").css("background", "green")
        .css("color", "white")

    let botonOcultar = $('#ocultar').click(function() {
        parrafos.hide()
    })
    let botonMostrar = $('#mostrar').click(function() {
            parrafos.show()
        })
        // Selectores de clase
    let negrita = $(".negrita")
    negrita.css("font-weight", "bold")

    // Selectores de etiqueta
    let parrafos = $('p').click(function() {
        $(this).toggleClass('cebra')
    })

    // Selectores de atributo
    $("[title='facebook']").css("background", "#ccc")

    // Selecciones múltiples
    $('a, p').css("margin", "10px")



    $('#cambiarFondoAzul').click(function() {
        $('body').css("background", 'blue')
    })
    $('#cambiarFondoRojo').click(function() {
        $('body').css("background", 'red')
    })
    $('#cambiarFondoVerde').click(function() {
        $('body').css("background", 'green')
    })

    //método eq

    // console.log(negrita.eq(1))
})