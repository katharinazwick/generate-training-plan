export function enforceValidInput(input, min, max, step) {
    // 1. Ungültige Zeichen sofort entfernen
    input.addEventListener("input", () => {
        input.value = input.value.replace(/\D/g, "");
    });

    // 2. Rundung auf Step + Begrenzung auf min/max beim Verlassen des Inputs
    input.addEventListener("blur", () => {
        if (input.value === "") return;

        let value = parseInt(input.value, 10);

        // Begrenzen auf min/max
        if (value < min) value = min;
        if (value > max) value = max;

        // Auf nächsten Step runden
        value = Math.round((value - min) / step) * step + min;

        // Min/Max nochmal prüfen nach Rundung
        if (value > max) value = max;
        if (value < min) value = min;

        input.value = String(value);
    });
}

