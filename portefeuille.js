//déclaration d'une variable a pour années
let a = 2023;
//déclaration d'une variable v pour afficher la valeur
let v = 0;
//déclaration d'une constante i pour ajouter l'investissement annuel 1200 euros soit 100 euros par mois 
const i = 1200;
//déclaration d'une constante d pour stocker la valeur des dividendes
const d = 0.03;
while (a < 2099) {
    a++;
    v += i
    v = v + v*d
    console.log('à cette période : ' + a + ' la valeur de votre portefeuille sera de  ' + v +' euros');
  }
  
  