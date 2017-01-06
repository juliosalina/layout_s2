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