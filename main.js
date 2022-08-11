// NAV bar menu
const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

// ANIMATION USING GSAP LIBRARY
// First Animation
TweenMax.to(".home_first", 2, {
    width: "100%",
    ease: Expo.easeInOut
})

gsap.from('.home_title', {opacity: 0, duration: 2, delay: 1.5, y: 100})
gsap.from('.home_img img', {opacity: 0, duration: 2, delay: 1.5, y:-100})

// Second Animation
TweenMax.to(".home_second", 2.5, {
    width: "100%",
    ease: Expo.easeInOut
})

gsap.from('.home_scroll', {opacity: 0, duration: 3, x: -100})
gsap.from('.car_year', {opacity: -1, duration: 1.5, delay: 1.5, x: 100})