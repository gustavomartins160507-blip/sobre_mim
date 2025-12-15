const botao=document.getElementById('side-bar-button')
const aba=document.getElementById('aba')
const btntoggle=document.getElementById('btn-toggle')
const body=document.getElementById('body')
const senhapass=document.getElementById('senha')
const btnsenha=document.getElementById('btn-senha')
const main_content=document.getElementById('main-content')
function sidebar(){
  if (aba && botao) {
    aba.classList.toggle('mostrar-aba')
  }
}
function mudar_tema(){
  if (!body || !btntoggle) return

  if (btntoggle.classList.contains('bi-toggle-off')){
    btntoggle.classList.replace('bi-toggle-off','bi-toggle-on')
  } else {
    btntoggle.classList.replace('bi-toggle-on','bi-toggle-off')
  }
  body.classList.toggle('ativa1')
  main_content.classList.toggle('ativa2')

}
function mostrar_senha(){
  if (!senhapass || !btnsenha) return

  if (senhapass.type === 'password'){
    senhapass.type = 'text'
    btnsenha.classList.replace('bi-eye','bi-eye-slash')
  } else {
    senhapass.type = 'password'
    btnsenha.classList.replace('bi-eye-slash','bi-eye')
  }
}
const top_button = document.getElementById('top-button')
const pixel_aparecer = 300

function verificarScroll() {
  if (window.scrollY > pixel_aparecer) {
    top_button.classList.add('mostrar')
  } else {
    top_button.classList.remove('mostrar')
  }
}

window.addEventListener('scroll', verificarScroll)
window.addEventListener('load', verificarScroll)