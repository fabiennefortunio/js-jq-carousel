$(document).ready(function() {
    //call to action clicking the right icon
    $( '.icons' ).click(function() {


        var img_corrente = $('img.active');
        var img_successiva = img_corrente.next('img');
//ora diventa display none
        img_corrente.removeClass('active');
        //aggiungo la classe active al img succesiva
        img_successiva.addClass('active');

    })


});
