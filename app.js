const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        //Toggle nav
        nav.classList.toggle('nav-active');
        
        //Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }        
        });

        //Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();

const hero = document.querySelector('.hero'); 
const slider = document.querySelector('.slider');
const bar = document.querySelector('nav'); 
const logo = document.querySelector('#logo'); 
const options = document.querySelectorAll('#options'); 
const headline = document.querySelector('.headline');
const subline = document.querySelector('.subline');

const tl = new TimelineMax();

tl.fromTo(hero, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
  .fromTo(hero, 1.2, { width: "100%" }, { width: "80%", ease: Power2.easeInOut } )
  .fromTo(slider, 1.2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut }, "-=1.2" )
  .fromTo(bar, 0.2, { opacity: 0 }, { opacity: 1 })
  .fromTo(logo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 })
  .fromTo(options, 0.5, { opacity: 0 }, { opacity: 1 }, "-=0.5")
  .fromTo(headline, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: -90 }, "-=0.5")
  .fromTo(subline, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: -74 }, "-=0.5");

