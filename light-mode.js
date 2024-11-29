let toggleBtns = document.querySelectorAll("#light-mode-toggle");

// get theme 
let theme = localStorage.getItem("theme");


//On mount
theme && document.body.classList.add("light-mode");

toggleBtns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        document.body.classList.toggle("light-mode");
        if(document.body.classList.contains("light-mode")){
            localStorage.setItem("theme","light-mode");
        }
        else{
            localStorage.removeItem("theme");
        }
       

    })
});