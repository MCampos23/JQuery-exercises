$(document).ready(function() {
    // Load
    // $('button').click(function() {

    //     $('#datos').load("https://reqres.in/");

    // });

    // GET

    let nomAp = $("#nomAp")
    $("#nomApbtn").click(function() {
        if (nomAp.html() == "") {
            $.get(
                "https://reqres.in/api/users", { page: 1, per_page: 6 },
                function(res) {
                    res.data.forEach((e) => {
                        nomAp.append(e.first_name + " " + e.last_name + "<br>");
                    });
                }
            );
        } else(alert('Ya hay datos ompare!!'))
    });

    // POST
    $("#form").submit(function(e) {
        e.preventDefault();
        let user = {
            name: $('input[name="name"]').val(),
            web: $('input[name="web"]').val(),
            position: $('input[name="position"]').val(),
        };
        console.log(user);
        //     $.post($(this).attr('action'), user,
        //         function(res) {
        //             console.log(res)
        //         },
        //     );
        //     return false
        // });
        // $ajax
        $.ajax({
            type: "post",
            url: $(this).attr("action"),
            data: user,
            beforeSend: function() {
                console.log("Enviando usuario...");
            },
            error: function() {
                console.log("Ha ocurrido un error.");
            },
            success: function(res) {
                console.log(res);
            },
            timeOut: 10,
        });
        return false;
    });
});