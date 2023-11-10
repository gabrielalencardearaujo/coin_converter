// import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/style.css';
import { RequestAPI } from './modules/requestAPI';
import { VisualManagement } from './modules/visualManagement';
// API: https://docs.awesomeapi.com.br/api-de-moedas

const btnSwap = document.querySelector('.btn') as HTMLButtonElement;
const choiceCoinFrom = document.querySelector('#fromCoin') as HTMLSelectElement;
const choiceCoinTo = document.querySelector('#toCoin') as HTMLSelectElement;
const inputFrom = document.querySelector('.input_Value_Coin') as HTMLInputElement;
const inputTo = document.querySelector('.input_show_Coin') as HTMLInputElement;

const visualManagement = new VisualManagement(choiceCoinFrom, inputFrom, inputTo, choiceCoinTo);

const requestAPI = new RequestAPI(choiceCoinFrom, choiceCoinTo, inputFrom, inputTo);

visualManagement.listAllCoins();

// // Evento clique swap.
btnSwap.onclick = () => {
  if (
    choiceCoinFrom.value === '' ||
    choiceCoinTo.value === '' ||
    inputFrom.value === ''
  )
    return visualManagement.errorNoValues();

  requestAPI.managerAPP()
}

choiceCoinFrom.onblur = () => {
  visualManagement.showNameCoin(choiceCoinFrom.value)
  visualManagement.searchPairs(choiceCoinFrom.value)
}






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
