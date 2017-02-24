/**
 * Created by vicky on 2016/11/21.
 */
$(document).ready(function(){
    $('.parallax').parallax();
});
var mySwiper = new Swiper('.swiper-container',{
    autoplay: 5000,//可选选项，自动滑动
    loop : true,
    slidesPerView : 6,
    spaceBetween : 20,
    prevButton:'.swiper-button-prev',
    nextButton:'.swiper-button-next'
});

