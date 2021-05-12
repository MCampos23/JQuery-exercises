$(document).ready(function() {
    $(window).scroll(function() {
        let scrollPos = $(window).scrollTop()
        let menu = $('#menu')
        let content = $('#content')
        if (scrollPos >= 100) {
            menu.css('position', 'fixed')
                .css('margin-top', '0px')
            content.css('padding-top', '225px')
        } else {
            menu.css('position', 'relative')
                .css('margin-top', '100px')
            content.css('padding-top', '25px')
        }

    });
});