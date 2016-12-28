$('.itens-menu').slimScroll({
    height: 'auto',
    position: 'right',
    size: "7px",
    color: '#bbb',
    wheelStep: 5
});

//menu busca icone lupa
$('#iconified').on('keyup', function() {
    var input = $(this);
    if (input.val().length === 0) {
        input.addClass('empty');
    } else {
        input.removeClass('empty');
    }
});

$('.menu-button').on('click', function() {
    if ($('body').hasClass('menu-open')) {
        $('body').removeClass('menu-open');
        $('body').addClass('menu-close');
        $('.menu').removeClass('toggle-open');
        $('.menu').addClass('toggle-close');
        $('.menu-button').removeClass('toggle-open');
        $('.menu-button').addClass('toggle-close');
        $('.title-page').removeClass('toggle-open');
        $('.title-page').addClass('toggle-close');

    } else {
        $('body').removeClass('menu-close');
        $('body').addClass('menu-open');
        $('.menu').removeClass('toggle-close');
        $('.menu').addClass('toggle-open');
        $('.menu-button').removeClass('toggle-close');
        $('.menu-button').addClass('toggle-open');
        $('.title-page').removeClass('toggle-close');
        $('.title-page').addClass('toggle-open');
    }
});
