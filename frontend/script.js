async function pullGacha() {
    const resultDiv = document.getElementById("result");
    resultDiv.innerText = "Tirando gacha... 🎰";

    try {
        const response = await fetch("https://e61ufpatsk.execute-api.us-east-1.amazonaws.com/gachaRoll", {
            method: "GET"
        });

        if (!response.ok) {
            throw new Error("Error al contactar el backend");
        }

        const data = await response.json();

        resultDiv.innerHTML = `🎉 Obtuviste a <strong>${data.character}</strong> (${data.rarity} ⭐${data.stars}) 🎉`;
    } catch (error) {
        console.error("Error al tirar gacha:", error);
        resultDiv.innerText = "❌ Error al tirar gacha.";
    }
}
