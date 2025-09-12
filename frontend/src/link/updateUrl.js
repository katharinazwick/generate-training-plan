export function updateUrlWithData(data) {
    const params = new URLSearchParams();

    Object.keys(data).forEach(part => {
        const ids = data[part].map(ex => ex.id).join(",");
        if (ids) {
            params.set(part, ids);
        }
    });

    const newUrl = `${window.location.origin}${window.location.pathname}?${params.toString()}`;

    // überschreibt die URL, lädt aber NICHT neu
    window.history.replaceState({}, "", newUrl);
    return newUrl;
}
