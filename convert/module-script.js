
import translator, { convertCurrency,colorMatchFruit } from "./modules/converters.js";

const buttons = document.querySelectorAll(".hi-btn");
const hiPara = document.getElementById("hiPara");

const convertBtn = document.getElementById("convertBtn");
const amountInput = document.getElementById("amount");
const currencyCountry = document.getElementById("country");
const currencyOutcome = document.getElementById("currencyOutcome");
const colorInput = document.getElementById('colorInput');
const colorBtn = document.getElementById('colorBtn')
const colorDiv=document.getElementById('colorDiv')

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    
    hiPara.textContent = translator(button.value);
  });
});

// buttons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//       e.preventDefault();
//       console.log(button.value);
//       hiPara.textContent = translator(helloObject, button.value);
//     });
//   });

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const outcome = convertCurrency(amountInput.value, currencyCountry.value);

  currencyOutcome.textContent = outcome;
});

colorBtn.addEventListener('click', (e) => {
  e.preventDefault()

  
  const colorValue = colorInput.value.trim(); // 去除输入值的空白
 
    colorDiv.textContent = colorMatchFruit(colorValue)
  
 

})