function GetBMIResult() {
   
   let sizeInput = document.querySelector("#size-input").value;
   let weightInput = document.querySelector("#weight-input").value;
   let calculationResult = document.querySelector(".calculation-result");
   let calculationText = document.querySelector(".calculation-text");

   let BMIResult = (weightInput / Math.pow(sizeInput/100, 2)).toFixed(1);
   
   calculationResult.textContent = BMIResult;

   const BMIData = [
      { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
      { name: "Bonne santé", color: "green", range: [18.5, 25] },
      { name: "Surpoids", color: "lightcoral", range: [25, 30] },
      { name: "Obésité modérée", color: "orange", range: [30, 35] },
      { name: "Obésité sévère", color: "crimson", range: [35, 40] },
      { name: "Obésité morbide", color: "purple", range: 40 }
   ];

   if (BMIResult <= 0) {
      calculationText.textContent = `Résultat: ${BMIData[0].name}`
   }
   else if (BMIResult > BMIData[BMIData.length - 1].range) {
      calculationText.textContent = `Résultat: ${BMIData[BMIData.length - 1].name}`
   }
   else {
      calculationText.textContent = `Résultat: ${BMIData[BMIData.indexOf(BMIData.find(el => BMIResult > el.range[0] && BMIResult <= el.range[1]))].name}`
   }

}

const button = document.querySelector("button");

button.addEventListener("click", GetBMIResult)
