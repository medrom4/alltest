$(window).scroll(function() {
    var scroll_position = $(window).scrollTop()/2;
    $('section').css({
        'background-position-x': -scroll_position + 'px',
    })
})
