
const navMenu = document.getElementById('nav-menu'),
    navOpen = document.getElementById('nav-open'),
    navClose = document.getElementById('nav-close'),
    menuTransparent = document.querySelector('.menu-transparent-bg')

    navOpen.addEventListener('click', ()=> {
        navMenu.classList.add('show-menu')
        menuTransparent.classList.add('show-menu')
    })

    navClose.addEventListener('click', ()=> {
        navMenu.classList.remove('show-menu')
        menuTransparent.classList.remove('show-menu')
    })

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu'),
    menuTransparent = document.querySelector('.menu-transparent-bg')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
    menuTransparent.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link'),

            document.querySelector('.nav-menu1 a[href*=' + sectionId + ']').classList.add('active-link1')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link'),

            document.querySelector('.nav-menu1 a[href*=' + sectionId + ']').classList.remove('active-link1')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
})


sr.reveal(`.nav-logo,
    .nav-item1,
    .nav-open,
    .home-data,
    .home-btn,
    .work-data,
    .footer-data,
    .footer-social-link`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.work-box,
    .footer-copyright`,{
    origin: 'bottom',
    interval: 100,
})

sr.reveal(` .about-image`,{
    origin: 'left',
})

sr.reveal(`.about-data`,{
    origin: 'right',
    interval: 100,
})




