import { VisualManagement } from './visualManagement.js';

export class RequestAPI {
  constructor(choiceCoinFrom, choiceCoinTo, inputFrom, inputTo) {
    this.firstCoin = choiceCoinFrom
    this.secondCoin = choiceCoinTo
    this.inputFirstCoin = inputFrom
    this.inputResult = inputTo
    this.visualManagement = new VisualManagement(this.inputFirstCoin, this.firstCoin, this.inputResult, this.secondCoin)
  }

  managerAPP() {
    const test = this.requestCoins(this.firstCoin.value, this.secondCoin.value).then(valorParidadeMoedas => {
      const conversao = this.conversor(valorParidadeMoedas)
      this.visualManagement.showResult(conversao.toFixed(2))
    })
  }

  requestCoins(fromCoin, toCoin) {
    let paridade = fromCoin + '-' + toCoin;
    return fetch(`https://economia.awesomeapi.com.br/last/${paridade}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8'
      }
    })
      .then(response => response.json())
      .then(data => {
        paridade = paridade.replace('-', '')
        return data[paridade].bid;
      })
      .catch(error => {
        console.log('estou aqui')
        this.visualManagement.errorNoValues()
      });
  }

  conversor(cotacao) {
    return this.inputFirstCoin.value * Number(cotacao)
  }
}