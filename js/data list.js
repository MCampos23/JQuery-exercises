$(document).ready(function() {

    let first_name = $('.first_name')
    let last_name = $('.last_name')
    let email = $('.email')
    let num = $('.num')
    let nPerPage = $("option:selected").html()
    let page = 1

    // Hace la petición al servidor  
    function llamada() {
        $.get(
            "https://reqres.in/api/users", { page: page, per_page: nPerPage },
            function(res) {
                res.data.forEach((e) => {
                    first_name.html(e.first_name)
                    last_name.html(e.last_name)
                    email.html(e.email)
                    num.html(e.id)
                    createTd(e.id)
                });
            }
        );
    }

    function createTd(n) {
        $("#fila").clone().appendTo(".table").attr('id', 'fila' + n).removeClass('hide').addClass('fila')

    }
    llamada()

    // Lee el número de elementos a mostrar del select
    $('#per_pageSelect').change(function(e) {
        nPerPage = $("option:selected").html()
        $('.fila').remove()
        llamada()
    });


    // Botones Ver/Ocultar
    let ver = $('.oc')

    ver.click(function(e) {
        console.log(this)

        // if (ver.html() == 'Ocultar') {
        //     first_name.html("")
        //     ver.html('ver')
        // } else {

        // }
    });


    // Paginación
    $('#pag a').click(function(e) {
        // Buscar elemento con la clase active y obtener su html

        let activo = $('#pag li .active')

        $('#pag li').removeClass('active')


        $(this).parent().addClass('active')

        page = $(this).html()

        $('.fila').remove()
        llamada()
    });

});