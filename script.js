{
    let stars = document.querySelector(".welcome-stars__img");
    let earthPlanet = document.querySelector(".welcome-planet__lottie");
    let rocket = document.querySelector(".welcome-rocket__lottie");
    let astronauta = document.querySelector(".welcome-astronaunta__lottie");
    let commet = document.querySelector(".welcome-commet__lottie");
    let aliens = document.querySelector(".welcome-alien__lottie");
    
    let planet_behind = document.querySelector(".welcome-backplanet__lottie");
    // let btn = document.querySelector(".btn");
    // let mountains_front = document.querySelector("#mountains_front");
    // let header = document.querySelector("header");
    
    window.addEventListener("scroll", function () {
        let value = window.scrollY;
        stars.style.left = value * 2 + "px";
        commet.style.top = value * .45 + "px";
        commet.style.left = value * .25 + "px";
        earthPlanet.style.top = value * .4 + "px";
        earthPlanet.style.right = value * .25 + "px";
        astronauta.style.bottom = value * .25 + "px";
        planet_behind.style.left = value * .25 + "px";
        planet_behind.style.bottom = value * .25 + "px";
        rocket.style.marginTop = value * .8 + "px";
        rocket.style.marginLeft  = value * 2.5 + "px";
        aliens.style.marginRight = value * .2 + "px";

        // btn.style.marginTop = value * 1.5 + "px";
        // header.style.top = value * 0.5 + "px"; 
    })
}
