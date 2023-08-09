const btnDark = document.querySelectorAll('.btn-dark');
const htmlElement = document.querySelector('html');

btnDark.forEach(btn => {
    btn.addEventListener('click', () => {
        htmlElement.classList.toggle('dark');
    });
});


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 30,
    loop: true,

    pagination: {
        el: ".swiper-pagination",
    },

    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
});