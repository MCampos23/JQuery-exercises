$(document).ready(function() {
    console.log('funcionando!!!')

    // Draggable
    $('.elemento').draggable()

    // Resizable
    $('.elemento').resizable()

    // Selectable
    //$('.lista-seleccionable').selectable()

    // Sortable
    $('.lista-seleccionable').sortable()


    /// EFECTOS
    $('#mostrar').click(function() {
        $('#caja-efectos').toggle('drop', 'slow');
    });

    // Tooltip
    $('document').tooltip()

    // Cuadro de diálogo
    $('#cerrar').click(function(e) {
        e.preventDefault();
        $('#popup').dialog()
    });
    $('#cerrarAcp').click(function() {
        window.close()
    });

    // Date Picker
    $('#date-picker').datepicker({ minDate: 0 })
    let fecha = $('#date-picker').datepicker('getDate')
        //console.log(fecha)

    //Tabs
    $('#pestanas').tabs()

});