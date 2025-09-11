import {getRandomTrainingForPart} from "./generatePlanForParts.js";

export function getRandomTraining(timeForParts) {
    return{
        warmup: getRandomTrainingForPart('warmup', timeForParts),
        running: getRandomTrainingForPart('running', timeForParts),
        physicalStrength: getRandomTrainingForPart('physicalStrength', timeForParts),
        cooldown: getRandomTrainingForPart('cooldown', timeForParts)
    };
}
