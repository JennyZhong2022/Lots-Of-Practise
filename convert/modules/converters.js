import dict ,{ colorFruit }  from "./data.js";


export const convertCurrency = (amount, country) => {
  if (country === "PLN") {
    let convRate = 2.62;
    return `Amount in ${country}: ${amount * convRate}`;
  } else if (country === "GBP") {
    let convRate = 0.52;
    return `Amount in ${country}: ${amount * convRate}`;
  } else if (country === "IQD") {
    let convRate = 874.12;
    return `Amount in ${country}: ${amount * convRate}`;
  }
};

export const colorMatchFruit = (color) => {
  return colorFruit[color]
}

const translator = (lang) => {
  return dict[lang];
};

// const translator = (object, lang) => {
//     return object[lang];
//   }


export default translator;