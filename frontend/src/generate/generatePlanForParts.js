import {database} from "./database.js";

//console.log(getRandomTrainingForPart("running"));

export function getRandomTrainingForPart(part, timeForParts) {
    const partExercises = database.filter(ex => ex.part === part);
    const targetTime = timeForParts[part];

    let result = [];
    let currentTime = 0;

    // Shuffle-Funktion
    const shuffled = partExercises.sort(() => 0.5 - Math.random());

    for (let ex of shuffled) {
        if (currentTime + ex.time <= targetTime) {
            result.push(ex);
            currentTime += ex.time;
        }
        if (currentTime === targetTime) break;
    }

    return result;
}