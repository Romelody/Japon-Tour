$(document).ready(function () {

    function changeBackgroundHeader(){
        var header = $('#mainHeader');

        $(window).on('scroll', function(){
            var scrollIntop = $(window).scrollTop() === 0;


            if(!scrollIntop){
                header.addClass ('bg-white');
            } else {
                header.removeClass ('bg-white');
            }
        });
    };

    changeBackgroundHeader();}

//PROBAR MAS AL RATON

    function smoothScroll(){
        var smooth
    }
});