
$(document).ready(function(){
    var offset = 200;
    var duration = 500;
    $(window).scroll(function () {
        // console.log("đang scroll");
        if ($(this).scrollTop() > offset) {
            $('.to-top').fadeIn(duration);
        }
        else {
            $('.to-top').fadeOut(duration);
        }

    });
    $('.to-top').click(function(){
        $('html').animate({scrollTop:"0"},1000);

    });

});
  