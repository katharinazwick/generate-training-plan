import { database } from "./database.js";

export function getRandomTrainingForPart(part, timeForParts, targetIntensity) {
    const partExercises = database.filter(ex => ex.part === part);
    const targetTime = timeForParts[part];

    let result = [];
    let currentTime = 0;
    let usedTypes = new Set();

    // Shuffle-Funktion
    const shuffled = partExercises.sort(() => 0.5 - Math.random());

    for (let ex of shuffled) {
        const newTime = currentTime + ex.time;

        // Bedingung: Zeit + max. zwei Typen + Intensität im Bereich
        if (
            newTime <= targetTime &&
            (usedTypes.has(ex.type) || usedTypes.size < 2) &&
            (ex.intensity >= targetIntensity - 1 && ex.intensity <= targetIntensity + 1)
        ) {
            result.push(ex);
            currentTime = newTime;
            usedTypes.add(ex.type);
        }

        if (currentTime >= targetTime) {
            break;
        }
    }
    return result;
}
