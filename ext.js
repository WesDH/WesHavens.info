window.addEventListener("scroll", () => {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);

    let scroller = document.querySelector(".scroll_down");
    // scroller.classList.toggle("scrolled", window.scrollY > 0);
    if (window.scrollY > 0) {
        scroller.innerHTML = '';
    }
    // } else if (window.scrollY == 0) {
    //     scroller.innerHTML = '<h6>Scroll down for more</h6>';
    // }
});


function toggleMenu() {
    let menuToggle = document.querySelector(".toggle");
    let menu = document.querySelector(".menu");

    menuToggle.classList.toggle("active");
    menu.classList.toggle("active");


}