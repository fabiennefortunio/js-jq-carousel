$(document).ready(function() {
    //call to action clicking the right icon

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
// GIRO DELLE IMMAGINE
var autoplay = true;
for ( autoplay = 1; autoplay > 0 i++ ) {
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
