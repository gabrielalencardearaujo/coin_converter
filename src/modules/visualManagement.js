import { baseCoins } from './makeshift_database.js';

export class VisualManagement {
  constructor(inputFirstCoin, CoinFrom, inputResult, secondCoin) {
    this.inputValueCoin = CoinFrom
    this.coinFrom = inputFirstCoin
    this.inputResult = inputResult
    this.coinTo = secondCoin
  }

  listAllCoins(paresMoedas) {
    
    for (let coin in paresMoedas) {
      for (let nameCoin in baseCoins) {
        if (coin == nameCoin) { 
          this.createOption(coin, this.coinFrom, baseCoins[nameCoin]) 
        }
      }
    }
  }

  showNameCoin(name) {
    (name) ? this.inputValueCoin.setAttribute('placeholder', `${name}`) : this.inputValueCoin.setAttribute('placeholder', ``)
  }

  searchDataBase(firstCoin) {
    for (let coin in baseCoins) {
      if (coin === firstCoin.value) { return baseCoins[coin] }
    }
  }

  searchPairs(paresMoedas, siglaMoeda) {
    this.coinTo.innerHTML = '';
    for (let coins of paresMoedas[siglaMoeda]) {
      for (let nameCoin in baseCoins) {
        if (coins == nameCoin) { 
          this.createOption(coins, this.coinTo,  baseCoins[nameCoin])
        }
      }
    }
  }

  createOption(coin, input, nameCoin) {
    const option = document.createElement('option')
    option.setAttribute('value', `${coin}`)
    option.textContent = `${coin}  /  ${nameCoin}`
    input.appendChild(option)
  }

  showResult(result) {
    this.inputResult.value = result
  }

  errorNoValues(){
    this.inputResult.value = ''
    this.inputResult.setAttribute('placeholder', 'Preencha os campos')
  }
}

