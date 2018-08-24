define(['jquery', 'swiper'], function($, Swiper) {
    var mySwiper = new Swiper('.banner')
    $('header').on('click', 'span', function() {
        $(this).addClass('active').siblings().removeClass('active');
        var ind = $(this).index();
        mySwiper.slideTo(ind)
    })

})