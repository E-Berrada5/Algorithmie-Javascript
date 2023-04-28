<?php
//choix utilisateur
$randomNumber= random_int(1,100);
//choix de l'utlisateur
$userChoice="";
//compteur
$counter="";
//boucle pour demander au user de choisir un nombre tant q'uil n'a pas trouvé
while($randomNumber!==intval($userChoice)){
    //code à executer si la condition est verifier
  if(!empty($userChoice))
   if($userChoice>$randomNumber){
    echo"le nombre est trop grand";}
else{echo "le nombre est trop petit"; }
$userChoice=readline("choisis un nombre entre 1 et 100>");
  ++$counter;
   }
echo "tu as gagné en $counter coups!";