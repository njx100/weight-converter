const weightInPoundsEl = document.getElementById("input");
const weightInKgEl = document.getElementById("weight-in-kg");
const errorEl = document.getElementById("error");
const infoEl = document.getElementById("info-text");

function hideAll() {
    infoEl.style.display = "none";
    errorEl.style.display = "none";
}

function weightConverter() {
   const weight = weightInPoundsEl.value;
   if (weight < 0) {
    infoEl.style.display = "none";
    errorEl.style.display = 'block';
    setTimeout(hideAll, 3000);
   } else {
    infoEl.style.display = "block";
    errorEl.style.display = 'none';
    const result = weight * 0.45359237;
    weightInKgEl.innerText = `${result.toFixed(2)} Kg`;
    weightInKgEl.style.fontWeight = 700;
    setTimeout(hideAll, 10000);  
   }
}


