var link = document.querySelector(".menu-main__item"),
    showMenu = document.querySelector(".menu-main__hamburger");


showMenu.addEventListener("click", function() {
    event.preventDefault();
    link.classList.toggle("menu-main__item_open");
    console.log("click");
});