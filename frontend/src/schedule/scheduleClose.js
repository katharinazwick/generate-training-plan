export function scheduleClose() {
    const scheduleH = document.getElementById('scheduleH2');
    const schedule = document.getElementById('schedule');

    scheduleH.addEventListener('click', () => {
        const isHidden = schedule.classList.toggle("hidden");

        if (!isHidden) {
            scheduleH.innerText = "Schedule ➡️";
        } else {
            scheduleH.innerText = "Schedule 🔽";
        }
    });
}
