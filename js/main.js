var elSiteheaderToggleBtn = document.querySelector(".header-wrap__btn");
var elHeader = document.querySelector(".site-header");

elSiteheaderToggleBtn.addEventListener("click", function(){
    elHeader.classList.toggle("site-header--open");
})