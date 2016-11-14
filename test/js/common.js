/**
 * Created by Administrator on 2016/10/2 0002.
 */
$('#com-search-span').on({
    'mouseenter': function () {
        $('#com-search-span ul').slideDown();
    },'mouseleave': function () {
        $('#com-search-span ul').slideUp();
    }
});

$('#com-search-span li').click(function(){
        $('#com-search-span em').text($(this).text())
        $('#com-search-span ul').slideUp();
    }

);
