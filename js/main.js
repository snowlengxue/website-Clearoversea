/**
 * @ignore  =====================================================================================
 * @fileoverview main.js
 * @author  vicky
 * @version 1.0.0
 * @ignore  created in 2016-10-31
 * @ignore  depend Library jQuery & Materialize
 * @ignore  =====================================================================================
 */


/**
 * @control the slider
 */

$(document).ready(function(){
    $('.slider').slider({full_width: true});
    $(".dropdown-button").dropdown();
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
    $('.scrollspy').scrollSpy();
});

var h = $(document.body).height(); console.log("h"); console.log(h);
$(document.body).height();
$('.full-bg').css({
   "height": h,
});


$('#turnLeft').click(function () {
    // Previous slide
    $('.slider').slider('prev');
    $('.slider').slider('pause');
});

$('#turnRight').click(function () {
    // Previous slide
    $('.slider').slider('next');
    $('.slider').slider('pause');
})

$('.dropdown-button').dropdown( {
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown to that of the activator
        hover: true, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: true, // Displays dropdown below the button
        alignment: 'left' // Displays dropdown with edge aligned to the left of button
    }
);
$('.dropdown-button').click(function () {
   x = $('dropdown-content').hasClass("active"); console.log(x);

    if(x=="false") {
        $('dropdown-content').addClass("active");
    };

});


/**
 * @define the sidenav in the small screen
 */

$(document).ready (function() {
    $('.collapsible').collapsible();
});

// Initialize collapsible (uncomment the line below if you use the dropdown variation)
$('.collapsible').collapsible();
$('.button-collapse').sideNav({
        menuWidth: 300, // Default is 240
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
    }
);

/**
 * @the main pictures begins
 */
//遍历Right元素，放到左边的div中
if($('#picR1').css("width") == "100%") {
    var right = $('.demo-right').find('.pic');                  console.log("demo-right");    console.log(right);
    console.log("demo-right.length");    console.log(right.length);
    for(var num = right.length, i=num; i >0; i--){
        pic = $('#picR'+i+'');
        $('#picL'+i+'').after(pic);     console.log("i="+i);  console.log("pic-right");console.log(pic);
    };
};

window.onresize = function(){
    if($('#picR1').css("width") != "100%") {
        // num = $('.demo-left .pic') * .5;
        for(num = $('.demo-left .pic').length * .5, i=num;i>0;i--) {
            pic = $('#picR'+i+'');
            $('.demo-right .picContainer').append(pic); console.log("i="+i);  console.log("pic-right");console.log(pic);
        };
        console.log("demo-right.length");
    };

    if($('#picR1').css("width") == "100%") {
        var right = $('.demo-right').find('.pic');                  console.log("demo-right");    console.log(right);
        console.log("demo-right.length");    console.log(right.length);
        for(var num = right.length, i=num; i >0; i--){
            pic = $('#picR'+i+'');
            $('#picL'+i+'').after(pic);     console.log("i="+i);  console.log("pic-right");console.log(pic);
        };
    };

};



$('.pic').click( function () {

     //@获取当前id值
    console.log("the ture id is:");console.log(this.id);
    ID = this.id;           console.log("the ID goted is");console.log(ID);


     //@提取被点击pic的尾标、前缀

    tail = ID.slice(-2);      console.log("尾标是："+tail);
    dir = tail[0];            console.log("dir:"+tail[0]);
    num = tail[1];            console.log("num:"+tail[1]);
    pre = ID.slice(0,-2);     console.log("pre:"+pre);

     //@判断是L 还是 R

    opp = num;                console.log("opp:"+opp);
    if(dir=="L") {
        opp = "R" + opp ;     console.log("opp:"+opp);
    }else {
        opp = "L" + opp;      console.log("opp:"+opp);
    };

     // @确定函数中各个元素的id值

    var contentCap = $('#contentCap'+tail+' ');               console.log('#contentCap'+tail+' ');
    var source = $('#contentImg'+tail+'').attr("src");        console.log('#contentImg'+tail+' ');
    var des = $('#contentDes'+tail+'');                       console.log('#contentDes'+tail+'');


     // @开始执行动画

    //刷新mban-caption文字
    var text = contentCap.text();
    var mbanCap = $('#mbanCap');
    mbanCap.text(text);
    //刷新mban-img图片
    $('#mbanImg').attr("src",source);
    //刷新图片解释文字
    var destext = des.text();
    var mbandes = $('#mbanDes');
    mbandes.text(destext);
    //刷新主颜色
    yellow = $(this).children(".pic-cap").hasClass("caption-color-yellow");
    green = $(this).children(".pic-cap").hasClass("caption-color-green");
    blue = $(this).children(".pic-cap").hasClass("caption-color-blue");

    if(yellow) {
        // $('#mbanCap').addClass("caption-text-yellow");
        $('#mbanCap').css({
            "color":"#E78206"
        });
        $('.mban-close').append("<style>.mban-close:hover{background: #E78206}</style>");
        $('.mban-close').append("<style>.mban-close::before{background: #E78206}</style>");
        $('.mban-close').append("<style>.mban-close::after{background: #E78206}</style>");
    };
    if(green) {
        // $('#mbanCap').addClass("caption-text-green");
        $('#mbanCap').css({
            "color":"#289F8B"
        });
        $('.mban-close').append("<style>.mban-close:hover{background: #289F8B}</style>");
        $('.mban-close').append("<style>.mban-close::before{background: #289F8B}</style>");
        $('.mban-close').append("<style>.mban-close::after{background: #289F8B}</style>");

    };
    if(blue) {
        // $('#mbanCap').addClass("caption-text-blue");
        $('#mbanCap').css({
            "color":"#0964A1"
        });
        $('.mban-close').append("<style>.mban-close:hover{background: #0964A1}</style>");
        $('.mban-close').append("<style>.mban-close::before{background: #0964A1}</style>");
        $('.mban-close').append("<style>.mban-close::after{background: #0964A1}</style>");
    };

    //以上是来把相应的内容传送给模板中


     // @把模板偏移到图片下方,把2个空div分别插入到对应图片下方，高度等于300px;

    if($('.spacer').length > 0) {
        $('.spacer').remove();
        $('#mban').removeAttr('style');
    };                                                     console.log('#'+ID+'');

    //当屏幕是小屏幕时，下拉详情展开方式
    if($('.demo-right').css("display") == "none") {
        $('#'+ID+'').after("<div id='spacer1' class='spacer' style='width: 100%;height: 300px; display: none;'></div>");
        $('.spacer').slideDown(800);
        x = $('#spacer1').offset();
        $('#mban').slideDown(800);
        $('#mban').offset({top: x.top,left: this.left });             console.log('#mban:'); console.log($('#mban').offset());
        winH = $(window).height();
        h = winH * .2;
        $(document.body).animate({scrollTop: x.top - h }, 800);
    };

    //当屏幕是大屏幕时，下拉详情展开方式
    if($('.demo-right').css("display") == "inline-block"){
        $('#'+ID+'').after("<div id='spacer1' class='spacer' style='width: 100%;height: 300px; display: none;'></div>");
        $('#'+pre+''+opp+'').after("<div id='spacer2' class='spacer' style='width: 100%;height: 300px; display: none;'></div>");
        $('.spacer').slideDown(800);                                 console.log('#'+pre+''+opp+'');


        x = $('#spacer1').offset();                                   console.log('spacer1:'); console.log($('#spacer1').offset());
        xOpp = $('#spacer2').offset();                                console.log('spacer2:'); console.log($('#spacer2').offset());
        console.log("x.top");console.log(x.top);
        $('#mban').slideDown(800);
        $('#mban').offset({top: x.top,left: this.left });             console.log('#mban:'); console.log($('#mban').offset());

        //@使参差的高度统一
        parent = $("#spacer2").parent(".picContainer");               console.log("parent:");console.log($("#spacer2").parent(".picContainer"));
        y = $('#spacer2').offset();console.log("y:");                 console.log( $('#spacer2').offset());
        z = parent.offset();                                          console.log("z:");console.log(parent.offset());
        h2 = y.top - x.top;                                           console.log("h2:"+h2);
        z.top = z.top - h2;                                           console.log("z.top:"+z.top);
        parent.offset(z);console.log("parent.offset:");               console.log(parent.offset());

        //下面使description的内容始终在窗口可视区域的中间位置
        winH = $(window).height();
        h = winH * .4;
        $(document.body).animate({scrollTop: x.top - h }, 800);
    };

});

$('#mbanClose').click(function () {
    x = $('#'+ID+'').offset();
    $(document.body).animate({scrollTop: x.top}, 800);
    $('#mban').slideUp(800);
    $('.spacer').slideUp(800);
    setTimeout("$('.picContainer').removeAttr('style')",800);

});


$('#a1').click(function () {
    if(this.text=="Expand") {
        $('#u1').slideDown(800);
        $('#a1').text("Close");
    }else{
        $('#u1').slideUp(1000);
        $('#a1').text("Expand");
    }
});
$('#a2').click(function () {
    if(this.text=="Expand") {
        $('#u2').slideDown(800);
        $('#a2').text("Close");
    }else{
        $('#u2').slideUp(1000);
        $('#a2').text("Expand");
    }
});



