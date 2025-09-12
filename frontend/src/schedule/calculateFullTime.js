import {enforceValidInput} from "./correctInput.js";

const inputs = [
    document.getElementById("warmupInput"),
    document.getElementById("runningInput"),
    document.getElementById("physicalStrengthInput"),
    document.getElementById("cooldownInput")
];

const totalTimeDisplay = document.getElementById("totalTime");

// Funktion zum Berechnen der Gesamtdauer
function updateTotalTime() {
    let total = 0;
    inputs.forEach(input => {
        const value = Number(input.value);
        if (!isNaN(value)) total += value;
        enforceValidInput(input, 0, 120, 5);
    });
    totalTimeDisplay.textContent = `Total time: ${total} min`;
}

// EventListener für dynamisches Mitzählen
inputs.forEach(input => {
    input.addEventListener("input", updateTotalTime);
});
