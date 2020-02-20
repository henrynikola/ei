let activities
let url = "https://cepegra.yo.fr/kazan_api"
let listUl = document.querySelector(".activites")



let Affiche = function() {
    //console.log(activities[0])
    //console.log(typeof(activities))
    activities.forEach(element => {
        console.log(element.title)
        listUl.innerHTML += `<li class="act">
                                <figure>
                                    <img src="${element.img}" alt="${element.txt_img}"></img>
                                    
                                    <figcaption class="card">
                                        <h3 class="lieu">${element.title} <span>${element.title2}</span></h3>
                                        <p class="city">${element.situation}</p>
                                        <h4 class="centerCity">${element.ss_titre}</h4>
                                        <p>${element.texte}</p>
                                        <div class="more">
                                            <a href="#"><i class="far fa-heart"></i></a>
                                            <a href="#">Read More</a>
                                            <div class="troispoints">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </li>`
    });
}


const Main = function() {
    axios.get(url)
    .then(response =>{
        activities = response.data.feed
    })
    .then(Affiche)
    .catch( function() {
        alert('erreur de connexion')
    })
}

window.addEventListener('load', Main)