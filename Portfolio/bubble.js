/*$("button").click(function () {
    $(".items").slideToggle(500);
})*/

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

/*
function blink() {
    $("#logo").fadeOut();
    $("#logo").fadeIn();
}

setInterval(blink,2000);*/

function blinks() {
    $("#exml").fadeOut();
    $("#exml").fadeIn();
}

setInterval(blinks,1000);