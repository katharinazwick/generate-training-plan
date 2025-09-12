import {database} from "./database.js";


export function getRandomTrainingForPart(part, timeForParts, targetAverageIntensity) {
    const partExercises = database.filter(ex => ex.part === part);
    const targetTime = timeForParts[part];

    let result = [];
    let currentTime = 0;
    let intensitySum = 0;
    let usedTypes = new Set();

    // Shuffle-Funktion
    const shuffled = partExercises.sort(() => 0.5 - Math.random());

    for (let ex of shuffled) {
        const newTime = currentTime + ex.time;
        const newIntensitySum = intensitySum + ex.intensity;
        const newCount = result.length + 1;
        const newAverage = newIntensitySum / newCount;

        // Prüfen:
        // 1. Zeit passt
        // 2. Maximal zwei Typen
        // 3. Durchschnitt nach Hinzufügen noch im Zielbereich (+-1)
        if (
            newTime <= targetTime &&
            (usedTypes.has(ex.type) || usedTypes.size < 2) &&
            newAverage <= targetAverageIntensity + 1
        ) {
            result.push(ex);
            currentTime = newTime;
            intensitySum = newIntensitySum;
            usedTypes.add(ex.type);
        }

        // Stop nur, wenn Zeit erreicht
        if (currentTime >= targetTime) {
            break;
        }
    }
    return result;
}