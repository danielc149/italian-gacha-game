
const characters = [
    { name: "Pasta Pope", rarity: "Raro" },
    { name: "Mamma Mafia", rarity: "Raro" },
    { name: "Vespa Cat", rarity: "Común" },
    { name: "Chianti Vampire", rarity: "Común" },
    { name: "Opera Ghost", rarity: "Común" },
    { name: "Pizza Gladiator", rarity: "Común" }
    { name: "Tralalero Tralala", rarity: "Legendario" }
    { name: "Tung Tung Tung Sahur", rarity: "Legendario" }
    { name: "Bombardiro Crocodilo", rarity: "Legendario" }
    { name: "Frigo Cammello Buffo Fardello", rarity: "Legendario" }
    { name: "Bailarina Cappuccina", rarity: "Legendario" }
    { name: "Lirilì Larilà, rarity: "Épico" }
    { name: "Chimpanzini Bananini", rarity: "Épico" }
    { name: "Shpioniro Golubiro", rarity: "Épico" }
    { name: "Tripi Tripo", rarity: "Épico" }
    { name: "Bombombini Gusini", rarity: "Épico" }
];

function pullGacha() {
    const resultDiv = document.getElementById("result");
    const randomIndex = Math.floor(Math.random() * characters.length);
    const character = characters[randomIndex];
    resultDiv.innerHTML = `🎉 Obtuviste a <strong>${character.name}</strong> (${character.rarity}) 🎉`;
}
