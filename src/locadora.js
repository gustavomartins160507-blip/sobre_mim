const botao = document.getElementById('side-bar-button')
const aba = document.getElementById('aba')
const btntoggle = document.getElementById('btn-toggle')
const body = document.getElementById('body')
const senhapass = document.getElementById('senha')
const btnsenha = document.getElementById('btn-senha')
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
