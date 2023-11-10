// @ts-nocheck
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

const requestAPI = new RequestAPI(choiceCoinFrom, choiceCoinTo, inputFrom, inputTo, visualManagement);

// Evento clique swap.
btnSwap.onclick = () => {
  if (
    choiceCoinFrom.value === '' ||
    choiceCoinTo.value === '' ||
    inputFrom.value === ''
  )
    return visualManagement.errorNoValues();

  requestAPI.requestCoins()
  .then(valorParidadeMoedas => {
    const conversao = requestAPI.conversor(valorParidadeMoedas)
    visualManagement.showResult(conversao.toFixed(2))
  });
}

choiceCoinFrom.onblur = () => {
  visualManagement.showNameCoin(choiceCoinFrom.value)
  visualManagement.searchPairs(choiceCoinFrom.value)
}

choiceCoinTo.onchange = (event) => {
  inputTo.value = ''
  visualManagement.showNameCoin((event.target as HTMLSelectElement).value, true);
}
