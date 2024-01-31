const CheeseImg = document.querySelector('.img');

const Cheese = parseInt(localStorage.getItem('Cheese')) || 0;
const ClickBoost = parseInt(localStorage.getItem('ClickBoost')) || 1;
let Upgrade1 = parseInt(localStorage.getItem('Upgrade1')) || 0;

  function CheeseClicked() {
  Cheese += ClickBoost;
  updateDisplay(); // Add this line to update counters after clicking
}




  function updateDisplay() {
    const displayElement = document.getElementById("variable-value");
    displayElement.textContent = Cheese;
    const ClickBooster = document.getElementById("ClickBooster");
    ClickBooster.textContent = "Click Boost: " + ClickBoost;
    localStorage.setItem('Upgrade1', Upgrade1);
    localStorage.setItem('Cheese', Cheese);
    localStorage.setItem('ClickBoost', ClickBoost);
  }


updateDisplay(); // Initial display update

if (Upgrade1 === 1) {
  document.getElementById('upgrade').style.display = 'none'; // Hide upgrade if purchased
}

function Upgrade1() {
  if (Upgrade1 === 0 && Cheese >= 100) {
    Upgrade1++;
    Cheese -= 100;
    ClickBoost++;
    localStorage.setItem('Cheese', Cheese);
    localStorage.setItem('Upgrade1', Upgrade1);
    updateDisplay();
    document.getElementById('upgrade').style.display = 'none'; // Hide upgrade after purchase
  } else if (Cheese < 100) {
    alert("Not enough Cheese, keep on clickin!");
  } else {
    // Handle scenario where cheese is enough but upgrade already purchased
    // (you can display a message or provide options here)
    console.log("Upgrade already purchased!");
  }
}
