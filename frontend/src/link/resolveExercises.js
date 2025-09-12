import { database } from "../generate/database.js";

// wandelt die IDs aus der URL in richtige Objekte um
export function resolveExercises(data) {
    const resolved = {};

    Object.keys(data).forEach(part => {
        resolved[part] = data[part]
            .map(id => database.find(ex => ex.id === id))
            .filter(Boolean);
    });
    return resolved;
}


