let headerBar = document.querySelector(".header__bar");
let mobileNav = document.querySelector(".mobile-nav");
let mobileNavLinks = document.querySelectorAll(".mobile-nav__link");


let isMobileNavOpen = false;

headerBar.addEventListener("click",()=>{

    if(!isMobileNavOpen){
        isMobileNavOpen=!isMobileNavOpen;
        mobileNav.style.display= "flex";
        document.body.style.overflowY="hidden";
    }else{
        isMobileNavOpen=!isMobileNavOpen;
        mobileNav.style.display= "none";
        document.body.style.overflowY="auto";
    }
});


mobileNavLinks.forEach((link)=>{
    link.addEventListener("click",()=>{
        isMobileNavOpen = false;
        mobileNav.style.display= "none";
        document.body.style.overflowY="auto";
    });

});