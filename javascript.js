var lang = {
    "html": "100%",
    "css": "90%",
    "javascript": "70%",
    "php": "55%",
    "angular": "65%"
};

var multiply = 4;

$.each(lang, function(language, pourcent) {

    var delay = 700;

    setTimeout(function() {
        $('#' + language + '-pourcent').html(pourcent);
    }, delay * multiply);

    multiply++;

});
$(function() {
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 10) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});

$('.cd-form .cd-email').keyup(function(event) {
    var emailInput = $(this),
        insertedEmail = emailInput.val(),
        atPosition = insertedEmail.indexOf("@");
    dotPosition = insertedEmail.lastIndexOf(".");
    //check if user has inserted a "@" and a dot
    if (atPosition < 1 || dotPosition < atPosition + 2) {
        //if he hasn't..
        //hide the submit button
        $('.cd-form').removeClass('is-active').find('.cd-loading').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    } else {
        //if he has..
        //show the submit button
        $('.cd-form').addClass('is-active');
    }
});

$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();

    $('.header-bg').css({
        opacity: function() {
            var elementHeight = $(this).height(),
                opacity = ((1 - (elementHeight - scrollTop) / elementHeight) * 0.8) + 0.2;

            return opacity;
        }
    });
});