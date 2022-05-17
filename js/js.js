'use strict'

const menuBurger = document.querySelector('.menu-burger')

const mainMobileMenu = document.querySelector('.main-nav')

const mobileMenu = document.querySelector('.menu')

const body = document.body

const buttonCloseMenu = document.querySelector('.button-interactions__close')

const btnTabsForm = document.querySelectorAll('.btn-tabs')

const TabsForm = document.querySelectorAll('.form')

const btnHeaderLogin = document.querySelector('.action-button-register')

const formBox = document.querySelector('.form-box')

const formBtnClose = document.querySelector('.form-btn-close')

const btnInteractionsLogin = document.querySelector('.button-interactions__login')


function preventDefault(e) {
    let currentTagName = e.target.tagName

    if (currentTagName === 'A' || 'IMG') {
        e.preventDefault()
    }
}

body.addEventListener('click', preventDefault)


function openFormToggle(e) {
    e.preventDefault()
    formBox.classList.toggle('active')

    if (!mainMobileMenu.classList.contains('active')) {
        body.classList.toggle('hidden')
    }
}

btnHeaderLogin.addEventListener('click', openFormToggle)

formBtnClose.addEventListener('click', openFormToggle)

btnInteractionsLogin.addEventListener('click', openFormToggle)


btnTabsForm.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault()
        let currentBtn = item
        let formId = currentBtn.getAttribute('data-tab')
        let currentForm = document.querySelector(formId)

        btnTabsForm.forEach((item) => {
            item.classList.remove('active')
        })

        TabsForm.forEach((item) => {
            item.classList.remove('active')
        })

        currentBtn.classList.add('active')
        currentForm.classList.add('active')
    })
})

document.querySelector('.btn-tabs').click()


function burgerMenuOpenClose() {
    mainMobileMenu.classList.toggle('active')
    body.classList.toggle('hidden')
}

menuBurger.addEventListener('click', burgerMenuOpenClose)

buttonCloseMenu.addEventListener('click', burgerMenuOpenClose)


function movementMenu(e) {

    e.preventDefault()

    if (e.target.closest('.go-next')) {

        e.target.closest('.go-next').classList.add('active')

        let currentText = e.target.closest('.go-next').innerText

        let currentGoNext = e.target.closest('.go-next').nextElementSibling.firstElementChild.firstElementChild

        if (currentGoNext.innerText === '') {
            currentGoNext.append(currentText)
        }

    } else if (e.target.closest('.go-back')) {

        e.target.closest('.sub-menu').previousElementSibling.classList.remove('active')
    }
}

mobileMenu.addEventListener('click', movementMenu)


/* --- SWIPER  --- */

new Swiper('.general-slider', {

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.5,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2.5,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3.5,
            spaceBetween: 40
        },
        // when window width is >= 992px
        992: {
            slidesPerView: 4,
            spaceBetween: 16,
        }
    }

});

new Swiper('.banner-slider', {

    spaceBetween: 16,

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1.5,
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 2,
        }
    }
});


new Swiper('.watched-slider', {

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.5,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2.5,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3.5,
            spaceBetween: 40
        },
        // when window width is >= 992px
        992: {
            slidesPerView: 5,
            spaceBetween: 16,
        }
    }

});


new Swiper('.reviews-slider', {

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },

        375: {
            slidesPerView: 1.5,
            spaceBetween: 20
        },


        // when window width is >= 480px
        768: {
            slidesPerView: 2,
            spaceBetween: 16
        },


    }


});

