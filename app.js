document.querySelector("#size-input").addEventListener("input", () => {
   const calculationResult = document.querySelector(".calculation-result");
   const calculationText = document.querySelector(".calculation-text");
   const size = document.querySelector("#size-input");
   const sizeValue = document.querySelector("#size-input").value;
   const minSize = 1;
   const maxSize = 999;

   if (sizeValue === "") {
      size.style.border = "2px solid white";
      calculationResult.textContent = 0;
      calculationResult.style.color = "black";
      calculationText.textContent = "En attente du résultat...";
   }
   else if (sizeValue >= minSize && sizeValue <= maxSize) {
      size.style.border = "2px solid green";
   }
   else if (sizeValue < minSize || sizeValue > maxSize) {
      size.style.border = "2px solid red";
      size.style.backgroundColor = "white";
      calculationResult.textContent = 0;
      calculationResult.style.color = "black";
      calculationText.textContent = "En attente du résultat...";
   }
}
);

document.querySelector("#weight-input").addEventListener("input", () => {
   const calculationResult = document.querySelector(".calculation-result");
   const calculationText = document.querySelector(".calculation-text");
   const weight = document.querySelector("#weight-input");
   const weightValue = document.querySelector("#weight-input").value;
   const minWeight = 1;
   const maxWeight = 999;

   if (weightValue === "") {
      weight.style.border = "2px solid white";
   }
   else if (weightValue >= minWeight && weightValue <= maxWeight) {
      weight.style.border = "2px solid green";
   }
   else {
      weight.style.border = "2px solid red";
      weight.style.backgroundColor = "white";
      calculationResult.textContent = 0;
      calculationResult.style.color = "black";
      calculationText.textContent = "En attente du résultat";
   }
}
);

document.querySelector("button").addEventListener("click", e => {
   e.preventDefault();
   if (ArePromptsCorrect()) {
      GetResults()
   }
});

function ArePromptsCorrect() {
   const calculationResult = document.querySelector(".calculation-result");
   const calculationText = document.querySelector(".calculation-text");
   const sizeValue = document.querySelector("#size-input").value;
   const weightValue = document.querySelector("#weight-input").value;

   function IsSizeCorrect() {
      const minSize = 1;
      const maxSize = 999;

      if (sizeValue >= minSize && sizeValue <= maxSize) {
         return true;
      }
      else {
         calculationResult.textContent = 0;
         calculationResult.style.color = "black";
         throw "Taille non valide";
      }
   }
   
   function isWeightCorrect() {
      const minWeight = 1;
      const maxWeight = 999;

      if (weightValue >= minWeight && weightValue <= maxWeight) {
         return true;
      }
      else {
         calculationResult.textContent = 0;
         calculationResult.style.color = "black";
         throw "Poids non valide";
      }
   }

   try {
      return IsSizeCorrect() && isWeightCorrect();
   }
   catch (error) {
      calculationText.textContent = error;
   }
};

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
   const sizeValue = document.querySelector("#size-input").value;
   const weightValue = document.querySelector("#weight-input").value;
   const calculationResult = document.querySelector(".calculation-result");
   const calculationText = document.querySelector(".calculation-text");

   // Calcul de l'IMC chiffré et du Résultat Texte
   const BMIResult = (weightValue / Math.pow(sizeValue/100, 2)).toFixed(1);

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
};