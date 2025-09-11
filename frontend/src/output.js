import {getRandomTraining} from "./plan.js";

export function outputDatas(timeForParts) {
    const data = getRandomTraining(timeForParts);

    const container = document.getElementById('workoutContainer');
    container.innerHTML = '';
    Object.keys(data).forEach(part => {
        const section = document.createElement('div');
        section.className = 'part-section';

        const title = document.createElement('div');
        title.className = 'part-title';
        title.textContent = part.charAt(0).toUpperCase() + part.slice(1);
        section.appendChild(title);

        data[part].forEach(ex => {
            const row = document.createElement('div');
            row.className = 'exercise-row';

            const name = document.createElement('div');
            name.className = 'exercise-name';
            name.textContent = ex.name;

            const time = document.createElement('div');
            time.className = 'exercise-time';
            time.textContent = ex.time + ' min';

            const desc = document.createElement('div');
            desc.className = 'exercise-description';
            desc.textContent = ex.description;

            row.appendChild(name);
            row.appendChild(time);
            row.appendChild(desc);

            section.appendChild(row);
        });

        container.appendChild(section);
    });
}
