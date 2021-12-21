let urlBRL = 'http://economia.awesomeapi.com.br/json/last/USD-BRL'

let urlUS = 'http://economia.awesomeapi.com.br/json/last/BRL-AUD'






function converterBRL(){
    let input = document.getElementById("valor");
    let valor = input.value;

    fetch(urlBRL).then((res)=> {
        return res.json()
    })
    .then((data) => {
        let rate = data.USDBRL.bid;
        document.getElementById("resultado").
        innerHTML = rate * valor
    })
}

function converterUS(){
    let input = document.getElementById("valorUS");
    let valor = input.value;

    fetch(urlUS).then((res)=> {
        return res.json()
    })
    .then((data) => {
        let rate = data.BRLAUD.bid;
        document.getElementById("resultado").
        innerHTML = rate * valor
    })
}