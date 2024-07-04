const Country_URL = 'https://restcountries.com/v3.1/name/'

const getCountry = async (country) => {
  const response = await fetch(`${Country_URL}${country}`)
  if (!response.ok) {
    throw new Error('Can not find the capital')
  }
 
  const data = await response.json()
  return data

}

const btn = document.querySelector('button')


// const inputValue = document.querySelector('input').value.trim()
// console.log(inputValue);

// const createTextEl = () => {
//   const countryDataContainer = document.querySelector('.countryResultDisplay')
//   const para = document.createElement('p')
//   para.textContent=error.message
//   countryDataContainer.appendChild(para)
// }

btn.addEventListener('click', async (e) => {
  e.preventDefault()
  

  try {
   
    const inputValue = document.querySelector('input').value.trim()
      const countryDataContainer = document.querySelector('.countryResultDisplay')
      countryDataContainer.innerHTML=''
     
      const countryData = await getCountry(inputValue)
      const para = document.createElement('p')
      para.textContent=countryData[0].capital? countryData[0].capital[0]:'No capital found'
      countryDataContainer.appendChild(para)
      console.log(countryData[0].capital);
  } catch (error) {
    const inputValue = document.querySelector('input').value.trim()
    if (inputValue === '' || !/[a-zA-Z]/.test(inputValue)) {
      const countryDataContainer = document.querySelector('.countryResultDisplay')
      const para = document.createElement('p')
      para.textContent='please enter country'
      countryDataContainer.appendChild(para)
      console.log('please enter country');
    } else {
      const countryDataContainer = document.querySelector('.countryResultDisplay')
      const para = document.createElement('p')
      para.textContent=error.message
      countryDataContainer.appendChild(para)
    }
     
  } finally {
   
    document.querySelector('form').reset()
  }

 
})



const user = 'remi'
const userSession = ['home', 'settings', 'home']

const combine = (username, history) => {
  return {
    username,
    history
  }
}

const userHistory = combine(user, userSession)
console.log(userHistory);