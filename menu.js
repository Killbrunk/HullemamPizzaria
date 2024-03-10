
window.addEventListener("scroll", function (){
    let cabecalho = document.querySelector('.cabecalho')
    cabecalho.classList.toogle('rolagem', window.scrollY > 0)
})