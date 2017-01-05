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
    $menuBlock = $('.menu'),
    $menuButton = $('.menu-button'),
    $body = $('body'),
    $menuFundo = $('.menu-fundo'),
    $titlePage = $('.title-page'),
    $logo = $('.logo a img'),
    $logoDiv = $('.logo'),
    $menuItem = $('#sidebar-menu a'),
    $userDetails = $('.user-details'),
    $overlay = $('.overlay'),
    $subMenuItem = $('#sidebar-menu ul li ul li a'),
    $contentBody = $('.content-body'),
    $loading = $('.loading');

/*********************************************************
Initialize document and add scroll to side menu
*********************************************************/
$(document).ready(function() {
    $('#sidebar-menu ul li a:eq(0)').addClass('active');
    $('#sidebar-menu ul li a:eq(0) i').addClass('active');
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

$overlay.on('click', function() {
    $menuButton.click();
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
        $menu.fadeOut(50);
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
            addOrRemoveClass($menuBlock, 'toggle-open', 'remove');
            addOrRemoveClass($menuBlock, 'toggle-close', 'add');
            addOrRemoveClass($logoDiv, 'toggle-open', 'remove');
            addOrRemoveClass($logoDiv, 'toggle-close', 'add');
            addOrRemoveClass($overlay, 'toggle-open', 'remove');
            addOrRemoveClass($overlay, 'toggle-close', 'add');

            $logo.fadeIn(600);
            $menu.fadeIn(600);
            $menu.slimScroll({destroy: true});

            $('.menu .slimScrollBar').remove();
            $('.menu .slimScrollRail').remove();

            $menuButton.attr('title','Extender o menu');
            $menuButton.attr('data-original-title','Extender o menu');

        });

    } else {

        $menu.fadeOut(50);
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
            addOrRemoveClass($menuBlock, 'toggle-close', 'remove');
            addOrRemoveClass($menuBlock, 'toggle-open', 'add');
            addOrRemoveClass($logoDiv, 'toggle-close', 'remove');
            addOrRemoveClass($logoDiv, 'toggle-open', 'add');
            addOrRemoveClass($overlay, 'toggle-close', 'remove');
            addOrRemoveClass($overlay, 'toggle-open', 'add');

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

//click menu submenu open/close
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

//Initialize Toppltip
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

//load pages
var loadPage = function(page) {
    var request = $.Deferred(),
        path = 'templates/';

    $.ajax({
        url: path+page+'.php',
        method: 'GET',
        cache: true,
        crossDomain: true,
        success: function (data) {
            request.resolve(data);
        },
        error: function() {
            request.reject(false);
        }
    });

    return request.promise();
};

//animation menu hover
$('.itens-menu #sidebar-menu ul li').on('mouseover', function() {
    $('body.menu-close .menu').addClass('changeWB');
    $('body.menu-close .menu').removeClass('changeWS');
});
$('.itens-menu #sidebar-menu ul li').on('mouseout', function() {
    $('body.menu-close .menu').addClass('changeWS');
    $('body.menu-close .menu').removeClass('changeWB');
});

//load dashboard initial page
loadPage('dashboard').then(function(data) {
    window.pageName = 'dashboard';
    window.breadcrumb = 'Dashboard';
    $contentBody.html('');
    $contentBody.append(data);

    $('.menu .title-page').text(window.breadcrumb);
    $('.title-page-mobile .text').text(window.breadcrumb);

    setTimeout(function() {
        $loading.hide();
    }, 1000);
});

//Click Submenu
var subMenuClick = function(el) {
    $element = $(el);
    
    window.pageName = $($element[0].target.attributes[1]).context.nodeValue;

    var totalSub = $subMenuItem.length,
        actualGroup = '';

    $('#sidebar-menu ul li a:eq(0)').removeClass('active');
    $('#sidebar-menu ul li a:eq(0) i').removeClass('active');

    for(var sub=0; sub<totalSub; sub++) {
        if ($($subMenuItem[sub]).attr('data-page') === window.pageName) {
            $($subMenuItem[sub]).addClass("active");
            $($subMenuItem[sub]).parent().addClass("active");
            $($subMenuItem[sub]).parent().parent().prev().addClass("active");
            actualGroup = $($subMenuItem[sub]).attr('data-group');

            //create breadcrumb
            window.breadcrumb = $($subMenuItem[sub]).parent().parent().prev().text() + '> ' + $($subMenuItem[sub]).text();

        } else if($($subMenuItem[sub]).attr('data-page') !== window.pageName && $($subMenuItem[sub]).attr('data-group') !== actualGroup) {
            $($subMenuItem[sub]).removeClass("active");
            $($subMenuItem[sub]).parent().removeClass("active");
            $($subMenuItem[sub]).parent().parent().prev().removeClass("active");
        } else if($($subMenuItem[sub]).attr('data-page') !== window.pageName && $($subMenuItem[sub]).attr('data-group') === actualGroup) {
            $($subMenuItem[sub]).removeClass("active");
        }
    }

    $loading.show();
    loadPage(window.pageName).then(function(data) {
        $contentBody.html('');
        $contentBody.append(data);

        $('.menu .title-page').text(window.breadcrumb);
        $('.title-page-mobile .text').text(window.breadcrumb);

        setTimeout(function() {
            $loading.hide();
        }, 1000);


        $('.flexslider').flexslider({
            animation: "slide",
            animationLoop: false,
            controlNav: true,
            pauseOnHover: true,
            touch: true,
            prevText: "",
            nextText: ""
        });

        //tab control
        $('a[data-toggle="tab"]').click(function (e) {
            $this = $(e);
            if($this.attr('href') !== '#historico') {
                $('.comment').hide();
            } else {
                $('.comment').show();
            }
        });

    });
};

$subMenuItem.on('click', subMenuClick);

//charts
function createChart() {
    $('.chart-one').kendoChart({
        dataSource: {
            requestStart: function () {
                kendo.ui.progress($("#loading"), true);
            },
            requestEnd: function () {
                kendo.ui.progress($("#loading"), false);

            }
        },
        title: {
            //text: "Evolução Nota Centro Médico Sacomã"
        },
        legend: {
            position: "bottom"
        },
        seriesDefaults: {
            type: "area",
            area: {
                line: {
                    style: "smooth"
                },
                border: {
                    dashType: "dashDot",
                    color: "#5c99c9",
                    width: 2
                }
            }
        },
        series: [{
            color: "#ececec",
            opacity: 1,
            name: "Meta",
            data: [9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0]
        }, {
            color: "#7cb0d9",
            opacity: 0.5,
            name: "Nota Mês",
            data: [7.5, 7.9, 8.7, 9.0, 8.3, 8.5, 9.7, 9.4]
        }],
        valueAxis: {
            max: 10,
            labels: {
                format: "{0}"
            },
            line: {
                visible: true
            },
            border: {
                visible: true
            },
            axisCrossingValue: -10
        },
        categoryAxis: {
            categories: ['Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            majorGridLines: {
                visible: false
            },
            labels: {
                rotation: "auto"
            }
        },
        tooltip: {
            visible: true,
            format: "{0}",
            template: "#= series.name #: #= value #"
        }
    });

    $('.chart-two').kendoChart({
        dataSource: {
            requestStart: function () {
                kendo.ui.progress($("#loading"), true);
            },
            requestEnd: function () {
                kendo.ui.progress($("#loading"), false);

            }
        },
        title: {
            //text: "Evolução Nota Centro Médico Sacomã"
        },
        legend: {
            position: "bottom"
        },
        seriesDefaults: {
            type: "area",
            area: {
                line: {
                    style: "smooth"
                },
                border: {
                    dashType: "dashDot",
                    color: "#5c99c9",
                    width: 2
                }
            }
        },
        series: [{
            color: "#ececec",
            opacity: 1,
            name: "Meta",
            data: [9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0, 9.0]
        }, {
            color: "#7cb0d9",
            opacity: 0.5,
            name: "Nota Mês",
            data: [5.0, 6.9, 8.7, 7.5, 8.3, 8.5, 10, 9.1]
        }],
        valueAxis: {
            max: 10,
            labels: {
                format: "{0}"
            },
            line: {
                visible: true
            },
            border: {
                visible: true
            },
            axisCrossingValue: -10
        },
        categoryAxis: {
            categories: ['Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            majorGridLines: {
                visible: false
            },
            labels: {
                rotation: "auto"
            }
        },
        tooltip: {
            visible: true,
            format: "{0}",
            template: "#= series.name #: #= value #"
        }
    });
}

$(document).ready(createChart);
$(document).bind("kendo:skinChange", createChart);

