//on déclare une constante loop
//on affecte à cette variable une foncton anonyme
//cette fonction prend en paramètres un tableau et une fonction 
const loop = function (array, callback) {
/*on déclare une variable arr qui va contenir un tableau qui sera une copie du
 tableau array passé en paramètre grâce au spread operator
*/
    const arr = [...array];
/* on crée une varaible result à lauelle on affecte un tableau vide
ce tableau contiendre le résultat de l'éxecution de la ofnction callbackpour chaque élément du tableau
arr */
    const result = [];
    //on a une boucle for...of grâve à laquelle on va parcourir notre tableau aurr 
    for (let elem of arr) {
/*pour chaque élément du tableau arr, on éxecute la fonction callback passée en argument (lors de 
l'appel de la fonction) et on lui passe en argument l'élément courant du tableau
ensuite on ajoute chaqué résultat au tableau result */
      result.push(callback(elem));
    }
    return result;
  };
  const newArr = loop([25, 10, 42, 100], function (elem) {
    return +(elem *= 1.2).toFixed(2);
  });
  console.log(newArr)