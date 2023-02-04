const spotPrice = document.getElementById("spot-price");
const rDomestic = document.getElementById("r-domestic");
const rForeign = document.getElementById("r-foreign");
const valDate = document.getElementById("t");
const calButton = document.getElementById("calculate");
const bodyPart = document.getElementById("showcase");
const domCurrency = document.getElementById("domestic-currency");
const forCurrency = document.getElementById("foreign-currency");

function calculate() {
  event.preventDefault();
  const res =
    parseInt(spotPrice.value) *
    ((1 + (parseFloat(rDomestic.value) * parseInt(valDate.value)) / 360) /
      (1 + (parseFloat(rForeign.value) * parseInt(valDate.value)) / 360));
  const result = res.toFixed(2);
  if (isNaN(result)) {
    alert("Please give number");
    spotPrice.value = "";
    rDomestic.value = "";
    rForeign.value = "";
    valDate.value = "";
  } else {
    const div = document.createElement("div");
    div.classList.add("result-section");
    bodyPart.appendChild(div);
    const resSection = document.createElement("h5");
    resSection.classList.add("conclude");
    resSection.innerText = `Theoretical Price of ${forCurrency.value}${domCurrency.value} Future Contract: ${result} ${domCurrency.value}`;
    div.appendChild(resSection);
  }
}

calButton.addEventListener("click", calculate);
