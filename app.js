function ArePromptsCorrect() {
   function IsSizeCorrect() {
      const calculationResult = document.querySelector(".calculation-result");
      const calculationText = document.querySelector(".calculation-text");
      const sizeInput = document.querySelector("#size-input").value;
      const minSize = 10;
      const maxSize = 299;

      if (sizeInput >= minSize && sizeInput <= maxSize) {
         return true;
      }
      else {
         calculationResult.textContent = 0;
         calculationResult.style.color = "black";
         calculationText.textContent = "Taille non valide";
      }
   }
   
   function isWeightCorrect() {
      const calculationResult = document.querySelector(".calculation-result");
      const calculationText = document.querySelector(".calculation-text");
      const weightInput = document.querySelector("#weight-input").value;
      const minWeight = 10;
      const maxWeight = 999;

      if (weightInput >= minWeight && weightInput <= maxWeight) {
         return true;
      }
      else {
         calculationResult.textContent = 0;
         calculationResult.style.color = "black";
         calculationText.textContent = "Poids non valide";
      }
   }

   return IsSizeCorrect() && isWeightCorrect();
}

function GetResults() {
   //Décalaration des variables
   const BMIData = [
      { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
      { name: "Bonne santé", color: "green", range: [18.5, 25] },
      { name: "Surpoids", color: "lightcoral", range: [25, 30] },
      { name: "Obésité modérée", color: "orange", range: [30, 35] },
      { name: "Obésité sévère", color: "crimson", range: [35, 40] },
      { name: "Obésité morbide", color: "purple", range: 40 }
   ];
   const sizeInput = document.querySelector("#size-input").value;
   const weightInput = document.querySelector("#weight-input").value;
   const calculationResult = document.querySelector(".calculation-result");
   const calculationText = document.querySelector(".calculation-text");

   // Calcul de l'IMC et du Résultat Texte
   const BMIResult = (weightInput / Math.pow(sizeInput/100, 2)).toFixed(1);

   if (BMIResult > BMIData[BMIData.length - 1].range) {
      calculationResult.textContent = BMIResult;
      calculationText.textContent = `Résultat : ${BMIData[BMIData.length - 1].name}`;
      calculationResult.style.color = BMIData[BMIData.length - 1].color;
   }
   else {
      calculationResult.textContent = BMIResult;
      calculationText.textContent = `Résultat : ${BMIData[BMIData.indexOf(BMIData.find(el => BMIResult > el.range[0] && BMIResult <= el.range[1]))].name}`;
      calculationResult.style.color = BMIData[BMIData.indexOf(BMIData.find(el => BMIResult > el.range[0] && BMIResult <= el.range[1]))].color;
   }
}

const button = document.querySelector("button");

button.addEventListener("click", e => {
   e.preventDefault();

   if (ArePromptsCorrect()) {
      GetResults()
   }
});