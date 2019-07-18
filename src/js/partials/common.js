$(function() {
    // "use strict";

    var isMobile;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;

        // Mobile height fix
        $('.height-fix').each(function(){
            var h = $(this).height();
            $(this).height(h)
        })
    }

    // RESIZE RESETS
    $(window).resize(function(){
        posFilterBar($('.filter').first());
    });

    // Sticky Nav on Mobile
    if (isMobile) {
        $('#nav-menu').addClass('fixed');
    } else {
        $('#nav-menu').addClass('desk');
    }


        // NAV POSITION
        var navPos = $('#navigation').position().top;
        var lastPos = 50;
        var lockTimer

        $(window).on('scroll', function () {

            var pos = $(window).scrollTop();
            var pos2 = pos + 350;
            var scrollBottom = pos + $(window).height();

            if (!isMobile) {
                if (pos >= navPos + $('#navigation').height() && lastPos < pos) {
                    $('#navigation').addClass('fixed');
                }
                if (pos < navPos && lastPos > pos) {
                    $('#navigation').removeClass('fixed');
                }
                lastPos = pos;
            }

            // Link Highlighting
            if (pos2 > $('#home').offset().top)       { highlightLink('home'); }
            if (pos2 > $('#about').offset().top)      { highlightLink('about'); }
            if (pos2 > $('#skills').offset().top)  { highlightLink('skills'); }
            if (pos2 > $('#projects').offset().top)  { highlightLink('projects'); }
            if (pos2 > $('#contact').offset().top ||
                pos + $(window).height() === $(document).height()) {
                highlightLink('contact');
            }

            // Prevent Hover on Scroll
            clearTimeout(lockTimer);
            if(!$('body').hasClass('disable-hover')) {
                $('body').addClass('disable-hover')
            }

            lockTimer = setTimeout(function(){
                $('body').removeClass('disable-hover')
            }, 500);
        });

        function highlightLink(anchor) {
            $('#navigation .active').removeClass('active');
            $("#navigation").find('[dest="' + anchor + '"]').addClass('active');
        }

    // SCROLL ANIMATIONS
    // function onScrollInit( items, elemTrigger ) {
    //     var offset = $(window).height() / 1.6
    //     items.each( function() {
    //         var elem = $(this),
    //             animationClass = elem.attr('data-animation'),
    //             animationDelay = elem.attr('data-delay');
    //
    //         elem.css({
    //             '-webkit-animation-delay':  animationDelay,
    //             '-moz-animation-delay':     animationDelay,
    //             'animation-delay':          animationDelay
    //         });
    //
    //         var trigger = (elemTrigger) ? trigger : elem;
    //
    //         trigger.waypoint(function() {
    //             elem.addClass('animated').addClass(animationClass);
    //             if (elem.get(0).id === 'gallery') mixClear(); //OPTIONAL
    //         },{
    //             triggerOnce: true,
    //             offset: offset
    //         });
    //     });
    // }
    //
    // setTimeout(function() { onScrollInit($('.waypoint')) }, 10);

    // EVENT HANDLERS
    $('.page-link').click(function() {
        var anchor = $(this).attr("dest");
        $("#navigation").find('[dest="'+ anchor +'"]').addClass('active');
        $('html, body').animate({
            scrollTop: $('#' + anchor).offset().top,
        }, 300);
        $(this).addClass('active');
    });

    // --Page-up button
    $('.page-up').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

});







  
    



   
  
    

 