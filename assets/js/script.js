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

 




















