var listaCampeoes = []
var selectCampeoes = document.getElementById('campeoes')

async function buscaCampeoes(){
    var listaCampeoesPromise = await fetch('http://localhost:8080/campeoes')
    listaCampeoes = await listaCampeoesPromise.json()
    console.log("aqui dentro")
    console.log(listaCampeoes)

    for(i = 0; i<listaCampeoes.length; i++){
        var optionCampeao = document.createElement('option')
        optionCampeao.value = listaCampeoes[i]
        optionCampeao.text = listaCampeoes[i]
        selectCampeoes.appendChild(optionCampeao)
    }

}

buscaCampeoes()