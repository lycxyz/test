/**
 * Created by Administrator on 2017/7/21.
 */
var clientW =document.body.clientWidth;
var rightW = clientW*0.02;
var w = $("#main > .row").width();
$("#rightPanel").width(w-300-rightW);
$(window).resize(function () {
    var clientW =document.body.clientWidth;
    var rightW = clientW*0.02;
    var w = $("#main > .row").width();
    $("#rightPanel").width(w-300-rightW);
});