export function updateUrlWithData(data, meta) {
    const params = new URLSearchParams();

    Object.keys(data).forEach(part => {
        const ids = data[part].map(ex => ex.id).join(",");
        if (ids) {
            params.set(part, ids);
        }
    });

        const t = meta.timeForParts;
        params.set("time_warmup", String(t.warmup));
        params.set("time_running", String(t.running));
        params.set("time_physicalStrength",String( t.physicalStrength));
        params.set("time_cooldown", String(t.cooldown));
        params.set("intensity", meta.intensity);

    const newUrl = `${window.location.origin}${window.location.pathname}?${params.toString()}`;

    // überschreibt die URL, lädt aber NICHT neu
    window.history.replaceState({}, "", newUrl);
    return newUrl;
}