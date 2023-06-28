{
    let stars = document.querySelector(".welcome-stars__img");
    let stars2 = document.querySelector(".welcome-stars2__img");
    let earthPlanet = document.querySelector(".welcome-planet__lottie");
    let rocket = document.querySelector(".welcome-rocket__lottie");
    let astronauta = document.querySelector(".welcome-astronaunta__lottie");
    let commet = document.querySelector(".welcome-saturn__lottie");
    let aliens = document.querySelector(".welcome-alien__lottie");
    let welcomeText = document.querySelector(".welcome-text");
    let planet_behind = document.querySelector(".welcome-backplanet__lottie");
    
    window.addEventListener("scroll", function () {
        let value = window.scrollY;
        stars2.style.right = value * .5 + "px";
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
        welcomeText.style.marginTop = value * .3 + "px";
    })
}
