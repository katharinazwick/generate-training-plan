export function readUrlData() {
    const params = new URLSearchParams(window.location.search);
    const data = {};

    for (const [part, ids] of params.entries()) {
        data[part] = ids.split(",");
    }

    return data;
}