document.addEventListener("DOMContentLoaded", () => {
    const leaderboardEntries = document.getElementById("leaderboard-entries");

    // Mock data
    const data = [
        { name: "R. Daoud", score: 563743859345213 },
        { name: "A. E. Nassar", score: 5413156741563 },
        { name: "Charlie", score: 180 },
        { name: "Diana", score: 150 },
        { name: "Eve", score: 140 },
        { name: "Frank", score: 130 },
        { name: "Grace", score: 120 },
    ];

    // Populate leaderboard
    leaderboardEntries.innerHTML = "";
    data.forEach((entry, index) => {
        const row = document.createElement("div");
        row.classList.add("entry");

        // Add unique styling for top 3
        if (index === 0) row.classList.add("first");
        if (index === 1) row.classList.add("second");
        if (index === 2) row.classList.add("third");

        row.innerHTML = `<span>${entry.name}</span><span>${entry.score} pts</span>`;
        leaderboardEntries.appendChild(row);
    });
});
