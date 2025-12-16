function hit(precision) {
    return Math.random();
}

let player1 = {
    name : "Terry", //le nom
    life : 50, // vie
    damage : 1,  // degats
    precision : 0.7
};

let player2 = {
    name : "Depremy",
    life : 50,
    damage : 4, 
    precision : 0.5
};

console.log("le combat commence!")

while (player1.life > 0 && player2.life > 0 ){ //si pv son au dessus de 0 
    if (hit() > player1.precision) { //verifie la precision
        player2.life -= player1.damage; //retirer les degats
        console.log(player1.name + ' reussi son attaque sur ' + player2.name) //dire si reussi
    } else {
        console.log(player1.name + " a loupé son attaque")// dire si loupé
    }
    if (player2.life <= 0){
        break; //cancel la boucle si moins de 0 
    }

    console.log('PV' + player1.name + ":" + player1.life) //dit les pv
    console.log('PV' + player2.name + ":" + player2.life) //dit les pv

    if (hit() > player2.precision) {
        player1.life -= player2.damage;
        console.log(player2.name + ' reussi son attaque sur ' + player1.name)
    } else {
        console.log(player2.name + " a loupé son attaque")
    }
    if (player1.life <= 0){
        break;
}

    console.log('PV ' + player1.name + " : " + player1.life)
    console.log('PV ' + player2.name + " : " + player2.life)
}

console.log("fin du combat");

if (player1.life > 0) {
    console.log(player1.name +" a gagné le combat, Bravo !!");
} else {
    console.log(player2.name + " a gagné le combat, Bravo !")
}

