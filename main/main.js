var listaCampeoes = []
var selectCampeoes = document.getElementById('campeoes')

async function buscaCampeoes(){
    var listaCampeoesPromise = await fetch('http://localhost:8080/campeoes')
    listaCampeoes = await listaCampeoesPromise.json()
    console.log(listaCampeoes)

    for(i = 0; i<listaCampeoes.length; i++){
        var optionCampeao = document.createElement('option')
        optionCampeao.value = listaCampeoes[i]
        optionCampeao.text = listaCampeoes[i]
        selectCampeoes.appendChild(optionCampeao)
    }

}

buscaCampeoes()
var buttonSubmitForm = document.getElementById("bt-enviar-form")
buttonSubmitForm.addEventListener("click", e =>{
    e.preventDefault()
    var nickname = document.getElementById('nickname').value
    var nome = document.getElementById('nome').value
    var divisao = document.getElementById('divisao').value
    var tier = document.getElementById('tier').value
    var campeoes = document.getElementById('campeoes').value
    var rolePrimaria = document.getElementById('role-primaria').value
    var roleSecundaria = document.getElementById('role-secundaria').value
    var imagem = document.getElementById('imagem').value

    var jogador = {
        "nickname" : nickname,
        "nome":nome,
        "divisao":divisao,
        "tier":tier,
        "campeoes":campeoes,
        "rolePrimaria":rolePrimaria,
        "roleSecundaria":roleSecundaria,
        "imagem":imagem
    }
    criarCard(jogador)
})
function criarCard(jogador){
    var cardJogador = document.createElement("div")
    cardJogador.classList = ["card-jogador"]
    if(jogador.divisao === "Ferro"){
        cardJogador.style.backgroundColor = "#541212"
    }
    if(jogador.divisao === "Bronze"){
        cardJogador.style.backgroundColor = "#cd7f32"
    }
    if(jogador.divisao === "Prata"){
        cardJogador.style.backgroundColor = "#F0EEED"
    }
    if(jogador.divisao === "Ouro"){
        cardJogador.style.backgroundColor = "#F2CD5C"
    }
    if(jogador.divisao === "Platina"){
        cardJogador.style.backgroundColor = "#FFFFFF"
    }
    if(jogador.divisao === "Diamante"){
        cardJogador.style.backgroundColor = "#E3F6FF"
    }
    cardJogador.innerHTML = jogador.nickname +"<br>"
    +jogador.nome+"<br>"
    +jogador.divisao+"</br>"
    +jogador.tier+"</br>"
    +jogador.campeoes+"</br>"
    +jogador.rolePrimaria+"</br>"
    +jogador.roleSecundaria+"</br>"
    +"<img src='"+jogador.imagem+"'class='imagem'></img>"
    var divCards = document.getElementById("cards")
    divCards.appendChild(cardJogador)
}