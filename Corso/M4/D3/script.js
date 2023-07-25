const moduloForm = document.querySelector("form");
const elementoInput = document.getElementById("search-input");
const risultatiRicerca = document.querySelector(".search-results");

let datiInput = "";

function cercaImmagini(){
    datiInput = elementoInput.value;
    const url = `https://api.pexels.com/v1/search?query=${datiInput}`;

    fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'C7wlLfQMIpo0pu4jMPEeuzuT9gRinnM3ev9qOeGr9EO6PbOymVL5cSPY'
        }
    })
    .then(risposta => risposta.json())
    .then(risposta => {
        const risultati = risposta.photos;

        risultatiRicerca.innerHTML = "";
        
        risultati.filter((risultato, indice) => {
            const contenitoreImmagine = document.createElement('div');
            contenitoreImmagine.classList.add("search-result");
            contenitoreImmagine.style.animationDelay = `${indice * 0.05}s`;
            const immagine = document.createElement("img");
            immagine.src = risultato.src.large;
            immagine.alt = risultato.photographer;
            const linkImmagine = document.createElement('a');
            linkImmagine.href = risultato.url;
            linkImmagine.target = "_blank";
            linkImmagine.textContent = risultato.photographer;

            contenitoreImmagine.appendChild(immagine);
            contenitoreImmagine.appendChild(linkImmagine);
            risultatiRicerca.appendChild(contenitoreImmagine);
        });
    })
    .catch(err => {
        console.error('Si è verificato un errore:', err);
    });
}

moduloForm.addEventListener("submit", (evento) =>{
    evento.preventDefault();
    cercaImmagini();
})
