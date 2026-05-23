const navItems = document.querySelectorAll("li");

navItems.forEach(item => {

    item.addEventListener("click", () => {

        const text = item.textContent;

        if(text === "Home"){
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }

        if(text === "About"){
            document.querySelector(".about-skills").scrollIntoView({
                behavior: "smooth"
            });
        }

        if(text === "Projects"){
            document.querySelector(".projects").scrollIntoView({
                behavior: "smooth"
            });
        }

        if(text === "Contact"){
            document.querySelector(".contact").scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


/* Typing Animation */

const roles = [
    "Python Developer",
    "Data Analyst",
    "AI Enthusiast",
    "Flask Developer"
];

let roleIndex = 0;
let charIndex = 0;

const typingText = document.querySelector(".typing");

function typeEffect(){

    if(charIndex < roles[roleIndex].length){

        typingText.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect,100);

    }
    else{

        setTimeout(eraseEffect,1500);

    }

}

function eraseEffect(){

    if(charIndex > 0){

        typingText.textContent =
        roles[roleIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseEffect,50);

    }
    else{

        roleIndex++;

        if(roleIndex >= roles.length){
            roleIndex = 0;
        }

        setTimeout(typeEffect,300);

    }

}

typeEffect();
