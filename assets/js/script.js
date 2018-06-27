//Criar duas variáveis para pegar os elementos "welcome-section" e "enter-button" pela class.
//Criar uma função para remover a class content-hidden.
//Adicionar evento ao Button, fazendo com que entre na página principal.
/*$(function() {
   var welcomeSection = $('.welcome-section'),
       enterButton = welcomeSection.find('.enter-button');

        setTimeout(function() {
            welcomeSection.removeClass('content-hidden');
        },800);

        enterButton.on('click', function(e) {
            e.preventDefault();
            welcomeSection.addClass('content-hidden').fadeOut();
            window.location.href = "corpo.html";
        });
});*/
 $(function () {
    
    setTimeout(function () {
         $('.welcome-section').removeClass('content-hidden');
     }, 800);
  
         setTimeout(function () {   
         $('.welcome-section').addClass('content-hidden').fadeOut(function () {
             $(location).attr('href', 'corpo.html');     
         });
     }, 6000); 
 
 });

//Menu responsivo
$(function () {
$("#toggle").click(function () {
    
    $(this).toggleClass('on');
    $("#resize").toggleClass('active');
   
});
    $('#menu a').click(function () {
        $('#toggle').removeClass('on');
        $('#resize').removeClass('active');
    });
});
   
//Trocando imagens dos icones de contatos

$('#email img').mouseover(function () {
    $(this).attr('src', 'assets/images/icon-email2.png');
    $('#email img').mouseout(function () {
        $(this).attr('src', 'assets/images/icon-email1.png');

    });
});


$('#facebook img').mouseover(function () {
    $(this).attr('src', 'assets/images/icon-face2.png');
    $('#facebook img').mouseout(function () {
        $(this).attr('src', 'assets/images/icon-face1.png');

    });
});

$('#instagram img').mouseover(function () {
    $(this).attr('src', 'assets/images/icon-insta2.png');
    $('#instagram img').mouseout(function () {
        $(this).attr('src', 'assets/images/icon-insta1.png');

    });
});

$('#git img').mouseover(function () {
    $(this).attr('src', 'assets/images/icon-git2.png');
    $('#git img').mouseout(function () {
        $(this).attr('src', 'assets/images/icon-git1.png');

    });
});

//Scroll suave 

$('nav a').click(function(e) {
    e.preventDefault();
    var id = $(this).attr('href');
    targetOffset = $(id).offset().top;

    $('html, body').animate({
        scrollTop: targetOffset
    }, 500);

});




$(window).scroll(function () {
    if ($(this).scrollTop()) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();
    }
});

$("#toTop").click(function (e) {
    e.preventDefault();
    //1 second of animation time
    //html works for FFX but not Chrome
    //body works for Chrome but not FFX
    //This strange selector seems to work universally
    $("html, body").animate({ scrollTop: 0 }, 500);
});














