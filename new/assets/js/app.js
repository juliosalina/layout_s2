$(document).ready(function() {
    //slimscroll menu lateral
    $('.itens-menu').slimScroll({
        height: 'auto',
        position: 'right',
        size: "7px",
        color: '#bbb',
        wheelStep: 5
    });
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

//click menu close/open
$('.menu-button').on('click', function() {
    if ($('body').hasClass('menu-open')) {
        $('body').removeClass('menu-open');
        $('body').addClass('menu-close');
        $('.menu-fundo').removeClass('toggle-open');
        $('.menu-fundo').addClass('toggle-close');
        $('.menu-button').removeClass('toggle-open');
        $('.menu-button').addClass('toggle-close');
        $('.title-page').removeClass('toggle-open');
        $('.title-page').addClass('toggle-close');

        $('.logo a img').attr('src', 'assets/images/logom.jpg');

        $('.itens-menu').slimScroll({destroy: true});

    } else {
        $('body').removeClass('menu-close');
        $('body').addClass('menu-open');
        $('.menu-fundo').removeClass('toggle-close');
        $('.menu-fundo').addClass('toggle-open');
        $('.menu-button').removeClass('toggle-close');
        $('.menu-button').addClass('toggle-open');
        $('.title-page').removeClass('toggle-close');
        $('.title-page').addClass('toggle-open');

        $('.logo a img').attr('src', 'assets/images/logo.jpg');

        //slimscroll menu lateral
        $('.itens-menu').slimScroll({
            height: 'auto',
            position: 'right',
            size: "7px",
            color: '#bbb',
            wheelStep: 5
        });
    }
});

//click menu submenu
var menuItemClick = function(e) {

    if(!$('body').hasClass('menu-close')) {
        var $this = e;
        if($(this).parent().hasClass("has_sub")) {
            e.preventDefault();
        }
        if (!$(this).hasClass("subdrop")) {
            // hide any open menus and remove all other classes
            $("ul", $(this).parents("ul:first")).slideUp(350);
            $("a", $(this).parents("ul:first")).removeClass("subdrop");
            $("#sidebar-menu .pull-right i").removeClass("fa-minus").addClass("fa-plus");

            // open our new menu and add the open class
            $(this).next("ul").slideDown(350);
            $(this).addClass("subdrop");
            $(".pull-right i", $(this).parents(".has_sub:last")).removeClass("fa-plus").addClass("fa-minus");
            $(".pull-right i", $(this).siblings("ul")).removeClass("fa-minus").addClass("fa-plus");
        } else if ($(this).hasClass("subdrop")) {
            $(this).removeClass("subdrop");
            $(this).next("ul").slideUp(350);
            $(".pull-right i", $(this).parent()).removeClass("fa-minus").addClass("fa-plus");
        }
    }

};

$menuItem = $("#sidebar-menu a");
$menuItem.on('click', menuItemClick);
