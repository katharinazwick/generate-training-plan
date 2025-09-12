import {resolveExercises} from "./resolveExercises.js";
import {outputDatas} from "../output/output.js";
import {readUrlData} from "./readUrl.js";
import {buttonIsClicked} from "../generate/clickButton.js";

document.addEventListener("DOMContentLoaded", () => {
    const urlData = readUrlData();
    if (Object.keys(urlData).length > 0) {
        const resolved = resolveExercises(urlData);
        outputDatas(resolved);
    }
    buttonIsClicked()
});