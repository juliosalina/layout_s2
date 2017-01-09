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




// highlight stepmenu
var lastId,
    topMenu = $(".step-menu-v"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

    menuItems.click(function(e){
      var href = $(this).attr("href"),
          offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
      $('html, body').stop().animate({ 
          scrollTop: offsetTop
      }, 300);
      e.preventDefault();
    });



//função scroll
$(window).scroll(function() {


    //highlight stepmenu


   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active").end().filter("[href='#"+id+"']").parent().addClass("active").removeClass('idle');
   } 


    //fixar slider historico no scroll TODO CRIAR CLASSE
    var scrollPosition = $(window).scrollTop();
    if (scrollPosition > 10) {
        $('.step-menu-v,.side-menu').css('top', '4.5rem');
        $('.history-menu').css('top','64px'); //usar rem
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