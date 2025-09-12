import {resolveExercises} from "./resolveExercises.js";
import {outputDatas} from "../output/output.js";
import {readUrlData} from "./readUrl.js";
import {buttonIsClicked} from "../generate/clickButton.js";
import {fillSchedule} from "../schedule/fillSchedule.js";

document.addEventListener("DOMContentLoaded", () => {
    const {data, meta} = readUrlData();
    const resolved = resolveExercises(data);
    if (Object.keys(data).length > 0) {
    }
    outputDatas(resolved, meta);
    fillSchedule(meta);
    buttonIsClicked();
});