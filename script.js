@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;600&family=Herr+Von+Muellerhoff&family=Hind+Siliguri:wght@600&family=Indie+Flower&family=Jost:wght@300;500;700&family=Kaushan+Script&family=Koulen&family=Leckerli+One&family=Montaga&family=Niconne&family=Open+Sans:wght@600&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,500&family=Red+Hat+Display:ital@1&family=Roboto+Slab&family=Roboto:ital,wght@0,100;0,900;1,100;1,900&family=Satisfy&family=Sirin+Stencil&display=swap');
 

:root{
    ---header-height: 3rem;

    /*================ COLORS ===============*/
    --hue-color: #FFCB74;

    /*HSL COLOR MODE*/
    /*--first-color:hsl(250, 76%, 64%);
    --first-color-second: hsl(250, 76%, 64%);
    --first-color-alt: hsl(250, 64%, 56%);
    --first-color-lighter: hsl(250, 92% 85%);*/
    --title-color: hsl(250, 8%, 15%);
    --text-color: hsl(250, 8%, 45%);
    --title-color-light: hsl(250, 8%, 65%);
    --input-color: hsl(250, 70%, 96%);
    --body-color: hsl(250, 60%, 99%);
    --container-color: #FFF;
    --first-color:#ffc45f;
    --first-color-second: #d3a350;
    --first-color-lighter: #ede5d8;


    /*===================== Font & Typography ==============================*/
    --body-font: 'Poppins', sans-serif;

    /* .5rem = 8px, 1rem = 16px, 1.5rem = 24px */

    --big-font-size:2rem;
    --h1-font-size: 1.5rem;
    --h2-font-size:1.25rem;
    --h3-font-size: 1.125rem;
    --normal-font-size: .938rem;
    --small-font-size: .813rem;
    --smaller-font-size: .75rem;

    /*======================= Font Weight=================================*/
    --font-medium: 500;
    --font-semi-bold: 600;

     /*======================= Margenes Bottom =================================*/
      /* .25rem = 4px, .5rem = 8px, .75rem = 12px .......*/
      --mb-0-25: .25rem;
      --mb-0-5: .5rem;
      --mb-0-75: .75rem;
      --mb-1: 1rem;
      --mb-1-5: 1.5rem;
      --mb-2: 2rem;
      --mb-2-5: 2.5rem;
      --mb-3: 3rem;
     /*======================= z-index =================================*/
     --z-tooltip: 10;
     --z-fixed:100;
     --z-model: 1000;
}
     /*======================= Font size for Large Devices=================================*/
     @media screen and (min-width: 968px) {
        :root {
            --big-font-size:3rem;
            --h1-font-size: 2.25rem;
            --h2-font-size:1.5rem;
            --h3-font-size: 1.25rem;
            --normal-font-size: 1rem;
            --small-font-size: .875rem;
            --smaller-font-size: .813rem;
        }
     }

/*======================= Base =================================*/
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

html{
    scroll-behavior: smooth;
}

body{
    margin: 0 0 var(---header-height) 0;
    font-family: var(--body-font);
    font-size: var(--normal-font-size);
    background-color: var(--body-color);
    color: var(--text-color);
}
h1,h2,h3{
    color: var(--title-color);
    font-weight: var(--font-semi-bold);
}

ul{
    list-style: none;
}

a{
    text-decoration: none;
}

img{
    max-width: 100%;
    height: auto;
}
/*====================== REUSABLE CSS CLASSES =================================*/
.section{
    padding: 2rem 0 4rem;
}

.section__title{
    font-size: var(--h1-font-size);
}
.section__subtitle{
    display: block;
    font-size: var(--small-font-size);
    margin-bottom: var(--mb-3);
}

.section__title, .section__subtitle{
    text-align: center;
}

/*=========================== LAYOUT ===================================*/
.container{
    max-width: 768px;
    margin-left: var(--mb-1-5);
    margin-right: var(--mb-1-5);
}

.grid{
    display: grid;
    gap: 1.5rem;
}

.header{
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: var(--z-fixed);
    background-color: var(--body-color);
}

/*=========================== NAV ===================================*/
.nav{
   max-width: 968px;
   height: var(---header-height);
   display: flex;
   justify-content: space-between;
   align-items: center;
}

.nav__logo, .nav__toggle{
    color: var(--title-color);
    font-weight: var(--font-medium);
}
.nav__logo:hover{
    color: var(--first-color);
}
.nav__toggle{
    font-size: 1.1rem;
    cursor: pointer;
}
.nav__toggle:hover{
    color: var(--first-color);
}
@media screen and (max-width: 767px) {
    .nav__menu{
        position: fixed;
        bottom: -100%;
        left: 0;
        width: 100%;
        background-color: var(--body-color);
        padding: 2rem 1.5rem 4rem;
        box-shadow: 0 -1px 4px rgba(0, 0, 0, .15);
        border-radius: 1.5rem 1.5rem 0 0;
        transition: .3s;
    }
}

.nav__list{
    grid-template-columns: repeat(3,1fr);
    gap: 2rem;
}

.nav__link{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: var(--small-font-size);
    color: var(--title-color);
    font-weight: var(--font-medium);
}

.nav__link:hover{
    color: var(--first-color);
}

.nav__icon{
    font-size: 1.2rem;
}
.nav__close{
    position: absolute;
    right: 1.3rem;
    bottom: .5rem;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--first-color);
}

.nav__close:hover{
    color: var(--first-color-alt);
}

/* show menu */
.show-menu{
    bottom: 0;
}

/* ACtive Link */

.active-link{
    color: var(--first-color);
}

/* Change Background header */

.scroll-header{
    box-shadow: 0 -1px 4px rgba(0, 0, 0, .15);
}


/*============================ HOME =====================================*/
.home__container{
    gap: 1rem;
}

.home__content{
    grid-template-columns:  .5fr 3fr;
    padding-top: 3.5rem;
    align-items: center;
}

.home__social{
    display: grid;
    grid-template-columns: max-content;
    row-gap: 1rem;
}

.home__social-icon{
    font-size: 1.25rem;
    color: var(--first-color);
}
.home__social-icon:hover{
    fill: var(--first-color-alt);
}

.home__img{
    background-color: #ffc6ff;
    border-radius: 50%;
}

.home__blob-img{
    width: 150px;
    margin-top: 85px;

}

.home__data{
    grid-column: 1/3;
}
.home__title{
    font-size: var(--big-font-size);
}

.home__subtitle{
    font-size: var(--h3-font-size);
    color: var(--text-color);
    font-weight: var(--font-medium);
    margin-bottom: var(--mb-0-75);
}

.home__description{
    margin-bottom: var(--mb-2);
}

.home__scroll{
    /*display: none;*/
}


.home__scroll-button{
    color: var(--first-color);
    transition: .3s;
}

.home__scroll-button:hover{
    transform: translateY(.25rem);
}

.home__scroll-mouse{
    font-size: 2rem;
}
.home__scroll-name{
    font-size: var(--small-font-size);
    color: var(--title-color);
    font-weight: var(--font-medium);
    margin-right: var(--mb-0-25);
}

.home__scroll-arrow{
    font-size: 1.25rem;
}


/*============================  BUTTONS =====================================*/
.button{
    display: inline-block;
    background-color: var(--first-color);
    color: #2f2f2f;
    padding: 1rem;
    border-radius: .5rem;
    font-weight: var(--font-medium);
}


.button:hover{
    background-color: var(--first-color-second);
    border: #2f2f2f;
}

.button__icon{
    font-size: 1.25rem;
    margin-left: var(--mb-0-5);
    transition: .3s;
        
}
.button--white{
    background-color: #FFF;
    color: var(--first-color);
}
.button--flex{
    display: inline-flex;
    align-items: center;
}
.button--white:hover{
    background-color: #FFF;
}

.button--small{
    padding: .75rem 1rem;
}

.button--link{
    padding: 0;
    background-color: transparent;
    color: var(--first-color);
}

.button--link:hover{
    background-color: transparent;
    color: var(--first-color-alt);
}
/*============================= ABOUT =========================================*/

.section__title{
   text-align: center;
}

 .section__subtitle{
    text-align: center;
}

.about__img{
    width: 200px;
    border-radius:.5rem;
    justify-self: center;
    align-self: center;
    margin-top: 20px;
}
.about__data{
    text-align: center;
    margin-bottom: var(--mb-2-5);
}
.about__info{
    display: flex;
    justify-content: space-evenly;
    margin-bottom: var(--mb-2-5);
}

.about__info-title{
    font-size: var(--h2-font-size);
    font-weight: var(--font-semi-bold);
    color: var(--title-color);
}

.about__info-name{
    font-size: var(--smaller-font-size);
}

.about__info-title, .about__info-name{
    display: block;
    text-align: center;
}

.about__button{
    display: flex;
    justify-content: center;
}

/*============================= SKILLS =========================================*/
.skills__container{
    row-gap: 0;
}
.skills__header{
    display: flex;
    margin-top: 20px;
    align-items: center;
    margin-bottom: var(--mb-2-5);
    cursor: pointer;

}
.skills__icon,
.skills__arrow{
    font-size: 2rem;
    color: var(--first-color);
}

.skills__icon{
    margin-right: var(--mb-0-75);
}
.skills__title{
    font-size: var(--h3-font-size);
}
.skills__subtitle{
    font-size: var(--small-font-size);
    color: var(--text-color);
}
.skills__arrow{
    margin-left: auto;
    transition: .4s;
}

.skills_list{
    row-gap: 1.5rem;
    padding-left: 2.7rem;
}
.skills__titles{
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--mb-0-5);
}
.skills__name{
    font-size: var(--normal-font-size);
    font-weight:var(--font-medium) ;
}
.skills__bar, .skills__percentage{
    min-height: 5px;
    border-radius: .25rem;
}
.skills__bar{
    background-color: var(--title-color-light);
}
.skills__percentage{
    display: block;
    background-color: var(--first-color);
}

.skills__html{
    width: 92%;
}
.skills__css{
    width: 89%;
}
.skills__js{
    width: 79%;
}
.skills__ecmascript{
    width: 50%;
}
.skills__python3{
    width: 80%;
}
.skills__opencv{
    width: 50%;
}
.skills__beautifulsoup{
    width: 40%;
}
.skills__pandas{
    width: 70%;
}
.skills__nlp{
    width: 65%;
}
.skills__figma{
    width: 92%;
}
.skills__canva{
    width: 70%;
}
.skills__english{
    width: 70%;
}
.skills__bengali{
    width: 80%;
}
.skills__java{
    width: 70%;
}
.skills__sql{
    width: 90%;
}
.skills__close .skills__list{
    height: 0;
    overflow: hidden;
}
.skills__open .skills__list{
    height: max-content;
    margin-bottom: var(--mb-2-5);
}
.skills__open .skills__arrow{
    transform: rotate(-180deg);
}
/*============================= QUALIFICATION =========================================*/

.qualification__tabs{
    display: flex;
    justify-content: space-evenly;
    margin-bottom: var(--mb-2);
    margin-top: 22px;
}
.qualification__button{
    font-size: var(--h3-font-size);
    font-weight: var(--font-medium);
    cursor: pointer;
}
.qualification__button:hover{
    color: var(--first-color);
}

.qualification__icon{
    font-size: 1.8rem;
    margin-right: var(--mb-0-25);
}

.qualification__data{
    display: grid;
    grid-template-columns: 1fr max-content 1fr ;
    column-gap: 1.5rem;
}

.qualification__title{
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
}

.qualification__subtitle{
    display: inline-block;
    font-size: var(--small-font-size);
    margin-bottom: var(--mb-1);
}
.qualification__calender{
    font-size: var(--smaller-font-size);
    color: var(--text-color);
}

.qualification__rounder{
    display: inline-block;
    width: 13px;
    height: 13px;
    background-color: var(--first-color);
    border-radius: 50%;
}
.qualification__Line{
    display: block;
    width: 1px;
    height: 100%;
    background-color: var(--first-color);
    transform: translate(6px, -7px);
}
.qualification [data-content]{
    display: none;
}
.qualification__active[data-content]{
    display: block;
}
.qualification__button.qualification__active{
    color: var(--first-color);
}

/*============================= SERVICES =========================================*/
.services__container{
    gap: 1.5rem;
    grid-template-columns: repeat(2, 1fr);
}

.services__content{
    position: relative;
    background-color: var(--container-color);
    padding: 3.5rem .5rem 1.25rem 1.5rem;
    border-radius: .25rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .15);
    transition: .3s;
    margin-top: 25px;
}

.services__content:hover{
    box-shadow: 0 4px 8px rgba(0, 0, 0, .15);
}

.services__icon{
    display: block;
    font-size: 1.5rem;
    color: var(--first-color);
    margin-bottom: var(--mb-1);
}

.services__title{
    font-size:var(--h3-font-size);
    margin-bottom: var(--mb-1);
    font-weight: var(--font-medium);
}

.services__button{
    cursor: pointer;
    font-size: var(--small-font-size);
}

.services__button:hover .button__icon{
    transform: translateX(.25rem)
}

.services__modal{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .5);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    z-index: var(--z-model);
    opacity: 0;
    visibility: hidden;
    transition: .3s;
}

.services__modal-content{
    position: relative;
    background-color: var(--container-color);
    padding: 2.5rem;
    border-radius: .5rem;
}

.services__modal-services{
    row-gap: 1rem;
}
.services__modal-service{
    display: flex;
}

.services__modal-title{
    font-size: var(--h3-font-size);
    /*font-weight: var(--font-medium);*/
    margin-bottom: var(--mb-1-5);
}

.services__modal-close{
   position: absolute;
   top:1rem;
   right: 1rem; 
   font-size: 1.7rem;
   color: var(--first-color);
   cursor: pointer;

}

.services__modal-icon{
    color: var(--first-color);
    margin-right: var(--mb-0-25);
}

/* ACtive Modal */
.active-modal{
    opacity: 1;
    visibility: visible;
}
/*============================= Projects =========================================*/
.portfolioContainer{
    max-width: 1400px;
    min-height: 100vh;
    margin: 0px auto;
    padding: 30px 8%;
}

section.btns{
    padding: 20px 0px 25px;
}
section.btns ul{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    list-style: none;
}
section.btns ul li{
    display: inline-block;
    padding: 3px 0px;
    font-size: 20px;
    font-weight: 500;
    color: #666;
    letter-spacing: 1px;
    margin: 4px 15px;
    cursor: pointer;
    transition: color 0.4s;
}
section.btns ul li:hover{
    color: var(--first-color);
}
section.btns ul li.active{
    position: relative;
    color: var(--first-color);
}

section.btns ul li.active::after{
    content: '';
    position: absolute;
    top: 110%;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--first-color);
    animation: animate 0.4s linear;
}

@keyframes animate{
    0%{
        transform: scale(0);
    }
    100%{
        transform: scale(1);
    }
}
section.gallery{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    /*grid-auto-rows:230px;*/
    grid-gap: 10px;
}
section.gallery .card{
    position: relative;
    max-width: 100%;
    height: 100%;
    cursor: pointer;
}
section.gallery .card.hide{
    display: none;
}
section.gallery .card.active{
    display: block;
    animation: animateTwo 0.6s;
}
@keyframes  animateTwo{
    0%{
        transform: scale(0.6);
    }
    100%{
        transform: scale(1);
    }
}
.card .imgBox{
    position: relative;
    width: 100%;
    height: 100%;
}
section.galllery img{
    width: 120%;
    height: 80%;
    object-fit: cover;
    display: block;
    transition: opacity 0.4s;
}
.card:hover .imgBox img{
    opacity: 0.3;
    cursor: pointer;
}
.card .imgText{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.imgText h2, .imgText p{
    padding: 20px 10%;
    text-align: center;
    opacity: 0;
    transition: opacity 0.3s linear,
                padding 0.3s linear;
}

.card:hover .imgText h2, .card:hover .imgText p{
    opacity: 1;
    padding: 8px 10%;
}
/*============================= Projects In Mind =========================================*/
.project{
    text-align: center;
}
.project__bg{
    background-color: var(--first-color);
    padding-top: 3rem;
    border-radius: 10px;
    margin-left: 20px;
    margin-right: 20px;
}
.project__title{
    font-size: var(--h2-font-size);
    margin-bottom: var(--mb-0-75);
}
.project__description{
    margin-bottom: var(--mb-1-5);
}
.project__title, .project__description{
    color: #2f2f2f
}

.project__img{
    width: 280px;
    justify-content: center;
    transform: translateX(50px); 
}
/*============================= TESTIMONIAL =========================================*/
/* .testimonial__data, .textimonial__header{
    display: flex;
}
.testimonial__data{
    justify-content: space-between;
    margin-bottom: var(--mb-1);
}
.textimonial__img{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: var(--mb-0-75);
}
.testimonial__name{
    font-size: var(--h3-font-size);
    font-weight: var(--font-medium);
}

.testimonial__client{
    font-size: var(--small-font-size);
    color: var(--text-color);
}

.testimonial__description{
    margin-bottom: var(--mb-2-5);
}

.testimonial__icon-star{
    color: var(--first-color);
} */

/*============================= CONTACT ME =========================================*/
.contact__container{
    row-gap: 3rem;
}

.contact__information{
    display: flex;
    margin-bottom: var(--mb-2);
}

.contact__icon{
    font-size: 2rem;
    color: var(--first-color);
    margin-right: var(--mb-0-75);
}

.contact__title{
    font-size:var(--h3-font-size);
    font-weight:var(--font-medium)
}

.contact__subtitle{
    font-size:var(--small-font-size);
    color:var(--text-color-light);
}

.contact__content{
    background-color: var(--input-color);
    border-radius: .5rem;
    padding: .75rem 1rem .25rem;
}

.contact__label{
    font-size: var(--smaller-font-size);
    color:var(--title-color)
}

.contact__input{
    width: 100%;
    background-color: var(--input-color);
    color: var(--text-color);
    font-family: var(--body-font);
    font-size:var(--normal-font-size);
    border: none;
    outline: none;
    padding: .25rem .5rem .5rem 0;
}

/*============================= FOOTER =========================================*/
.footer{
    padding-top: 2rem;
}

.footer__container{
    row-gap: 3.5rem;
}

.footer__bg{
   background-color: var(--first-color); 
   padding: 2rem 0 3rem;
}

.footer__title{
    font-size: var(--h1-font-size);
    margin-bottom: var(--mb-0-25);
}

.footer__subtitle{
    font-size: var(--small-font-size);
}

.footer__links{
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    text-align: center;

}

.footer__link:hover{
    color:var(--container-color);
}

.footer__social{
    font-size: 1.25rem;
    margin-right: var(--mb-1-5);
    
}
.footer__socials{
    color: var(--container-color);
    text-align: center;
}

.footer__copy{
    font-size:var(--smaller-font-size);
    text-align: center;
    color: var(--container-color);
    margin-top: var(--mb-3);
}

.footer__title, .footer__subtitle, .footer__link,.footer__social{
    color: #FFF;
}

/*============================ SCROLL UP =====================================*/
.scrollup{
    position: fixed;
    right: 1rem;
    bottom: 5rem;
    background-color: var(--first-color);
    opacity: .8;
    padding: .3rem .4rem;
    border-radius: .4rem;
    z-index: var(--z-tooltip);
    transition: .4s;
}
.scrollup:hover{
    background-color: #d3a350;
}
.scrollup_icon{
    font-size: 1.2rem;
    color: #FFF;
} 
/* Show scroll */
.show-scroll{
    bottom: 5rem;
}

 
