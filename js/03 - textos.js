$(document).ready(function() {

    // val() igual que value
    $("#nEnlaceBtn").click(function() {
        $("ul").append("<li><a href='https://" + $(nEnlace).val() + ".com'>" + $(nEnlace).val() + "</a></li>")
        $("input").val("")
    })

    // text() como innerText
    $("p").text("Éste es el texto")

    // each() forEach
    $('a').each(function(index, element) {
        // element == this
        let enlace = $(this).attr("href")
        $(this).text(enlace)
    });

    // html() obtiene o asigna el valor de cualquier elemento del html
    console.log($('p').html())
    $('p').html("Soy el nuevo contenido")

});