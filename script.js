const fromAmountElement = document.querySelector('.amount');
const convertedAmountElement = document.querySelector('.convertedAmount');
const fromCurrencyElement = document.querySelector('.fromCurrency');
const toCurrencyElement = document.querySelector('.toCurrency');
const resultElement = document.querySelector('.result');

//array to populates select tags with these countries
const countries = [ 
{ code: "USD", name:"United States Doller"},
{ code: "INR", name:"Indian Rupee"},
{ code: "ALL", name:"Albania lek"},
{ code: "DZD", name:"Algerian Diner"},
{ code: "INR", name:"Indian Rupee"},
{ code: "INR", name:"Indian Rupee"},
{ code: "INR", name:"Indian Rupee"},
{ code: "INR", name:"Indian Rupee"},
{ code: "INR", name:"Indian Rupee"},
{ code: "INR", name:"Indian Rupee"},



];

//showing countries from array to select tag
countries.forEach(country =>{
  const option1 = document.createElement('option');
  const option2 = document.createElement('option');

  option1.value = option2.value = country.code;
  option1.textContent = option2.textContent = `${country.code} (${country.name})`;

  fromCurrencyElement.appendChild(option1);
  toCurrencyElement.appendChild(option2);

  //setting default values of select tag
  fromCurrencyElement.value = "USD";
  toCurrencyElement.value = "INR";
})

//function to get exchange rate using API
const getExchangeRate = async () =>{
  const amount = parseFloat(fromAmountElement.value);
  const fromCurrency = fromCurrencyElement.value;
  const toCurrency = toCurrencyElement.value;

  //fetch data from API
  const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
  const data = await response.json();

  const conversionRate = data.rates[toCurrency];
  const convertedAmount =( amount * conversionRate);

  convertedAmountElement.value = convertedAmount;
  resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`
}


//fetching exchange raye when user input the amount
fromAmountElement.addEventListener('input'.getExchangeRate);

//fetching exchange raye when user input the currency
fromCurrencyElement.addEventListener('change'.getExchangeRate);
toCurrencyElement.addEventListener('change'.getExchangeRate);
window.addEventListener('load'.getExchangeRate);








