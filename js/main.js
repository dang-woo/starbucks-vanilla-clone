'use strict';

const searchEL = document.querySelector('.search');
const searchInputEL = searchEL.querySelector('input');

searchInputEL.addEventListener('click', function() {
    searchInputEL.focus();
});

searchInputEL.addEventListener('focus', function() {
    searchEL.classList.add('focused');
    searchInputEL.setAttribute('placeholder', '통합검색');
});

searchInputEL.addEventListener('blur', function() {
    searchEL.classList.remove('focused');
    searchInputEL.setAttribute('placeholder', '');
});

//페이지 스크롤에 따른 요소 제어

const badgeEl = document.querySelector('header .badges')
const toTopEl = document.querySelector('#to-top')

window.addEventListener('scroll', _.throttle(function () {

    if (window.scrollY > 500) {
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        })
        gsap.to(toTopEl, .2, {
            x: 0
        })

    } else {
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        })
        gsap.to(toTopEl, .2, {
            x: 100
        })
    }
}, 300))

toTopEl.addEventListener('click', function () {
    gsap.to(window, .7, {
        scrollTo: 0
    })
})


//순서대로 나타나는 기능
const fadeEls = document.querySelectorAll('.visual .fade-in')
fadeEls.forEach(function (fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7,
        opacity: 1
    })
})


//슬라이드 요소 관리
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
})
new Swiper('.promotion .swiper-container', {
    autoplay: {
        delay: 5000 //5초
    },
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    pagination: {
        el: '.promotion .swiper-pagination',
        clickable: true
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
})
new Swiper('.awards .swiper-container', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    // slidesPerGroup: 5,
    navigation: {
        prevEl: '.awards .swiper-prev', // 이전 버튼
        nextEl: '.awards .swiper-next' // 다음 버튼
    }
})


//Promotion 슬라이드 토글 기능

const promotionEl = document.querySelector('.promotion')
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false
promotionToggleBtn.addEventListener('click', function () {
    isHidePromotion = !isHidePromotion
    if (isHidePromotion) {
        promotionEl.classList.add('hide')
    } else {
        promotionEl.classList.remove('hide')
    }
})



 //부유하는 요소 관리


function random(min, max) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
    gsap.to(
        selector,
        random(1.5, 2.5), // 애니메이션 동작 시간
        {
            delay: random(0, delay),
            y: size,
            repeat: -1,
            yoyo: true,
            ease: Power1.easeInOut
        }
    )
}
floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)


//요소가 화면에 보여짐 여부에 따른 요소 관리
// 관리 요소들 검색
const spyEls = document.querySelectorAll('section.scroll-spy')
// 요소들 반복 처리
spyEls.forEach(function (spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl,
            triggerHook: .8
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller())
})


//올해가 몇 년인지 계산

const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()