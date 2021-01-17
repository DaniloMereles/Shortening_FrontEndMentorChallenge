let navActive = ()=>{
    const hamburger = document.getElementById('hamburger')
    const navLinks = document.getElementById('navLinks')

    hamburger.addEventListener('click', ()=>{
        navLinks.classList.toggle('active')
        hamburger.classList.toggle('toggle')
    })
}

navActive()