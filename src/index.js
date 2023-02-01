// import "./css/style.css"; //importing css

const cryptoSelect = document.querySelector(".cryptoSelect");

const inputAmount = document.querySelector(`#inputAmount`);
const fiatCurrencySelect = document.querySelector(".fiatCurrencySelect");

const output = document.querySelector(`#output`);
const form = document.querySelector("#conversion-form");

async function fetchCryptocurrencies() {
  try {
    let response = await fetch(
      `https://api.coinconvert.net/convert/${cryptoSelect.value}/${fiatCurrencySelect.value}?amount=${inputAmount.value}`
    );

    let date = await response.json();
    console.log(date);
    output.value = date[fiatCurrencySelect.value.toUpperCase()];
  } catch (err) {
    console.log(err);
  }
}
fetchCryptocurrencies();
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchCryptocurrencies();
});
