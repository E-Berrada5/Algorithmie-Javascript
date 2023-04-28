//déclaration d'une variable contenant toutes les voyelles de l'alphabet
const voyelles = 'aeiouy';
const chars = voyelles.split('');
let compteur = 0;
let mot = prompt ("entrer un mot svp");
//console.log(chars);
// str représente le mot qu'on va tester
function countVowels(str) {

for(let position = 0; position < str.length; position++) {
  if(chars.includes(str[position])) {
  compteur++
  }
}
return compteur
}
console.log(countVowels(mot))