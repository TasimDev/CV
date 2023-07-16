const menuBtn = document.querySelector(".menu");
const navBar = document.getElementById("navbar");
const menuBarLinks = document.querySelectorAll('#menu-bar li a');
const getintouchbtn = document.querySelector("#getintouch");
const connectPage = document.querySelector("#connect");
const closeBtn = document.querySelector("#close-connect");
const toggleElements = () => {
    navBar.classList.toggle('active');
    menuBtn.classList.toggle('active');
    if (menuBtn.classList.contains('active')) {
        menuBtn.innerHTML = `<i class="fa-solid fa-xmark" style="font-size: 2rem"></i>`
    } else {
        menuBtn.innerHTML = `<i class="fa-solid fa-bars" ></i>`
    }
}

menuBtn.addEventListener('click', toggleElements)
menuBarLinks.forEach((item) => {
    item.addEventListener('click', toggleElements);
})

getintouchbtn.addEventListener("click", () => {
    connectPage.classList.add("active");
})
closeBtn.addEventListener("click", () => {
    connectPage.classList.remove("active");
})