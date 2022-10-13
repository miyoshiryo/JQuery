/*--ハンバーガーメニュー--*/
window.onunload=function(){};

function sizecheck(){
    w = window.innerWidth ? window.innerWidth : $(window).width;
    h = window.innerHeight ? window.innerHeight : $(window).height;
}

sizecheck();

$(function(){
     
    if (w>769) {  
    }else{
        $("header .drawer").click(function(){
            $('body').toggleClass('nav-open');
            $('header .nav_bar').fadeToggle(200);
        });

        $("header li a").click(function () {
            $('body').toggleClass('nav-open');
            $('header .nav_bar').fadeToggle(200);
        });
    }
});


/*--ローディング--*/
const loadAnime = $('.loading_bg');

$(window).on('load', function(){
    loadAnime.delay(1500).fadeOut(800);
});

function stopload(){
    loadAnime.delay(1000).fadeOut(700);
}

setTimeout('stopload()', 10000);


/*--スライドショー(fade)--*/
$('.slider').slick({
    fade:true,
    autoplaySpeed:4500,//自動再生の速度
    speed:1800,//スライド自体の速度
    autoplay:true,//自動再生の設定
    infinite:true,//永続化
    slideToShow:1,//スライド数
    slideToScroll:1,//スライドのスクロール数
    arrows:true,//矢印の表示
    prevArrow:'<div class="slick_prev"></div>',//矢印部分のHTML変更
    nextArrow:'<div class="slick_next"></div>',//矢印部分のHTML変更
    dots:true,//下部ドットナビゲーションの表示
    pauseOnFocus:false,//フォーカス時の一時停止の設定
    pauseOnHover:false,//マウスホバー時の一時停止の設定
    pauseOnDotsHover:false,//ドットマウスホバー時の一時停止の設定
});


/*--スクロールアニメーション--*/
function fadeIn() {
    //fadeUp
    $('.fadeUpTrigger').each(function () {
        let scroll = $(window).scrollTop();
        let triTop = $(this).offset().top + 100;
        let winHeight = $(window).height();

        console.log(scroll);
        console.log(triTop);
        console.log(winHeight);

        if (scroll >= triTop - winHeight){
            $(this).addClass('fadeUp');
        }else{
            $(this).removeClass('fadeUp');
        }
    });

    //fadeDown
    $('.fadeDownTrigger').each(function () {
        let scroll = $(window).scrollTop();
        let triTop = $(this).offset().top + 300;
        let winHeight = $(window).height();

        console.log(scroll);
        console.log(triTop);
        console.log(winHeight);

        if (scroll >= triTop - winHeight){
            $(this).addClass('fadeDown');
        }else{
            $(this).removeClass('fadeDown');
        }
    });

    //fadeLeft
    $('.fadeLeftTrigger').each(function(){
        let scroll = $(window).scrollTop();
        let triTop = $(this).offset().top + 100;
        let winHeight = $(window).height();
        if(scroll >= triTop - winHeight){
            $(this).addClass('fadeLeft');
        }else{
            $(this).removeClass('fadeLeft');
        }
    });

    //fadeRight
    $('.fadeRightTrigger').each(function(){
        let scroll = $(window).scrollTop();
        let triTop = $(this).offset().top + 100;
        let winHeight = $(window).height();
        if(scroll >= triTop - winHeight){
            $(this).addClass('fadeRight');
        }else{
            $(this).removeClass('fadeRight');
        }
    });
}

$(window).scroll(function(){
    fadeIn();
});


/*--スライドショー(autoplay)--*/

$('.feature_slider').slick({
    autoplaySpeed:4500,//自動再生の速度
    speed:1800,//スライド自体の速度
    autoplay:true,//自動再生の設定
    infinite:true,//永続化
    slideToShow:3,//スライド数
    slideToScroll:1,//スライドのスクロール数
    arrows:true,//矢印の表示
    prevArrow:'<div class="slick_prev"></div>',//矢印部分のHTML変更
    nextArrow:'<div class="slick_next"></div>',//矢印部分のHTML変更
    dots:true,//下部ドットナビゲーションの表示
    pauseOnFocus:false,//フォーカス時の一時停止の設定
    pauseOnHover:false,//マウスホバー時の一時停止の設定
    pauseOnDotsHover:false,//ドットマウスホバー時の一時停止の設定
    centerMode: true, // slidesToShowが奇数のとき、現在のスライドを中央に表示する
});

