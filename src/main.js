// import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/style.css';
import { RequestAPI } from './modules/requestAPI.js';
import { VisualManagement } from './modules/visualManagement.js';
import { paresMoedas } from './modules/database_pares.js';
// API: https://docs.awesomeapi.com.br/api-de-moedas

(function () {
  const btnSwap = document.querySelector('.btn')
  const choiceCoinFrom = document.querySelector('#fromCoin')
  const choiceCoinTo = document.querySelector('#toCoin')
  const inputFrom = document.querySelector('.input_Value_Coin')
  const inputTo = document.querySelector('.input_show_Coin')
  const requestAPI = new RequestAPI(choiceCoinFrom, choiceCoinTo, inputFrom, inputTo);
  const visualManagement = new VisualManagement(choiceCoinFrom, inputFrom, inputTo, choiceCoinTo)
  document.getElementById("valorMoeda").step = "any";

  visualManagement.listAllCoins(paresMoedas)

  btnSwap.onclick = () => {
    (!(choiceCoinFrom.value === '' || choiceCoinTo.value === '' || inputFrom.value === '' || inputFrom.value === '')) ? requestAPI.managerAPP() : visualManagement.errorNoValues();
  }

  choiceCoinFrom.onblur = () => {
    visualManagement.searchDataBase(choiceCoinFrom)
    visualManagement.searchPairs(paresMoedas, choiceCoinFrom.value)
  }

})();





















// const options = {
//   url: `https://economia.awesomeapi.com.br/last/BTC-USD`,
//   method: 'GET',
//   headers: {
//     'Accept': 'application/json',
//     'Accept-Charset': 'utf-8'
//   }
// }

// const callback_Cotacoes = (erro, res, body) => {
//   let json = JSON.parse(body)
//   console.log(json)
// }

// const callback_BTC = (erro, res, body) => {
//   let json = JSON.parse(body)
//   let BTC = json.BTCBRL['bid']
//   let dia = json.BTCBRL['create_date']
//   console.log(`Cotacao BTC em reais: ${BTC} mil\n`, dia)
// }

// request(options, callback_Cotacoes)
