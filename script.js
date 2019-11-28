$(document).ready(function() {
    //call to action clicking the right icon
alert('hola');


    $( '.right' ).click(function() {


        var img_corrente = $('img.active');
        var img_successiva = img_corrente.next('img');
        if(img_successiva.length == 0) {
            // se non ci sono più immagini->recupero la prima
            img_successiva = $('.first')

        }
        //ora diventa display none
        $(img_corrente).removeClass('active');
        //aggiungo la classe active al img succesiva
        $(img_successiva).addClass('active');

    });

        $('.left').click(function() {
            var img_corrente = $('img.active');
            var img_precedente = img_corrente.prev('img');
            if(img_precedente.length == 0) {
                // se non ci sono più immagini->recupero la prima
                (img_precedente) = $('.last');

            }

            $(img_corrente).removeClass('active');
            //aggiungo la classe active al img succesiva
            $(img_precedente).addClass('active');

        });

});
// GIRO DELLE IMMAGINE DEL CARROUSEL

/*var autoplay = true;
if();

    do {
        setInterval(function(autoplay, 3000);
    } while {
        $( '.right' '.left' ).click(function() {
            if (autoplay = false) {
                clearInterval(autoplay);
            }

        }

    }
}

};
*/

 //dati quando l'utente fa click una volta
 var start = ('.right' '.left');
 console.log('start');
 //dati quando l'utente fa click di nuovo?
 var stop = ;

 //funzione con click
     //se l'utente fa click le immagini cominciano a girare
     if  $( 'start' ).click(function() {
         setInterval(function(autoplay, 3000);
}

    // se l'utente clicca di nuovo la operazione si ferma
    if  $( 'start' ).click(function() {
        clearInterval(autoplay);
}
