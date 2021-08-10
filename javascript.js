let button = document.getElementById("button")
let select = document.getElementById("select-moedas")



async function convertermoedas() {

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then( function(resposta){
       return resposta.json()
    })

    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high



    let inputValorEmReais = Number(document.getElementById("input").value)
    let moedasconvertidas = document.getElementById("dolarconvertido")
    let textoreal = document.getElementById("textoreal")

    if (select.value === "US$ Dólar Americano") {
        let valorEmDoDolares = inputValorEmReais / dolar
        moedasconvertidas.innerHTML = valorEmDoDolares.toLocaleString('en-us', { style: 'currency', currency: 'USD' })
    }
    if (select.value === "€ Euro") {
        let valorEmDoEuros = inputValorEmReais / euro
        moedasconvertidas.innerHTML = valorEmDoEuros.toLocaleString('de-De', { style: 'currency', currency: 'EUR' })
    }


    textoreal.innerHTML = inputValorEmReais.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

function trocademoeda() {
    let textomoedas = document.getElementById("textomoedas")
    let bandeiramoedas = document.getElementById("bandeiramoedas")


    if (select.value === "US$ Dólar Americano") {
        textomoedas.innerHTML = "Dólar Americano"
        bandeiramoedas.src = "./img/estados-unidos.png"
    }

    if (select.value === "€ Euro") {
        textomoedas.innerHTML = "Euro"
        bandeiramoedas.src = "./img/euro.png"
    }

    convertermoedas()
}

button.addEventListener("click", convertermoedas)
select.addEventListener("change", trocademoeda)

