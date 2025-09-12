import {updateUrlWithData} from "./updateUrl.js";
import {resolveExercises} from "./resolveExercises.js";
import {outputDatas} from "../output.js";
import {getRandomTraining} from "../generate/generatePlan.js";
import{readUrlData} from "./readUrl.js";

document.addEventListener("DOMContentLoaded", () => {
    const urlData = readUrlData();
    if (Object.keys(urlData).length > 0) {
        const resolved = resolveExercises(urlData);
        outputDatas(resolved);
    } else {
        const calculateButton = document.getElementById("calculateButton");

        calculateButton.addEventListener("click", () => {
            // Werte auslesen und in Number umwandeln
            const warmup = Number(document.getElementById("warmupInput").value);
            const running = Number(document.getElementById("runningInput").value);
            const physicalStrength = Number(document.getElementById("physicalStrengthInput").value);
            const cooldown = Number(document.getElementById("cooldownInput").value);

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
                !isValid(warmup, 0, 120, 5) ||
                !isValid(running, 0  , 120, 5) ||
                !isValid(physicalStrength, 0, 120, 5) ||
                !isValid(cooldown, 0, 120, 5)
            ) {
                alert("Please enter values between 0 and 120 in increments of 5!");
                return;
            }

            const fullTime = warmup + running + physicalStrength + cooldown;

            if (fullTime <30 || fullTime > 120) {
                alert("Please complete between 30 and 120 minutes.");
                return;
            }

            const timeForParts = { warmup, running, physicalStrength, cooldown };

            const data = getRandomTraining(timeForParts);

            outputDatas(data);
            updateUrlWithData(data);
        });
    }
});