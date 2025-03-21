const wozniakTest = (Wozniak) => {  //Crée une fonction wozniakTest qui prend un paramètre Wozniak (le mot à afficher)
const lettres = Wozniak.split(""); //Convertit le mot en tableau de caractères avec split("")
let index = 0; //Initialise un index à 0

const intervalId = setInterval(() => { //Configure un intervalle qui affiche la lettre courante, incrémente l'index , s'exécute toutes les 2 secondes (2000 ms)
if (index < lettres.length) {
    console.log(lettres[index]);
    index++;
    } else {
        clearInterval(intervalId); // met fin a l'interval
    }
}, 2000);
};
wozniakTest("Wozniak");