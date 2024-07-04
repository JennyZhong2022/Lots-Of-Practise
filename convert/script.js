

const amount = document.querySelector("#amount")
const country=document.querySelector('#country')
const btn=document.querySelector('#convertBtn')
const currencyOutcome= document.querySelector('#currencyOutcome')
const form = document.querySelector('#currencyForm')



const convertCurrency = (amount, country) => {
  let output; 
  if (country === "PLN") {
    let convRate = 2.62;
    output = `Amount in ${country}: ${amount * convRate}`;
  } else if (country === "GBP") {
    let convRate = 0.52;
    output = `Amount in ${country}: ${amount * convRate}`;
  } else if (country === "IQD") {
    let convRate = 874.12;
    output = `Amount in ${country}: ${amount * convRate}`;
  }
  return output;
};

const converter = (e) => {
e.preventDefault();

const AUDuAmount = amount.value
const countryOption= country.value
currencyOutcome.textContent=  convertCurrency(AUDuAmount, countryOption)
}

form.addEventListener('submit',converter)










