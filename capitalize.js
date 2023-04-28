// déclarer une variable pour récupérer un string
let mot = prompt("Veuillez entrer un mot svp :")

function convertienmajuscule (mot){
    return mot.charAt(0).toUpperCase() +mot.slice(1);
}
console.log(convertienmajuscule(mot));