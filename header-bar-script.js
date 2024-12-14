let bars = document.querySelectorAll(".header__bar div");
let barsContainer= document.querySelector(".header__bar");

let state=false;

    barsContainer.addEventListener("click",()=>{
        if(!state){
            state=!state;
        bars[0].style.animation="animation__for__bar1 0.3s forwards";
        bars[1].style.animation="animation__for__bar2 0.3s forwards";
        bars[2].style.animation="animation__for__bar3 0.3s forwards";
    }
    else{
        state=!state;
        bars[0].style.animation="animation__for__bar1__reverse 0.3s forwards";
        bars[1].style.animation="animation__for__bar2__reverse 0.3s forwards";
        bars[2].style.animation="animation__for__bar3__reverse 0.3s forwards";
    }
    });


