//déclaration d'une variable a pour années
let a = 2022;
//variable p pour le prix du kg de bananes
let p = 2
// utilisation d'une boucle while pour dire que tant que l'année est inférieure a 2053 on
//incrémente a donc 2023 de 1 pour aller jusqu'a 2053 et donc calculer le prix des 30 
//prochaines années
while (a < 2053) {
    a++;
    // on donne l'instruction à p de prendre la valeur p + 0.05 soit 5 % à chaque itération de a
    p = p+p*0.03;
    console.log('à cette période : ' + a + ' le prix du kg de bananes sera de '  + p+' euros');
  }
  
  