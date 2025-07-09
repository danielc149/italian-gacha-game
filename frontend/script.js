
const characters = [
    { name: "Pasta Pope", rarity: "Legendario" },
    { name: "Mamma Mafia", rarity: "Épico" },
    { name: "Vespa Cat", rarity: "Raro" },
    { name: "Chianti Vampire", rarity: "Raro" },
    { name: "Opera Ghost", rarity: "Común" },
    { name: "Pizza Gladiator", rarity: "Común" }
];

function pullGacha() {
    const resultDiv = document.getElementById("result");
    const randomIndex = Math.floor(Math.random() * characters.length);
    const character = characters[randomIndex];
    resultDiv.innerHTML = `🎉 Obtuviste a <strong>${character.name}</strong> (${character.rarity}) 🎉`;
}
