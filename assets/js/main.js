/*=============== SHOW MENU ===============*/
const showMenu = (navId, toggleId) => {
   const nav = document.getElementById(navId),
         toggle = document.getElementById(toggleId)

   toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu')
   })
}
showMenu('nav-menu', 'nav-toggle')


/*=============== REMOVE MENU MOBILE ===============*/

const linkAction = () =>{
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== CHANGE HEADER STYLES ===============*/
const scrollHeader = () =>{
   const header = document.getElementById('header')
   // Add the .scroll-header class if the bottom scroll of the viewport is greater than 50
   this.scrollY >= 50 ? header.classList.add('scroll-header') 
                      : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== ADD SHADOW HEADER ===============*/


/*=============== SWIPER REVIEWS ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
