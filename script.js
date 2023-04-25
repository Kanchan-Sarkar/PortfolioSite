/*======================== MENU SHOW Y HIDDEN ===================================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


/*======================== MENU SHOW  ===================================*/
/* Validate if constant exists*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*======================== MENU SHOW  ===================================*/
/* Validate if constant exists*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*======================== REMOVE MENU MOBILE  ===================================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //When we click on each nav__link, we remove the show-menu class 

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*======================== ACCORDION SKILLS  ===================================*/

const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i =0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

/*======================== QUALIFICATION TABS  ===================================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*======================== SERVICES MODAL  ===================================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')


let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i)
    } )
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', ()=>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})

/*======================== Projects  ===================================*/
// Acessing & Storing elements
var allFilters = document.querySelectorAll('section.btns li.btn');
var allCards = document.querySelectorAll('section.gallery div.card');

//Add a click event to all the buttons
for(var i =0; i < allFilters.length; i++){
    allFilters[i].addEventListener('click', myFunction);
}

//Define the function
function myFunction(){
    //Acess the button which has active class
    // And remove the active class
    var currentTab = document.querySelector('section.btns .active');
    currentTab.classList.remove('active');
    //add active class to the button which is clicked
    this.classList.add('active')

    // Get the value of the data-filter attribute of the clicked button
    var filter = this.getAttribute('data-filter');
    //If any of the button is clicked  except the 'ALL' button then,
    //show the contents of the clicked button and hide the contents of all other buttons.
    if(filter != 'all'){
        for(let i=0; i < allCards.length; i++){
            allCards[i].classList.add('hide');
            allCards[i].classList.remove('active');
            var currentItem = allCards[i].getAttribute('data-item');
            if(currentItem == filter){
                allCards[i].classList.add('active');
                allCards[i].classList.remove('hide');
            }
        }
    }
    else{
        for(let i=0; i < allCards.length; i++){
            allCards[i].classList.remove('hide');
            allCards[i].classList.add('active');
        }
    }
}