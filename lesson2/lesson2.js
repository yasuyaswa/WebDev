function showMessage() {
    var message = "Very Good Morning, Yaswanth";
    document.getElementById("good").innerHTML = message;
}
function ShowDate(){
    document.getElementById('date').innerHTML = Date()
}
$(function(){
    $("#name").html('Yaswanth');
});
$(window).on("load",function(){
    $("#name").css('color', 'purple');
});
$("#name").css({color:'blue', fontSize: '20px'});
$("#name").hide(1000);
$("#name").hide(1000).show(1000);

