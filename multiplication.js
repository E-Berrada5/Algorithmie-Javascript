//on déclare une variable qui prend un nombre à  l'utilisateur : choisir un nombre de 1 à 10
let Number = prompt ("choisissez un nombre")
//rendons le code modulable en créant une fonction :
function tabledemultiplication (Number){
  //on déclenche une boucle de 1 à 10 qui multipliera le nombre entrée par l'utilisateur
  for(let i=1; i<=10; i++){
    console.log(i*Number);
  }
}
tabledemultiplication(Number);

