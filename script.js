
let btnNav = document.getElementById("btn-nav")
let btnVoltar = document.getElementById("voltarBtn")
let menuResponsivo = document.getElementById("menu-responsivo-id")


  function mostrarMenu(){
  menuResponsivo.classList.replace("menu-responsivo", "ativo")

  btnNav.classList.add("fechado")

  btnVoltar.classList.replace("fechado", "ativo")
}
  

btnVoltar.addEventListener("click", () => {
  menuResponsivo.classList.replace("ativo", "menu-responsivo");
  btnVoltar.classList.replace("ativo", "fechado");
  btnNav.classList.replace("fechado", "ativo");
  
  })


btnNav.addEventListener("click", () => {
  mostrarMenu()
})



