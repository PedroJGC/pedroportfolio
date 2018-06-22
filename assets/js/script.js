//Criar duas variáveis para pegar os elementos "welcome-section" e "enter-button" pela class.
//Criar uma função para remover a class content-hidden.
//Adicionar evento ao Button, fazendo com que entre na página principal.
$(function() {
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
});

//Menu responsivo

$("#toggle").click(function () {
    
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");

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























