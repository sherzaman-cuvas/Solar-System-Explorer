function showFact() {
    // 1. Array of space facts
    const facts = [
        "The Sun accounts for 99.86% of the mass in the solar system.",
        "One day on Venus is longer than one year on Venus.",
        "Jupiter has at least 79 moons.",
        "CUVAS is in Bahawalpur but not in Space.",
        "The footprints on the Moon will be there for 100 million years because there is no wind.",
        "Neutron stars can spin at a rate of 600 rotations per second.",
        "Space is completely silent because there is no atmosphere to carry sound."
    ];

    // 2. Select a random index from the array
    const randomIndex = Math.floor(Math.random() * facts.length);

    // 3. Get the paragraph element where we want to show the fact
    const factDisplay = document.getElementById("fact-display");

    // 4. Change the text content
    factDisplay.innerText = facts[randomIndex];
    
    // Optional: Change text color slightly to indicate a refresh
    factDisplay.style.color = "#81ecec";
}