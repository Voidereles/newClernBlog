import AOS from 'aos';
import 'owl.carousel';
import 'bootstrap';
import './js/magicLine.js';
import './js/owlCarousels.js'
import './js/headerScript.js';



window.onload = function () {
    AOS.init({
        duration: 650,
    });
}


$(function () {
    // const allLang = document.querySelectorAll(".header__lang-all .text");
    // Array.from(allLang).forEach(element => {
    //     element.addEventListener('click', () => {
    //         document.querySelector('.header__lang-active-text').innerHTML = element.textContent;
    //     });
    // });

    $('input').focus(function () {
        $(this).parents('.form-group').addClass('focused');
    });

    $('input').blur(function () {
        var inputValue = $(this).val();
        if (inputValue == "") {
            $(this).removeClass('filled');
            $(this).parents('.form-group').removeClass('focused');
        } else {
            $(this).addClass('filled');
        }
    })

    //Go through each carousel on the page
    $('.owl-carousel').each(function () {
        //Find each set of dots in this carousel
        $(this).find('.owl-dot').each(function (index) {
            //Add one to index so it starts from 1
            $(this).attr('aria-label', index + 1);
        });
    });


    headerMoveLinks();

});

const headerMoveLinks = () => {
    if (window.innerWidth >= 1200) {
        document.querySelector('.header .container-fluid').append(document.querySelector('.header__nav-right'));
    } else {
        document.querySelector('.header__nav').append(document.querySelector('.header__nav-right'));
    }
    console.log("links moved");
}

window.addEventListener('resize', headerMoveLinks);