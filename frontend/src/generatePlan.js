import {getRandomTrainingForPart} from "./generatePlanForParts.js";

export function getRandomTraining(timeForParts) {
    return{
        warmup: getRandomTrainingForPart('warmup', timeForParts),
        running: getRandomTrainingForPart('running', timeForParts),
        bodyWeight: getRandomTrainingForPart('physicalStrength', timeForParts),
        coolDown: getRandomTrainingForPart('coolDown', timeForParts)
    };
}
