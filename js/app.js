const hamburgerMenu = document.querySelector('.hamburger');
const mobileHamburgerMeny = document.querySelector('.mobile-nav')

hamburgerMenu.addEventListener('click', event => {
    hamburgerMenu.classList.toggle('is-active')
    mobileHamburgerMeny.classList.toggle('is-active')
})

const counters = document.querySelectorAll('.counter');

// counters.forEach(counter => {
//     counter.textContent = '0';

//     const updateCounter = () => {
//         const target = counter.getAttribute('data-target') - 0;
//         const c = +counter.textContent;

//         const inc = target / 500;

//         if (c < target) {
//             counter.textContent = `${Math.ceil(c + inc)}`;
//             setTimeout(updateCounter, 1)
//         }
//     }

//     updateCounter()
// })

let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {
    // Делаем что-нибудь с позицией скролла
    counters.forEach(counter => {
        counter.textContent = '0';

        const updateCounter = () => {
            const target = counter.getAttribute('data-target') - 0;
            const c = +counter.textContent;

            const inc = target / 200;

            if (c < target) {
                counter.textContent = `${Math.ceil(c + inc)}`;
                setTimeout(updateCounter, 10)
            }
        }

        updateCounter()
    })
}

window.addEventListener('scroll', function (e) {
    last_known_scroll_position = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(function () {
            doSomething(last_known_scroll_position);
            ticking = false;
        });

        ticking = true;
    }
});
