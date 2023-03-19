const weightInPoundsEl = document.getElementById("input");
const weightInKgEl = document.getElementById("weight-in-kg");
const errorEl = document.getElementById("error");
const infoEl = document.getElementById("info-text");

function weightConverter() {
   const weightInPounds = weightInPoundsEl.value;
   if (weightInPounds < 0) {
    infoEl.style.display = "none";
    errorEl.style.display = 'block';
   } else {
    infoEl.style.display = "block";
    errorEl.style.display = 'none';
    const weightInKg = weightInPounds * 0.45359237;
    weightInKgEl.innerText = `${weightInKg.toFixed(2)} Kg`;
    weightInKgEl.style.fontWeight = 700;
   }
   
}
