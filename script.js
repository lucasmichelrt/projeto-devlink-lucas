function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    //pegar a tag img
    const img = document.querySelector("#profile img")
    
    //substituir a imagem
    if(html.classList.contains("light")) { 
        //se tiver light mode, adicionar a imagem light
        img.setAttribute("src","./assets/avatar-light.png")
    }   else    {    
        //se tiver sem light mode, manter a imagem normal
        img.setAttribute("src", "./assets/avatar.png")
    }    

}

/* Exibir tooltip "Em produção" ao clicar nas caixas*/ 

document.querySelectorAll('.em-produção').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault() // impede clique real
    el.classList.add('show')
    setTimeout(() => el.classList.remove('show'), 1500) 
  })
})