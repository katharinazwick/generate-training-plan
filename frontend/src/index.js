import {outputDatas} from "./output.js";

const calculateButton = document.getElementById("calculateButton");

calculateButton.addEventListener("click", () => {
    // Werte auslesen und in Number umwandeln
    const warmup = Number(document.getElementById("warmupInput").value);
    const running = Number(document.getElementById("runningInput").value);
    const physicalStrength = Number(document.getElementById("physicalStrengthInput").value);
    const coolDown = Number(document.getElementById("coolDownInput").value);

    // Validierung: Min, Max und Step prüfen
    const isValid = (value, min, max, step) => {
        return (
            !isNaN(value) &&
            value >= min &&
            value <= max &&
            ((value - min) % step === 0)
        );
    };

    if (
        !isValid(warmup, 0, 20, 5) ||
        !isValid(running, 0  , 60, 5) ||
        !isValid(physicalStrength, 0, 60, 5) ||
        !isValid(coolDown, 0, 20, 5)
    ) {
        alert("Bitte gültige Werte im angegebenen Bereich eingeben!");
        return;
    }

    const fullTime = warmup + running + physicalStrength + coolDown;

    if (fullTime <30 || fullTime > 120) {
        alert("Bitte zwischen 30 und 120 Minuten ausfüllen");
        return;
    }

    // Werte in Objekt speichern
    const timeForParts = { warmup, running, physicalStrength, coolDown };

    // Berechnung ausführen
    outputDatas(timeForParts);
});
