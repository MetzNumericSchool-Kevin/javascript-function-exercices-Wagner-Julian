
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
    const cave = [
        {
            id: "potion_mana", 
            prix: 20,
            stock: 0,
            },
        ];


    // salutation Aventurier

    function salutation(prenom) {
        return `​Salutations Aventurier ! Je me nomme ${prenom} pour vous servir!`;
    }
    console.log(salutation(nom_sorcier))

    // Quel est le tarif d'une potion ?

    function tarif(identifiant,inv, quantite=1){
        for (let objet of inv){
            console.log(objet)
            if (objet.id===identifiant){
                return objet.prix*quantite
            }
        }
    } 
    console.log(tarif("potion_mana", cave,5))


    // Fabrication de potion

    function potion(identifiant, prix, stock){
        return{
            id: identifiant,
            prix:prix,
            stock:stock
        }
    }
    let nouvellePotion = potion("potionVigueur", 40, 9999)
    console.log(nouvellePotion)

    // Ajout de nouvelles potions dans l'inventaire

    function ajoutPotion(potion, inv){
        inv.push(potion)
    }

// cherche moi les potions qui...

    // Fonction pour récupérer la liste de toutes les potions en stock
    function potionsEnStock(inventaire) {
        return inventaire.filter(potion => potion.stock > 0);
    }

    // Fonction pour récupérer la liste de toutes les potions avec un stock à 0
    function potionsEnRuptureDeStock(inventaire) {
        return inventaire.filter(potion => potion.stock === 0);
    }

    // Exécution et affichage des résultats
    const inventaire = [
        { id: "potion_soin", prix: 10, stock: 0 },
        { id: "potion_mana", prix: 20, stock: 5 },
        { id: "potion_force", prix: 15, stock: 0 },
        { id: "potion_vitesse", prix: 25, stock: 3 }
    ];

    const enStock = potionsEnStock(inventaire);
    const enRupture = potionsEnRuptureDeStock(inventaire);

    console.log("Inventaire initial:", inventaire);
    console.log("Potions en stock:", enStock);
    console.log("Potions en rupture de stock:", enRupture);
