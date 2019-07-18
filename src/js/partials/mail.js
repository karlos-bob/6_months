$(document).ready(function () {

    $('#mail-form').submit(function (e) {
        e.preventDefault();

        $('#success').addClass('expand');
        $('#mail-form').find("input[type=text], input[type=email], textarea").val("");
        $('#close').click(function() {
            $('#success').removeClass('expand');
        })
    //     $.ajax({
    //         url: "https://formspree.io/jijalikk@gmail.com",
    //         method: "POST",
    //         data: { message: $('form').serialize() },
    //         dataType: "json",
    //     }).done(function() {
    //        $('#success').addClass('expand');
    //         $('#mail-form').find("input[type=text], input[type=email], textarea").val("");
    //     });
    //     return false;
    //
    })

});