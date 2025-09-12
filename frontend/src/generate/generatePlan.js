import {getRandomTrainingForPart} from "./generatePlanForParts.js";
import {parts} from "./parts.js";
//get intensity from web
export function getRandomTraining(timeForParts) {
    return{
            warmup: getRandomTrainingForPart(parts[0], timeForParts, 1),
        running: getRandomTrainingForPart(parts[1], timeForParts, 1),
        physicalStrength: getRandomTrainingForPart(parts[2], timeForParts, 1),
        cooldown: getRandomTrainingForPart(parts[3], timeForParts, 1)
    };
}
