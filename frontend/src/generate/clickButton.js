import {getRandomTraining} from "./generatePlan.js";
import {updateUrlWithData} from "../link/updateUrl.js";
import {outputDatas} from "../output/output.js";

export function buttonIsClicked() {

    const calculateButton = document.getElementById("calculateButton");


    calculateButton.addEventListener("click", () => {
        // Werte auslesen und in Number umwandeln
        const warmup = Number(document.getElementById("warmupInput").value);
        const running = Number(document.getElementById("runningInput").value);
        const physicalStrength = Number(document.getElementById("physicalStrengthInput").value);
        const cooldown = Number(document.getElementById("cooldownInput").value);
        const intensity = Number(document.getElementById("intensityInput").value);
//intesity an funktion weiterleiten
        // Validierung: Min, Max und Step prüfen
        const isValid = (value, min, max, step) => {
            return (
                !isNaN(value) &&
                value >= min &&
                value <= max &&
                ((value - min) % step === 0)
            );
        };
        //actually want to use the parts array but is invalid

        if (
            !isValid(warmup, 0, 120, 5) ||
            !isValid(running, 0, 120, 5) ||
            !isValid(physicalStrength, 0, 120, 5) ||
            !isValid(cooldown, 0, 120, 5) ||
            !isValid(intensity, 1, 5, 1)
        ) {
            alert("Please enter a intensity");
            return;
        }

        const timeForParts = {warmup, running, physicalStrength, cooldown};

        for (let key in timeForParts) {
            if (timeForParts[key] === 0 && (key === "warmup" || key === "cooldown")) {
                timeForParts[key] = 10;
            }
        }

        const data = getRandomTraining(timeForParts, intensity);
        const meta = { timeForParts: { ...timeForParts }, intensity };

        outputDatas(data, meta);
        updateUrlWithData(data, meta);
    });
}