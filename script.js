let projects =[
    {
        title:"grocery bud",
        img_src:"Pics/grocery bud.png",
        desc:"This project is Grocery Bud, here you can list grocery items to buy. Lists will be saved locally so you can access it any time. You will be able to edit or delete the list if you want. ",
        project_link:"https://grocery-bud-bygaurav.vercel.app/",
    },
    {
        title:"age calculator",
        img_src:"Pics/age calculator.png",
        desc:"In this project you can calculate your exact Age upto hour, min and sec. You will need to enter your exact birth date and time. ",
        project_link:"https://age-calculator-bygaurav.vercel.app/",
    },
    {
        title:"qr code generator",
        img_src:"Pics/qr code generator.png",
        desc:"In this project you can generate QR code of any text/URL you want. To generate QR code just enter the text/URL in input area to generate.",
        project_link:"https://qr-code-generator-gp.vercel.app/",
    },
    {
        title:"Simple Calculator",
        img_src:"Pics/calculator.png",
        desc:"This is just a simple calculator which I made as a newbie ,here you can perform very simple calculation.",
        project_link:"https://calculator-six-hazel.vercel.app/",
    },
    {
        title:"Analog Watch",
        img_src:"Pics/analog watch.png",
        desc:"This project is Analog watch which is fully functional, it is completely made using HTML,CSS and JS . ",
        project_link:"https://analog-watch-g.vercel.app/",
    },
    {
        title:"menu page",
        img_src:"Pics/menu page.png",
        desc:"This project is a clone of menu page ,it consist of different section for lunch,breakfast,shakes and desserts. ",
        project_link:"https://menu-page-gaurav.vercel.app/",
    },
    {
        title:"tic tac toe",
        img_src:"Pics/tic tac toe.png",
        desc:"It is a simple and popular game named Tic Tac Toe ,you can paly it locally with your friend . ",
        project_link:"https://tic-tac-toe-gaurav.vercel.app/",
    },
    {
        title:"CountDown",
        img_src:"Pics/Count down.png",
        desc:"In this project it shows a countdown for a old Iphone giveaway. It will always be 4 days ahead of your current time. ",
        project_link:"https://count-down-bygaurav.vercel.app/",
    },
    {
        title:"Review Page",
        img_src:"Pics/review page.png",
        desc:"In this project you can review random peoples. I have used HTML, CSS and simple JS in this page. ",
        project_link:"https://reviews-chi-beryl.vercel.app/",
    },
    {
        title:"Color flipper",
        img_src:"Pics/color flipper.png",
        desc:"Here you can generate infinite color in RGB code or Hex code, colors generated will be displayed on the screen and will set to bg. ",
        project_link:"https://color-flipper-nine-delta.vercel.app/",
    },
    {
        title:"Stop watch",
        img_src:"Pics/stop watch.png",
        desc:"This project is a simple Stop watch, here you can get exact time upto milisecs.",
        project_link:"https://stop-watch-g.vercel.app/",
    },
    {
        title:"video project",
        img_src:"Pics/video project.png",
        desc:"It is just a simple project where a video is playing in the bcakground, you can play/pause the video if you want. This project also consist of a pre-loader.",
        project_link:"https://video-project-with-pre-loader.vercel.app/",
    },
    {
        title:"scroll project",
        img_src:"Pics/scroll project.png",
        desc:"This project is a simple scroll project where you can navigate through different section by clicking on the link in navbar.",
        project_link:"https://scroll-project-gaurav.vercel.app/",
    },
    {
        title:"counter",
        img_src:"Pics/counter.png",
        desc:"This is a very simple counter which I made as a begginer, here you can increase, decrease or clear the counter.",
        project_link:"https://counter-nine-dusky.vercel.app/",
    }


];



// WORK CONTAINER

let workContainer = document.querySelector(".work__container");


window.addEventListener("DOMContentLoaded",()=>{
    displayProjects();
});

function displayProjects(){
    let string = projects.map((p)=>{

        return ` <div class="work__container__content">
                <h1 class="work__content__title1 work__content__title">${p.title}</h1>
                <div class="work__img_wrapper">
                    <img class="work__img" src="${p.img_src}" alt="">
                </div>
                
                <div class="work__container__content__details">
                    <h1 class="work__content__title2 work__content__title">${p.title}</h1>
                    <p class="work__container__content__desc">${p.desc}</p>
                    <a href="${p.project_link}" class="project__link btn">Visit</a>
                </div>
            </div>`
    })

    string= string.join("");
    workContainer.innerHTML=string;
}