/**
 * Created by Administrator on 2016/9/26 0026.
 */
$('#search-a1').click(function () {
    $('#input-1').show();
    $('#input-2').hide();

});
$('#search-a2').click(function () {
    $('#input-2').show();
    $('#input-1').hide();
});




//轮播

var num=0;
$('.prev .pic-l').click(function () {
    num--;
    if(num==-1){
        num=4;
    }
    animate();
});
$('.next .pic-r').click(function () {
    num++;
    console.log(num);
    if(num==5){
        num=0;
    }
    animate();
});

function animate(){
    $('.pic-m').stop(true).animate({
        left:-num*292
    });

}

$('#search-span').on({
    'mouseenter': function () {
        $('#search-span ul').slideDown();
    },'mouseleave': function () {
        $('#search-span ul').slideUp();
    }
});

$('#search-span li').click(function(){
    $('#search-span em').text($(this).text())
        $('#search-span ul').slideUp();
}

);



