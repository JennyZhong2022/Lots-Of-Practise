const form = document.querySelector('.form');
const message = document.getElementById('message');
const btn = document.getElementById('btn');
const beerImg = document.querySelector('img');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const age = document.getElementById("age").value;
  const country = document.getElementById("country").value;
  const drunk = document.getElementById("drunk").value;

  let legalDrinkingAge;
  switch (country) {
    case "Australia":
    case "Poland":
    case "UK":
      legalDrinkingAge = 18;
      break;
    case "USA":
      legalDrinkingAge = 21;
      break;
    default:
      legalDrinkingAge = 18;
  }

  let messageText = "";
  if (age < legalDrinkingAge) {
    messageText = `You can't come in because you are under the legal drinking age of ${legalDrinkingAge}.`;
    setMessage("failure", messageText);
  } else if (drunk > 3) {
    messageText = `You can't come in because you are too drunk.`;
    setMessage("failure", messageText);
  } else {
    messageText = `Come in!`;
    setMessage("success", messageText);
  }
});



function setMessage(status, text) {
  // Clear existing message
  message.innerHTML = "";
  
  // Create message text
  const messageTxt = document.createElement("p");
  messageTxt.id = "messageTxt";
  messageTxt.textContent = text;
  
  // Add class based on status
  if (status === "success") {
    message.className = "message message--success";
    btn.style.backgroundColor = "#008000";
    beerImg.src = "./beer-imgs/green_beer.svg"; // Use appropriate green beer image
  } else {
    message.className = "message message--failure";
    btn.style.backgroundColor = "#b40f0f";
    beerImg.src = "./beer-imgs/red_beer.svg"; // Use appropriate red beer image
  }
  
  // Append message
  message.appendChild(messageTxt);
}