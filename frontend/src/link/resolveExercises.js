import { database } from "../generate/database.js";

// wandelt die IDs aus der URL in richtige Objekte um
export function resolveExercises(urlData) {
    const resolved = {};

    Object.keys(urlData).forEach(part => {
        resolved[part] = urlData[part]
            .map(id => database.find(ex => ex.id === id))
            .filter(Boolean);
    });
console.log(resolved);
    return resolved;
}


