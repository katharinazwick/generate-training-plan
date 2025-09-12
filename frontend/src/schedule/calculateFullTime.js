import {enforceValidInput} from "./correctInput.js";

const inputs = [
    document.getElementById("warmupInput"),
    document.getElementById("runningInput"),
    document.getElementById("physicalStrengthInput"),
    document.getElementById("cooldownInput")
];

const intensity = document.getElementById("intensityInput");
const totalTimeDisplay = document.getElementById("totalTime");

// Funktion zum Berechnen der Gesamtdauer
function updateTotalTime() {
    let total = 0;
    inputs.forEach(input => {
        const value = Number(input.value);
        if (!isNaN(value)) total += value;
        enforceValidInput(input, 0, 120, 5);
    });
    enforceValidInput(intensity, 1, 5, 1);
    totalTimeDisplay.textContent = `Total time: ${total} min`;
}

// EventListener für dynamisches Mitzählen
inputs.forEach(input => {
    input.addEventListener("input", updateTotalTime);
});

intensity.addEventListener("input", updateTotalTime);


