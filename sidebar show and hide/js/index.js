var mybutton = document.querySelector("#main .mybutton button");


mybutton.addEventListener("click", function () {

    var myside = document.querySelector("#sidebar .mysidebar");
    myside.style.visibility = " visible";
    myside.style.width = "25%";

})

var closebutton = document.querySelector("#sidebar .mysidebar .icon");



closebutton.addEventListener("click",function(){
    var myside = document.querySelector("#sidebar .mysidebar");
    myside.style.visibility = " hidden";
    myside.style.width = "0";
    myside.style.transition="2s";
    myside.style.transitonTimingFunction ="linear";

})