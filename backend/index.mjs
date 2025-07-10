export const handler = async (event) => {
    const roll = Math.random() * 100;
    let result;

    if (roll < 5) {
        result = {
            rarity: "Legendario",
            character: randomFrom([
                "Tralalero Tralala",
                "Tung Tung Tung Sahur",
                "Bombardiro Crocodilo",
                "Frigo Cammello Buffo Fardello",
                "Bailarina Cappuccina"
            ]),
            stars: 5
        };
    } else if (roll < 20) {
        result = {
            rarity: "Épico",
            character: randomFrom([
                "Lirilì Larilà",
                "Chimpanzini Bananini",
                "Shpioniro Golubiro",
                "Tripi Tripo",
                "Bombombini Gusini"
            ]),
            stars: 4
        };
    } else if (roll < 40) {
        result = {
            rarity: "Raro",
            character: randomFrom([
                "Pasta Pope",
                "Mamma Mafia"
            ]),
            stars: 3
        };
    } else {
        result = {
            rarity: "Común",
            character: randomFrom([
                "Vespa Cat",
                "Chianti Vampire",
                "Opera Ghost",
                "Pizza Gladiator"
            ]),
            stars: 2
        };
    }

    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(result)
    };
};

function randomFrom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

