const botao = document.getElementById('side-bar-button')
const aba = document.getElementById('aba')
const arrow = document.getElementById('arrow')
const btntoggle = document.getElementById('btn-toggle')
const body = document.getElementById('body')
const paragrafo_titulo = document.getElementById('paragrafo-titulo')
const h1_titulo = document.getElementById('h1-titulo')
const span = document.querySelectorAll('span')
const h2 = document.getElementById('name-projetos')
const div_side = document.getElementById('list-bi')
const header = document.getElementById('header-content')
const home = document.getElementById('home')
const especialidades = document.getElementById('especialidades')
const projetos = document.getElementById('projetos')
const contato = document.getElementById('contato')
const senhapass = document.getElementById('senha')
const btnsenha = document.getElementById('btn-senha')
const ver_projeto = document.querySelectorAll('.ver-projeto')
const content_mensagem=document.getElementById('mensagem')
function verificar() {
    let nome = document.getElementById('input-nome').value
    let email = document.getElementById('email').value
    let senhapass = document.getElementById('senha').value
    if (nome.length === 0 || senhapass.length === 0 || email.length === 0) {
        window.alert('Campos inválidos')
        return false
    }
    else {
        localStorage.setItem('nome_usuário', nome)
        mostrar_mensagem(nome)
        fechar_aba()
        return false
    }
}
function mostrar_mensagem(nome) {
    let mensagem = document.getElementById('mensagem')
    let hora = new Date().getHours()
    if (hora < 12) {
        mensagem.innerHTML = `<h2 id="content-mensagem">Bom dia, ${nome}. Seja Bem-vindo!</h2>`
    }
    else if (hora >= 12 & hora < 18) {
        mensagem.innerHTML = `<h2 id="content-mensagem">Boa tarde, ${nome}. Seja Bem-vindo!</h2>`
    }
    else {
        mensagem.innerHTML = `<h2 id="content-mensagem">Boa noite, ${nome}. Seja Bem-vindo!</h2>`
    }
}
window.onload = function pegar_nome() {
    let nome_salvo = localStorage.getItem('nome_usuário')
    if (nome_salvo) {
        mostrar_mensagem(nome_salvo)
    }
}
function sidebar() {
    aba.classList.toggle('mostrar-aba')
    arrow.classList.toggle('mostrar_arrow')
}
function mostrar_arrow() {
    arrow.classList.toggle('mostrar_arrow2')
}
function fechar_aba() {
    aba.classList.remove('mostrar-aba')
    arrow.classList.remove('mostrar_arrow')
}
function mudar_tema() {
    if (btntoggle.classList.contains('bi-toggle-off')) {
        btntoggle.classList.replace('bi-toggle-off', 'bi-toggle-on')
    } else {
        btntoggle.classList.replace('bi-toggle-on', 'bi-toggle-off')
    }
    body.classList.toggle('ativa1')
    paragrafo_titulo.classList.toggle('ativa2')
    h1_titulo.classList.toggle('ativa3')
    h2.classList.toggle('ativa5')
    span.forEach(s => s.classList.toggle('ativa4'))
    div_side.classList.toggle('ativa6')
    btntoggle.classList.toggle('ativa7')
    arrow.classList.toggle('ativa8')
    header.classList.toggle('ativa9')
    home.classList.toggle('ativa10')
    especialidades.classList.toggle('ativa11')
    projetos.classList.toggle('ativa12')
    contato.classList.toggle('ativa13')
    content_mensagem.classList.toggle('ativa17')
}
function mostrar_senha() {
    if (senhapass.type === 'password') {
        senhapass.setAttribute('type', 'text')
        btnsenha.classList.replace('bi-eye', 'bi-eye-slash')
    }
    else {
        senhapass.setAttribute('type', 'password')
        btnsenha.classList.replace('bi-eye-slash', 'bi-eye')
    }
}
function mouse_pass(card) {
    const botao = card.querySelector('.ver-projeto')
    botao.classList.add('ativa14')
    card.classList.add('ativa15')
}
function mouse_leave(card) {
    const botao = card.querySelector('.ver-projeto')
    botao.classList.remove('ativa14')
    card.classList.remove('ativa15')
}
