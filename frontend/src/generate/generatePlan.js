import {getRandomTrainingForPart} from "./generatePlanForParts.js";
import {parts} from "./parts.js";

export function getRandomTraining(timeForParts, targetAverageIntensity) {
    return{
        warmup: getRandomTrainingForPart(parts[0], timeForParts, targetAverageIntensity),
        running: getRandomTrainingForPart(parts[1], timeForParts, targetAverageIntensity),
        physicalStrength: getRandomTrainingForPart(parts[2], timeForParts, targetAverageIntensity),
        cooldown: getRandomTrainingForPart(parts[3], timeForParts, targetAverageIntensity)
    };
}
