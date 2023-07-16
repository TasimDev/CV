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
    navBar.classList.remove('active');
    menuBtn.classList.remove('active');
    if (menuBtn.classList.contains('active')) {
        menuBtn.innerHTML = `<i class="fa-solid fa-xmark" style="font-size: 2rem"></i>`
    } else {
        menuBtn.innerHTML = `<i class="fa-solid fa-bars" ></i>`
    }
})

closeBtn.addEventListener("click", () => {
    connectPage.classList.remove("active");
})

//GSAP
const tl = gsap.timeline({
    default: { ease: 'power1.out' }
});

const st = gsap.timeline({
    scrollTrigger: {
        trigger: "#main,#about,#skills,#resume,#webdev,#digital-art",
        start: 'center'
    }
});

tl.fromTo("#getintouch", { x: "200%" }, { x: "0%", duration: 1 })
tl.fromTo("#header", { x: "-200%" }, { x: "0%", duration: 1 }, '-=1')

tl.fromTo(".title, #main .line",
    { opacity: 0 },
    { opacity: 1, duration: 1 }, '-=1'
)
tl.fromTo(".image", { height: "0%" }, { height: "auto", duration: 1 }, '-=1')

st.from(".about-title",
    { x: 300, opacity: 0 }
)
st.from("#about .image", { x: -300, opacity: 0 })
st.from("#about #info", {
    y: 300, opacity: 0
})
st.from("#skills", { x: "100%", opacity: 0, })
st.from("#skills-title", { x: 300, opacity: 0, delay: 0.2 })
st.from(".item", { y: 300, opacity: 0, stagger: 0.2 }, "-=1")
st.from("#resume-title", { x: -300, opacity: 0 })
st.from("#resume #left", { x: -300, opacity: 0 })
st.from("#resume #right", { x: 300, opacity: 0 })
st.from("#services #webdev", { y: -300, opacity: 0, })
st.from("#services #digital-art", { x: -300, opacity: 0, delay: 1 })

//Send Email to Gmail

const form = document.querySelector("form"),
    statustxt = form.querySelector("btn");

form.onsubmit = (e) => {


    let xhr = new XMLHttpRequest(); //creating new cml object
    xhr.open("POST", "message.php", true); //sending post requist to message.php file
    xhr.onload = () => { //on jax loaded
        if (xhr.readyState == 4 && xhr.status == 200) {//status  response is 200 and 4 means no arrors
            let response = xhr.response;
            Toastify({
                text: response,
                duration: 3000,
                gravity: "top",
                position: "right",
                stopOnFocus: true,
                style: {
                    background: "radial-gradient(circle, rgba(255,0,0,1) 0%, rgba(210,65,90,1) 100%)",
                },

            }).showToast();
        }
    }
    let formData = new FormData(form);
    xhr.send(formData);


    e.preventDefault();

}

