document.getElementById("fetchButton").addEventListener("click", async function() {
    const nameElement = document.getElementById("characterName");
    const imageElement = document.getElementById("characterImage");

    try {
        const response = await fetch("https://api.disneyapi.dev/character");
        const data = await response.json();

        if (data.data && data.data.length > 0) {
            const randomCharacter = data.data[Math.floor(Math.random() * data.data.length)];
            
            nameElement.textContent = randomCharacter.name;
            imageElement.src = randomCharacter.imageUrl || "https://via.placeholder.com/200";
            imageElement.style.display = "block";
        } else {
            nameElement.textContent = "No character found.";
            imageElement.style.display = "none";
        }
    } catch (error) {
        nameElement.textContent = "Error fetching data!";
        imageElement.style.display = "none";
        console.error("Fetch error:", error);
    }
});
