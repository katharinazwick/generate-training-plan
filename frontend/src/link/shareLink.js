const shareButton = document.getElementById("shareLink");

shareButton.addEventListener("click", async function () {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'Meine Webseite',
                text: 'Schau dir diesen Link an!',
                url: window.location.href
            });
            console.log('Erfolgreich geteilt!');
        } catch (err) {
            console.error('Fehler beim Teilen:', err);
        }
    } else {
        alert('Teilen wird auf deinem Gerät nicht unterstützt. Kopiere einfach den Link!');
    }
})