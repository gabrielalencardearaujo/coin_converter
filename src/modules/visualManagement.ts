import { baseCoins } from './makeshift_database';
import { paresMoedas } from './database_pares';

export class VisualManagement implements VisualManagement {
  constructor(
    private selectFirstCoin: HTMLSelectElement, 
    private inputCoinFrom: HTMLInputElement, 
    private inputResult: HTMLInputElement, 
    private selectSecondCoin: HTMLSelectElement) {}

  listAllCoins() {
    for (let coin in paresMoedas) {
      for (let nameCoin in baseCoins) {
        if (coin == nameCoin) {
          this.createOption(coin, this.selectFirstCoin, baseCoins[nameCoin])
        }
      }
    }
  }

  createOption(coin: string, input: HTMLSelectElement, nameCoin: string) {
    const option = document.createElement('option')
    option.setAttribute('value', `${coin}`)
    option.textContent = `${coin}  /  ${nameCoin}`
    input.appendChild(option)
  }

  showNameCoin(name: string) {
    (name) ? this.inputCoinFrom.setAttribute('placeholder', `${baseCoins[name]}`) : this.inputCoinFrom.setAttribute('placeholder', ``)
  }

  searchPairs(siglaMoeda: string) {
    this.selectSecondCoin.innerHTML = '';
    for (let coins of paresMoedas[siglaMoeda]) {
      for (let nameCoin in baseCoins) {
        if (coins == nameCoin) {
          this.createOption(coins, this.selectSecondCoin, baseCoins[nameCoin])
        }
      }
    }
  }
  
  showResult(result) {
    this.inputResult.value = result
  }

  // searchDataBase(firstCoin: string) {
  //   for (let coin in baseCoins) {      
  //     if (coin === firstCoin) { return baseCoins[coin] }
  //   }
  // }

  errorNoValues() {
    this.inputResult.value = ''
    this.inputResult.setAttribute('placeholder', 'Preencha os campos')
  }
}
