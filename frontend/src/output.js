import {updateUrlWithData} from "./link/updateUrl.js";

export function outputDatas(data) {
    const container = document.getElementById('workoutContainer');
    container.innerHTML = '';
    Object.keys(data).forEach(part => {
        const section = document.createElement('div');
        section.className = 'part-section';

        const title = document.createElement('div');
        title.className = 'part-title';

        // Würfel erstellen
        const cube = document.createElement('div');
        cube.innerText = '🎲';
        cube.className = 'part-cube';
        cube.addEventListener('click', () => {
            console.log(part);
        });

        // Text der Überschrift
        const text = document.createElement('span');
        text.textContent = part.charAt(0).toUpperCase() + part.slice(1) + " " + data[part].reduce((sum, ex) => sum + ex.time, 0);

        // Würfel + Text in die Überschrift einfügen
        title.appendChild(cube);
        title.appendChild(text);

        section.appendChild(title);

        // Container für Übungen
        const exerciseContainer = document.createElement('div');
        exerciseContainer.className = 'exercise-container';

        data[part].forEach((ex, index) => {
            const row = document.createElement('div');
            row.className = 'exercise-row';
            row.draggable = true;   // Drag & Drop aktivieren
            row.dataset.index = index; // Index speichern

            // Drag-Events
            row.addEventListener('dragstart', e => {
                e.dataTransfer.setData("text/plain", index);
                row.classList.add("dragging");
            });

            row.addEventListener('dragover', e => {
                e.preventDefault();
                const dragging = exerciseContainer.querySelector(".dragging");
                const rows = [...exerciseContainer.querySelectorAll(".exercise-row:not(.dragging)")];
                const afterElement = rows.find(r => e.clientY <= r.getBoundingClientRect().top + r.offsetHeight / 2);
                if (afterElement == null) {
                    exerciseContainer.appendChild(dragging);
                } else {
                    exerciseContainer.insertBefore(dragging, afterElement);
                }
            });

            row.addEventListener('dragend', () => {
                row.classList.remove("dragging");
                const newOrder = [...exerciseContainer.querySelectorAll(".exercise-row")].map(r => {
                    const idx = r.dataset.index;
                    return data[part][idx];
                });
                data[part] = newOrder;

                // URL aktualisieren
                updateUrlWithData(data);

            });

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

            exerciseContainer.appendChild(row);
        });

        section.appendChild(exerciseContainer);
        container.appendChild(section);
    });
}