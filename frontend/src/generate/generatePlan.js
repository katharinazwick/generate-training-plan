import {getRandomTrainingForPart} from "./generatePlanForParts.js";
import {parts} from "./parts.js";

export function getRandomTraining(timeForParts) {
    return{
        warmup: getRandomTrainingForPart(parts[0], timeForParts),
        running: getRandomTrainingForPart(parts[1], timeForParts),
        physicalStrength: getRandomTrainingForPart(parts[2], timeForParts),
        cooldown: getRandomTrainingForPart(parts[3], timeForParts)
    };
}
