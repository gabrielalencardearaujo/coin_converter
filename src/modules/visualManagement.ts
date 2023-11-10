import { baseCoins } from './makeshift_database';
import { paresMoedas } from './database_pares';

export class VisualManagement {
  constructor(
    private selectFirstCoin: HTMLSelectElement, 
    private inputCoinFrom: HTMLInputElement, 
    private inputResult: HTMLInputElement, 
    private selectSecondCoin: HTMLSelectElement) {
      this.listAllCoins()
    }

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
    option.textContent = `${coin} `
    input.appendChild(option)
  }

  showNameCoin(name: string, secondInput?: boolean) {
    if(!name) return this.inputCoinFrom.setAttribute('placeholder', ``);

    if(secondInput) 
      return this.inputResult.setAttribute('placeholder', `${baseCoins[name]}`);
    else
      return this.inputCoinFrom.setAttribute('placeholder', `${baseCoins[name]}`) ; 
  }

  searchPairs(siglaMoeda: string) {
    this.selectSecondCoin.innerHTML = '';
    
    if(!siglaMoeda) return this.errorNoValues() ;

    for (let coins of paresMoedas[siglaMoeda]) {
      for (let nameCoin in baseCoins) {
        if (coins == nameCoin) {
          this.createOption(coins, this.selectSecondCoin, baseCoins[nameCoin])
        }
      }
    }
  }
  
  showResult(result: string) {
    const formatResult = Number(result).toLocaleString('pt-br', { style: 'currency', currency: this.selectSecondCoin.value })
    this.inputResult.value = formatResult;
  }

  searchDataBase(selectCoin: string) {
    for (let coin in baseCoins) {      
      if (coin === selectCoin) { return baseCoins[selectCoin] }
    }
  }

  errorNoValues() {
    this.inputResult.value = ''
    this.inputResult.setAttribute('placeholder', 'Preencha os campos')
  }
}
