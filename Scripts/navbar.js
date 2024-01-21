document.body.className += "js-loading";

showpage = () =>{
    document.body.className = document.body.className.replace("js-loading","")
}

window.onload = () =>{
    showpage()
    let toggler = document.querySelector(".navbar-toggler")
    let scroll = document.querySelector(".scroll-up-btn")

    let sections = document.querySelectorAll("section")
    let navlists = document.querySelectorAll(".nav-link")

    window.onscroll = () =>{
        if(window.pageYOffset > 0) {
            scroll.classList.add("show")
        }else{
            scroll.classList.remove("show")
        }

        let current = ''
        sections.forEach(section => {
            const sectionTop = section.offsetTop
            if(pageYOffset >= (sectionTop-700/3)) current = section.getAttribute("id")
        })

        navlists.forEach(li => {
            li.classList.remove("active")
            if(li.classList.contains(current)){
                li.classList.add("active")
            }
        })
    }

    toggler.addEventListener('click', () => toggler.classList.toggle('toggle'))
}