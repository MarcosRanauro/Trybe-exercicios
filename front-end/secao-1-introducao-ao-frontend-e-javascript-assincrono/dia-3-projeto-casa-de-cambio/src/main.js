import Swal from 'sweetalert2';
import './style.css';

const searchButton = document.querySelector('.search-btn');

const coinInput = document.querySelector('#coin-input');
const coinsList = document.querySelector('.coins');

function fetchAPI(coin) {
    const url = `https://api.exchangerate.host/latest?base=${coin}`;
    return fetch(url)
    .then((response) => response.json())
    .then((data) => {
        if(data.base !== coin.toUpperCase()){
            throw new Error('Moeda não existente')    
        }
        return data.rates;
    })
}

function renderCois(coins) {
    coinsList.innerHTML = '';

    const coinsArray = Object.entries(coins);
    console.log(coinsArray);

    coinsArray.forEach((coin) => {
        const [coinName, value] = coin;
        
        const li = document.createElement('li');
        li.textContent = `${coinName} - ${value.toFixed(2)}`;
        coinsList.appendChild(li);
    })
}

function handleSearch() {
    const coin = coinInput.value.toUpperCase();

    if(!coin) {
        return Swal.fire({
            icon: 'error',
            title: 'Opsss...',
            text: 'Você precisa digitar uma moeda!'
        })
    }

    fetchAPI(coin)
    .then(renderCois)
    // .then((coin) => renderCoins(coin)); << Pode ser feito dessa forma também.
    .catch((error) => {
        Swal.fire({
            icon: 'error',
            title: 'Opsss...',
            text: error.message
        })
    })
}

searchButton.addEventListener('click', handleSearch);