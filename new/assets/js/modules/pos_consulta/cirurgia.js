//Pós-Consulta > Cirurgia

$('.card-slider').flexslider({
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
    $this = $(this);
    if($this.attr('href') !== '#historico') {
        $('.comment').hide();
    } else {
        $('.comment').show();
    }
});

$('.scrollitem').slimScroll({
    height: '11rem',
    position: 'right',
    size: "7px",
    color: '#bbb',
    wheelStep: 5,
    alwaysVisible: true
});