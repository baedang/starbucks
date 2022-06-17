const searchEl = document.querySelector('.search');
// 위의 documen를 하나의 요소로 보면 됨,또는 html 자체로 봐도 됨  
const searchInputEl =searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


// 연도 자동 생성
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();