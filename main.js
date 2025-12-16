let joueur1 = {
    nom : "Terry", 
    vie : 50,
    attaque : 1, 
    precision : 0.7
};

let joueur2 = {
    nom : "Depremy",
    vie : 50,
    attaque : 4, 
    precision : 0.5
};

console.log("le combat commence!")

while (joueur1.vie > 0 && joueur2.vie > 0 ){
    if (Math.random() < joueur1.precision) {
        joueur2.vie -= joueur1.attaque;
        console.log(joueur1.nom + ' reussi son attaque sur ' + joueur2.nom)
    } else {
        console.log(joueur1.nom + " a loupé son attaque")
    }
    if (joueur2.vie <= 0){
        break;
    }

    console.log('PV' + joueur1.nom + ":" + joueur1.vie)
    console.log('PV' + joueur2.nom + ":" + joueur2.vie)

    if (Math.random() < joueur2.precision) {
        joueur1.vie -= joueur2.attaque;
        console.log(joueur2.nom + ' reussi son attaque sur ' + joueur1.nom)
    } else {
        console.log(joueur2.nom + " a loupé son attaque")
    }
    if (joueur1.vie <= 0){
        break;
}

    console.log('PV ' + joueur1.nom + " : " + joueur1.vie)
    console.log('PV ' + joueur2.nom + " : " + joueur2.vie)
}

console.log("fin du combat");

if (joueur1.vie > 0) {
    console.log(joueur1.nom +" a gagné le combat, Bravo !!");
} else {
    console.log(joueur2.nom + " a gagné le combat, Bravo !")
}

