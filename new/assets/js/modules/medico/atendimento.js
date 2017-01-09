//Médico > Atendimento

$('.history-menu').flexslider({
    animation: "slide",
    animationLoop: false,
    controlNav: false,
    pauseOnHover: true,
    itemWidth: 210,
    slideshow: false,
    touch: true,
    prevText: "",
    nextText: "",
    move: 1,
    start: function(){
        //seta largura baseada no pai necessário para posicionamento fixo
        var parentSlider =  $('.history-menu').parent();
        var sizeSlider =  parentSlider.width();
        parentSlider.css('width',sizeSlider);
    }, 
});

// Scroll animate para #

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

//função scroll
$(window).scroll(function() {

    //fixar slider historico no scroll TODO CRIAR CLASSE
    var scrollPosition = $(window).scrollTop();
    if (scrollPosition > 10) {
        $('.step-menu-v,.side-menu').css('top', '4.5rem');
        $('.history-menu').css('top','64px');
    } else {
        $('.step-menu-v,.side-menu').css('top', '7.6rem');
        $('.history-menu').css('top','auto');
    }


});

//abrir e fechar menu historico
$('.history-menu slides li,.history-info .close-btn').click(function() {
    $('.history-info').toggleClass('closed');
});

//abrir e fechar side-menu
$('.btn-profile').click(function() {
    $('.side-menu').toggleClass('closed');
    $('.btn-profile i').toggleClass('fa-flip-horizontal');
});