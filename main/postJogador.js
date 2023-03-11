async function postJogador(nome, nickmame, divisao, tier, imagem, rolePrimaria, roleSecundaria, campeoes){
    nome = "renato"
    const con = await fetch('http://localhost:8080/jogador', {
        method:"POST",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome:nome,
            nickmame:nickmame,
            divisao:divisao,
            tier:tier,
            imagem:imagem,
            rolePrimaria:rolePrimaria,
            roleSecundaria:roleSecundaria,
            campeoes:campeoes
        })
    })
}