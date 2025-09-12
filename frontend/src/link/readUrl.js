export function readUrlData() {
    const params = new URLSearchParams(window.location.search);

    const parts = ["warmup", "running", "physicalStrength", "cooldown"];
    const data = {};

    // Übungen sammeln
    parts.forEach(part => {
        const ids = params.get(part);
        data[part] = ids ? ids.split(",") : [];
    });

    // Meta sammeln
    const timeForParts = {
        warmup: Number(params.get("time_warmup")) || 0,
        running: Number(params.get("time_running")) || 0,
        physicalStrength: Number(params.get("time_physicalStrength")) || 0,
        cooldown: Number(params.get("time_cooldown")) || 0
    };

    const intensity = params.has("intensity") ? Number(params.get("intensity")) : null;
    return { data, meta: { timeForParts, intensity } };
}
