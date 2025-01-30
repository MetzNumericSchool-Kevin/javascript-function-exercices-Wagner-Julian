
    const nom_sorcier = "Archibald 🧙‍♂️";
    const manuel_de_fabrication = {
    potion_soin: {
        ingredients: ["eau_de_source", "ecaille_de_dragon", "poudre_de_diamant"],
        temps_de_fabrication: 3,
    },
    };
    const inventaire = [
    {
        id: "potion_soin", 
        prix: 10,
        stock: 0,
        },
    ];

    // salutation Aventurier

    function salutation(prenom) {
        return `​Salutations Aventurier ! Je me nomme ${prenom} pour vous servir!`;
    }
    console.log(salutation(nom_sorcier))

    