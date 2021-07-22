const toggleMenu = document.getElementsByClassName('hamburger')[0]
const navbarList = document.getElementsByClassName('navbar-list')[0]

toggleMenu.addEventListener('click', () =>{
    navbarList.classList.toggle('active')
})

const btn = document.getElementsByClassName("btn-indicator");
const slide = document.getElementById("slider")

btn[0].onclick = function() {
    slide.style.transform = "translateX(0px)"
    for (i = 0; i < 4; i++){
        btn[i].classList.remove("active")
    }this.classList.add("active")
}
btn[1].onclick = function() {
    slide.style.transform = "translateX(-800px)"
    for (i = 0; i < 4; i++){
        btn[i].classList.remove("active")
    }
    this.classList.add("active")
}
btn[2].onclick = function() {
    slide.style.transform = "translateX(-1600px)"
    for (i = 0; i < 4; i++){
        btn[i].classList.remove("active")
    }
    this.classList.add("active")
}
btn[3].onclick = function () {
    slide.style.transform = "translateX(-2400px)"
    for (i = 0; i < 4; i++) {
        btn[i].classList.remove("active")
    }
    this.classList.add("active")
};
