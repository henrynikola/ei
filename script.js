/*Le plan...

Il faut pouvoir ajouter/retirer dynamiquement la classe ".reveal" aux éléments li lorsque l'on clique dessus
et il faut aussi la retirer quand je clique en dehors (uniquement quand elle est présente)

donc...

Pour chaque élément qui possède la classe ".act" (boucle forEach), ajouter un écouteur d'événement de type Touch
(click sur le document mais viser la cible du clic => revoir comment on fait)

la fonction liée à cet écouteur d'événement doit ajouter la classe .reveal à l'élément touché (on est sur mobile)

Ensuite, sur les éléments qui possèdent la classe .reveal, ajouter un écouteur d'événement de type Touch. Si je touche un h3 ou .city dans un élément qui possède la classe reveal, retirer la classe .reveal

*/

document.addEventListener("click", ev => { //écouteur d'événement click
    if (ev.target.classList.contains("card") || ev.target.classList.contains("city") || ev.target.classList.contains("lieu")) { //capter le click sur ces éléments
        let reveler = ev.target.closest(".act"); //en fait j'agis sur ma classe .act (qui est ma li)
        reveler.classList.toggle("reveal"); //je toggle la classe reveal

        if (reveler.classList.contains("reveal")){ //si mon contenu est révélé
            let centre = document.querySelector(".reveal h4") //ça c'est le titre qui a la couleur (centre/exterieur city)
            if (centre.classList.contains("centerCity")){ //si le titre a la classe centerCity
                let couleur = reveler.querySelector(".city") //je récupère le sous-titre qui doit changer de couleur
                couleur.classList.add("centerCity") //et je lui applique la couleur correspondante
            }else if (centre.classList.contains("outCity")){
                let couleur = reveler.querySelector(".city")
                couleur.classList.add("outCity")
            }
        } else if (!reveler.classList.contains("reveal")){ // si l'activité ne contient pas la classe reveal (n'est pas révélée)
            let couleur = reveler.querySelector(".city") // je récupère le sous titre qui possède la couleur par défaut
            couleur.classList.remove("centerCity") //je retire la couleur
            couleur.classList.remove("outCity") //je retire la couleur
        }
    };
});

/*
Bon, visiblement, ça fonctionne avec un EventListenner de type click, même sur mobile (ça nécéssiterait peut-être un test sur un vrai mobile pour être sûr)

La suite...

Une fois que l'activité est révélée, détecter s'il y a une classe ".centerCity" ou ".outCity" dans l'activité, et appliquer cette classe à l'élément ".city"

...Bon, on dirait bien que ça fonctionne. Je suis pas convaincu que ce soit le code le plus propre ou le plus efficace qui soit, mais au moins ça fonctionne comme je veux, et j'ai fait ça tout seul, donc je suis content !
*/


let myHover = document.querySelectorAll(".act")

document.addEventListener("mouseover", ev => {
    //console.log(ev.target.parentNode) //ça survole les balises Figure
    let hover = ev.target.parentNode
    let survol = hover.parentNode

    if(survol.classList.contains("act")){
        console.log(survol)
        survol.classList.add("reveal")
    };
});


myHover.forEach(element => {
    element.addEventListener("mouseout", ev => {
        let hover = ev.target.parentNode
        let survol = hover.parentNode

        if(survol.classList.contains("reveal")){
            survol.classList.remove("reveal")
        }
    })
});