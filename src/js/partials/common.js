$(function() {
    "use strict";

    // NAV POSITION
    var navPos = $('nav').position().top;
    var lastPos = 0;
    var lockTimer
    //
    $(window).on('scroll', function () {
        var pos = $(window).scrollTop();
        var pos2 = pos + 450;
        var scrollBottom = pos + $(window).height();

        // Link Highlighting
        if (pos2 > $('#about').offset().top)       { highlightLink('about'); }
        if (pos2 > $('#myProjects').offset().top)       { highlightLink('myProjects'); }
        if (pos2 > $('#contactMe').offset().top)       { highlightLink('contactMe'); }


        function highlightLink(anchor) {
            $('nav .active').removeClass('active');
            $("nav").find('[dest="' + anchor + '"]').addClass('active');
        }

    });

    // EVENT HANDLERS
    $('.page-link').click(function() {

        var anchor = $(this).attr("dest");

        $("nav").find('[dest="'+ anchor +'"]').addClass('active');

        $('html, body').animate({
            scrollTop: $('#' + anchor).offset().top
        }, 400);
        // $(this).addClass('active');
    });











});







  
    



   
  
    

 