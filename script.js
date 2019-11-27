$(document).ready(function() {
    //call to action clicking the right icon
    $( '.icons' ).click(function() {


        var img_corrente = $('img.active');
        var img_successiva = img_corrente.next('img');
        if(img_successiva.length ==0) {
            // se non ci sono più immagini->recupero la prima
            img_successiva = $('.first')


        }
//ora diventa display none
        img_corrente.removeClass('active');
        //aggiungo la classe active al img succesiva
        img_successiva.addClass('active');

    })


});
