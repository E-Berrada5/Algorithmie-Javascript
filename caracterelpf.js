//récupérer un string
let string = "afficher";
//déclarer une variable pour compter le nombre de caractères contenu dans le string
let characterCount = 0;
//variable qui stocke le caractere le plus frequent
let mostFrequentCharacter = "";
/* pour */
for ( i = 0; i < string.length; i++) {
    let currentCharacter = string[i];
    let count = 1;
    for (let j = i + 1; j < string.length; j++) {
        if (string[j] == currentCharacter) {
            count++;
        }
    }
    if (count > characterCount) {
        characterCount = count;
        mostFrequentCharacter = currentCharacter;
    }
}
console.log(mostFrequentCharacter + " is the most frequent character with a count of " + characterCount);


console.log(obj.action())


