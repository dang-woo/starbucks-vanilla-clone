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

//올해가 몇 년인지 계산
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()