function formatDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${day}- ${month} - ${year}`;
}

function updateCountdown() {
    const today = new Date();
    const endDate = new Date("2026-08-25");

    // Days remaining
    const totalDays = Math.floor((endDate - today) / (1000 * 60 * 60 * 24));
    document.getElementById("daysRemaining").textContent = totalDays;

    // Progress bar calculation
    const startDate = new Date("2025-08-10"); // starting day
    const journeyDays = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
    const daysPassed = journeyDays - totalDays;
    const progress = (daysPassed / journeyDays) * 100;
    document.getElementById("progressBar").style.width = progress + "%";

    // Current date & time (25- 8 - 2026 hh:mm:ss)
    document.getElementById("currentDateTime").textContent =
        `${formatDate(today)} ${today.toLocaleTimeString()}`;

    // Freedom date (25- 8 - 2026)
    document.getElementById("freedomDate").textContent = formatDate(endDate);
}

// Update every second for live clock
setInterval(updateCountdown, 1000);
updateCountdown();
