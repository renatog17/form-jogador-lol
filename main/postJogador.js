async function postJogador(nome, nickname, divisao, tier, imagem, rolePrimaria, roleSecundaria, campeoes){
    divisao = divisao.toUpperCase() 
    const con = await fetch('http://localhost:8080/jogador', {
        method:"POST",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome:nome,
            nickname:nickname,
            divisao:divisao,
            tier:tier,
            imagem:imagem,
            rolePrimaria:rolePrimaria,
            roleSecundaria:roleSecundaria,
            campeoes:["divisao","asdasd"]
        })
    })
}

var buttonSubmitForm = document.getElementById("bt-enviar-form")

buttonSubmitForm.addEventListener("click", e =>{
    e.preventDefault()
    console.log("com sucesso")
    var nickname = document.getElementById('nickname').value
    var nome = document.getElementById('nome').value
    var divisao = document.getElementById('divisao').value
    var tier = document.getElementById('tier').value
    var campeoes = document.getElementById('campeoes').value
    var rolePrimaria = document.getElementById('role-primaria').value
    var roleSecundaria = document.getElementById('role-secundaria').value
    var imagem = document.getElementById('imagem').value
    postJogador(nome, nickname, divisao, tier, imagem, rolePrimaria, roleSecundaria, campeoes)
})