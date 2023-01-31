import "./css/style.css"; //importing css

const dropdown = document.querySelector(`#dropdown`);
const value = dropdown.options[dropdown.selectedIndex];

const inputAmount = document.querySelector(`#inputAmount`);
const dropdown2 = document.querySelector(`#dropdown2`);
const value2 = dropdown2.options[dropdown.selectedIndex];

const output = document.querySelector(`#output`);
const form = document.querySelector("#conversion-form");

async function fetchCryptocurrencies(e) {
  e.preventDefault();
  try {
    let response = await fetch(
      `https://api.coinconvert.net/convert/${value.value}/${value2.value}?amount=${inputAmount.value}`
    );

    let date = await response.json();
    console.log(date);
    output.innerText = `${date.value2.value}`;
  } catch (err) {
    console.log(err);
  }
}
form.addEventListener("submit", fetchCryptocurrencies);
