//Prendo le info dall json
fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log("Error:", error));

// Esercizio
function trovaMusica(idAPI, idHTML) {

  const row = document.querySelector(`#${idHTML}Section`);
  const requestURL = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${idAPI}`;

  let xhr = new XMLHttpRequest();

  xhr.open("GET", requestURL);

  xhr.onload = function () {
    if (xhr.status === 200) {
      let resp = JSON.parse(xhr.responseText);
      const music = resp.data;

      for (let i = 0; i < music.length && i < 4; i++) {
        const element = music[i];
        row.innerHTML += `<div class='col col-3 card-bella'>
                    <img class="card-img-top w-100" src='${element.album.cover_xl}' alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${element.artist.name}</h5>
                        <p class="card-text text-warning">${element.title}</p>
                    </div>
                </div>`;
      }
    } else if (xhr.status !== 200) {
      console.log("Errore: " + xhr.status);
    }
  };

  xhr.send();
}

trovaMusica("emiskilla", "emiskilla");
trovaMusica("eminem", "eminem");
trovaMusica("queen", "queen");
trovaMusica("metallica", "metallica");
