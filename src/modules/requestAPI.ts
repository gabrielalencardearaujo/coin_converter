import { VisualManagement } from './visualManagement.js';

export class RequestAPI {
  constructor(
    private firstCoin: HTMLSelectElement,
    private secondCoin: HTMLSelectElement,
    private inputFirstCoin: HTMLInputElement,
    private inputResult: HTMLInputElement,
    private visualManagement: VisualManagement,
  ){}

  async requestCoins() {
    let paridade = `${this.firstCoin.value}-${this.secondCoin.value}`;
    const response = await fetch(`https://economia.awesomeapi.com.br/last/${paridade}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8'
      }
    })
    const json = await response.json();  
    paridade = paridade.replace('-', '')
    return json[paridade].bid
  }

  conversor(cotacao: string) {
    return +this.inputFirstCoin.value * Number(cotacao)
  }
}