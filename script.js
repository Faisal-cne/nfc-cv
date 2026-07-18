// =========================
// Scroll Reveal
// =========================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");

    observer.observe(section);

});

// =========================
// Active Navbar
// =========================

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-150;

        if(scrollY>=top){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

// =========================
// Navbar Blur
// =========================

const nav=document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY>40){

        nav.style.background="rgba(5,7,13,.88)";
        nav.style.boxShadow="0 15px 40px rgba(0,0,0,.35)";

    }else{

        nav.style.background="rgba(5,7,13,.65)";
        nav.style.boxShadow="none";

    }

});

// =========================
// Mouse Glow
// =========================

document.addEventListener("mousemove",(e)=>{

    const blur=document.querySelector(".blur1");

    const x=e.clientX*0.03;

    const y=e.clientY*0.03;

    blur.style.transform=`translate(${x}px,${y}px)`;

});

// =========================
// Card Hover Tilt
// =========================

document.querySelectorAll(".card,.project,.skill-card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;
        const y=e.clientY-rect.top;

        const rotateY=((x/rect.width)-0.5)*10;
        const rotateX=((y/rect.height)-0.5)*-10;

        card.style.transform=
        `perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-8px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});

// =========================
// Typing Effect
// =========================

const title=document.querySelector(".small-text");

const text="COMPUTER ENGINEER";

let i=0;

title.innerHTML="";

function type(){

    if(i<text.length){

        title.innerHTML+=text.charAt(i);

        i++;

        setTimeout(type,80);

    }

}

type();

// =========================
// Smooth Buttons
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});
