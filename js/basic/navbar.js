/**
 * Created by Administrator on 2017/7/20.
 */
$(document).ready(function () {
    $.ajax({
        url:"/GeoModeling/LoadUserServlet",
        type:"get",
        async:false,
        success:function(data){
            if(data==""){
                $(".nav_login").show();
                $(".nav_signup").show();
                $(".nav_hello").hide();
                $(".nav_exit").hide();
            }else {
                var user = JSON.parse(data);
                $(".nav_login").hide();
                $(".nav_signup").hide();
                $(".nav_hello").empty();
                $(".nav_hello").append("<a title='"+user.uid+"' href='/GeoModeling/En/userCenter/userSpace.html'><strong>"+user.uname+"</strong></a>");
                $(".nav_hello").show();
                $(".nav_exit").show();
            }
        }
    });

    $(".navbar-nav > li").hover(function () {
        $(".navbar-nav > li").children("a").removeClass("select");
        $(this).children("a").addClass("select");
    });

    $('ul.nav li.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeIn(200);
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeOut(200);
    });

    $(".nav-types h3").hover(function () {
        $(".nav-types h3").removeClass("current");
        $(this).addClass("current");
        var dataType = $(this).attr("data-type-num");
        $(this).parent().siblings(".nav-content").children("li").removeClass("current");
        $(this).parent().siblings(".nav-content").children("li").eq(dataType).addClass("current");
    });

    $(document).on("click",".nav_exit",function(){
        $.ajax({
            url:"/GeoModeling/LoginOutServlet",
            type:"get",
            success:function(data){
                window.location.href="/GeoModeling/En/home/index.html";
            },
            error:function(data){
                alert('error');
            }
        });
    });

    $("#phone-list #nav_exit").click(function () {
        $.ajax({
            url:"/GeoModeling/LoginOutServlet",
            type:"get",
            success:function(data){
                window.location.href="/GeoModeling/En/home/index.html";
            },
            error:function(data){
                alert('error');
            }
        });
    });

    $(document).on("click","#phoneBtn",function () {
        $(".phonenav").animate({height: 'toggle', opacity: 'toggle'});
    });

    $(window).resize(function () {
        var w =document.body.clientWidth;
        if(w>767){
            $(".phonenav").hide();
        }
    });
});

jQuery(document).ready(function () {
    jQuery("#jquery-accordion-menu").jqueryAccordionMenu();

});

$(function(){
    //顶部导航切换
    $("#phone-list li").click(function(){
        $("#phone-list li.active").removeClass("active")
        $(this).addClass("active");
    })
})
