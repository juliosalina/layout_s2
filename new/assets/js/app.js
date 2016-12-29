/**
 * General Config`s System S2
 * 
 * Dependencies:
 *   - jQuery 1.3.2 (or newer)
 *
 * Company: Dr. Consulta
 */

var $menu = $('.itens-menu'),
    $search = $('#iconified'),
    $menuButton = $('.menu-button'),
    $body = $('body'),
    $menuFundo = $('.menu-fundo'),
    $titlePage = $('.title-page'),
    $logo = $('.logo a img'),
    $menuItem = $('#sidebar-menu a'),
    $userDetails = $('.user-details');

/*********************************************************
Initialize document and add scroll to side menu
*********************************************************/
$(document).ready(function() {
    //slimscroll menu lateral
    $menu.slimScroll({
        height: 'auto',
        position: 'right',
        size: "7px",
        color: '#bbb',
        wheelStep: 5
    });
});

var addOrRemoveClass = function(element, className, type) {
    var action = (type === 'add') ? element.addClass(className) : element.removeClass(className);
};

//menu busca icone lupa
$search.on('keyup', function() {
    var $input = $(this);
    if ($input.val().length === 0) {
        addOrRemoveClass($input, 'empty', 'add');
    } else {
        addOrRemoveClass($input, 'empty', 'remove');
    }
});

//click menu close/open
$menuButton.on('click', function() {
    if ($body.hasClass('menu-open')) {

        var menuElements = $('#sidebar-menu li.has_sub').find('a');

        for(var i=0; i<menuElements.length; i++) {
            if($(menuElements[i]).hasClass('subdrop')) {
                $(menuElements[i]).removeClass('subdrop');
                $(menuElements[i]).next("ul").slideUp(100);
                $('.pull-right i', $(menuElements[i]).parent()).removeClass("fa-minus").addClass("fa-plus");
            }
        }

        $userDetails.fadeOut(100);
        $menu.fadeOut(100);
        $logo.fadeOut(100, function() {
            $logo.attr('src', 'assets/images/logom.jpg');
            addOrRemoveClass($body, 'menu-open', 'remove');
            addOrRemoveClass($body, 'menu-close', 'add');
            addOrRemoveClass($menuFundo, 'toggle-open', 'remove');
            addOrRemoveClass($menuFundo, 'toggle-close', 'add');
            addOrRemoveClass($menuButton, 'toggle-open', 'remove');
            addOrRemoveClass($menuButton, 'toggle-close', 'add');
            addOrRemoveClass($titlePage, 'toggle-open', 'remove');
            addOrRemoveClass($titlePage, 'toggle-close', 'add');

            $logo.fadeIn(600);
            $menu.fadeIn(600);
            $menu.slimScroll({destroy: true});

            $('.menu .slimScrollBar').remove();
            $('.menu .slimScrollRail').remove();

            $menuButton.attr('title','Extender o menu');
            $menuButton.attr('data-original-title','Extender o menu');

        });

    } else {

        $menu.fadeOut(100);
        $logo.fadeOut(100, function() {
            $logo.attr('src', 'assets/images/logo.jpg');
            addOrRemoveClass($body, 'menu-close', 'remove');
            addOrRemoveClass($body, 'menu-open', 'add');
            addOrRemoveClass($menuFundo, 'toggle-close', 'remove');
            addOrRemoveClass($menuFundo, 'toggle-open', 'add');
            addOrRemoveClass($menuButton, 'toggle-close', 'remove');
            addOrRemoveClass($menuButton, 'toggle-open', 'add');
            addOrRemoveClass($titlePage, 'toggle-close', 'remove');
            addOrRemoveClass($titlePage, 'toggle-open', 'add');

            $userDetails.fadeIn(600);
            $menu.fadeIn(600);
            $logo.fadeIn(600);
        });
        
        $menu.slimScroll({
            height: 'auto',
            position: 'right',
            size: "7px",
            color: '#bbb',
            wheelStep: 5
        });

        $menuButton.attr('title','Diminuir o menu');
        $menuButton.attr('data-original-title','Diminuir o menu');
    }
});

//click menu submenu
var menuItemClick = function(e) {

    if(!$body.hasClass('menu-close')) {
        var $this = e;
        if($(this).parent().hasClass('has_sub')) {
            e.preventDefault();
        }
        if (!$(this).hasClass('subdrop')) {
            // hide any open menus and remove all other classes
            $('ul', $(this).parents('ul:first')).slideUp(350);
            $('a', $(this).parents('ul:first')).removeClass('subdrop');
            $('#sidebar-menu .pull-right i').removeClass('fa-minus').addClass('fa-plus');

            // open our new menu and add the open class
            $(this).next('ul').slideDown(350);
            $(this).addClass('subdrop');
            $('.pull-right i', $(this).parents('.has_sub:last')).removeClass('fa-plus').addClass('fa-minus');
            $('.pull-right i', $(this).siblings('ul')).removeClass('fa-minus').addClass('fa-plus');
        } else if ($(this).hasClass('subdrop')) {
            $(this).removeClass('subdrop');
            $(this).next('ul').slideUp(350);
            $('.pull-right i', $(this).parent()).removeClass('fa-minus').addClass('fa-plus');
        }
    }

};

$menuItem.on('click', menuItemClick);

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

//turn on full screen
var launchFullscreen = function(element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    },
    exitFullscreen = function() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    },
    //toggle screen
    toggle_fullscreen = function() {
        var $this = this;
        var fullscreenEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled;
        if (fullscreenEnabled) {
            if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
                $this.launchFullscreen(document.documentElement);
            } else {
                $this.exitFullscreen();
            }
        }
    };

$("#btn-fullscreen").on('click', function() {
    toggle_fullscreen();
});
