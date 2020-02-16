/*Le plan...

Il faut pouvoir ajouter/retirer dynamiquement la classe ".reveal" aux éléments li lorsque l'on clique dessus
et il faut aussi la retirer quand je clique en dehors (uniquement quand elle est présente)

donc...

Pour chaque élément qui possède la classe ".act" (boucle forEach), ajouter un écouteur d'événement de type Touch
(click sur le document mais viser la cible du clic => revoir comment on fait)

la fonction liée à cet écouteur d'événement doit ajouter la classe .reveal à l'élément touché (on est sur mobile)

Ensuite, sur les éléments qui possèdent la classe .reveal, ajouter un écouteur d'événement de type Touch. Si je touche un h3 ou .city dans un élément qui possède la classe reveal, retirer la classe .reveal

*/

document.addEventListener("click", ev => {
    if (ev.target.classList.contains("card") || ev.target.classList.contains("city") || ev.target.classList.contains("lieu")) {
        let reveler = ev.target.closest(".act");
        reveler.classList.toggle("reveal");

        if (reveler.classList.contains("reveal")){
            let centre = document.querySelector(".reveal h4")
            if (centre.classList.contains("centerCity")){
                let couleur = reveler.querySelector(".city")
                couleur.classList.add("centerCity")
            }else if (centre.classList.contains("outCity")){
                let couleur = reveler.querySelector(".city")
                couleur.classList.add("outCity")
            }
        } else if (!reveler.classList.contains("reveal")){
            let couleur = reveler.querySelector(".city")
            couleur.classList.remove("centerCity")
            couleur.classList.remove("outCity")
        }
    };
});

/*
Bon, visiblement, ça fonctionne avec un EventListenner de type click, même sur mobile (ça nécéssiterait peut-être un test sur un vrai mobile pour être sûr)

La suite...

Une fois que l'activité est révélée, détecter s'il y a une classe ".centerCity" ou ".outCity" dans l'activité, et appliquer cette classe à l'élément ".city"

...Bon, on dirait bien que ça fonctionne. Je suis pas convaincu que ce soit le code le plus propre ou le plus efficace qui soit, mais au moins ça fonctionne comme je veux, et j'ai fait ça tout seul, donc je suis content !
*/

