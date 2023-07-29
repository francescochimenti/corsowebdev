const risultatiRicerca = document.querySelector(".main-book");
const url = "https://striveschool-api.herokuapp.com/books";

function book() {
  fetch(url, {
    method: "GET",
  })
    .then((risposta) => risposta.json())
    .then((risposta) => {
      const risultati = risposta;

      risultati.forEach((risultato) => {
        const contImg = document.createElement("div");
        contImg.classList.add("book-card");

        const imgContainer = document.createElement("div");
        imgContainer.classList.add("img-container");

        const immagine = document.createElement("img");
        immagine.classList.add("book-img");
        immagine.src = risultato.img;
        immagine.alt = risultato.title;

        const par = document.createElement("p");
        par.classList.add("book-title");
        par.textContent = risultato.title;

        const button = document.createElement("button");
        button.classList.add("cart-button");
        button.textContent = "Aggiungi al carrello";

        const icon = document.createElement("i");
        icon.classList.add("cartTrash");
        const iconTrash = document.createElement("ion-icon")
        iconTrash.name = "trash-outline"

        button.addEventListener("click", function () {
          const spanPlus = document.querySelector(".spanUp");
          const spanPlus2 = document.querySelector(".spanUp2");
          let currentNumber = Number(spanPlus.innerText);
          let currentNumber2 = Number(spanPlus2.innerText);
          spanPlus.innerText = currentNumber + 1;
          spanPlus2.innerText = currentNumber2 + 1;

          const newParent = document.querySelector('.cartShop')
          newParent.appendChild(contImg)
        });

        icon.addEventListener("click", function(){
            const spanPlus = document.querySelector(".spanUp");
          const spanPlus2 = document.querySelector(".spanUp2");
          let currentNumber = Number(spanPlus.innerText);
          let currentNumber2 = Number(spanPlus2.innerText);
          spanPlus.innerText = currentNumber - 1;
          spanPlus2.innerText = currentNumber2 - 1;
        risultatiRicerca.appendChild(contImg);
        })

        imgContainer.appendChild(immagine);
        contImg.appendChild(imgContainer);
        contImg.appendChild(par);
        contImg.appendChild(button);
        icon.appendChild(iconTrash)
        contImg.appendChild(icon)
        risultatiRicerca.appendChild(contImg);
      });

      const searchInput = document.querySelector("#search-input");
      const allCards = document.querySelectorAll(".book-card");

      searchInput.addEventListener("keyup", function () {
        const searchValue = searchInput.value.trim().toLowerCase();

        allCards.forEach((card) => {
          const title = card.querySelector(".book-title").innerText.toLowerCase();

          if (searchValue.length < 3) {
            card.classList.remove("hidden");
          } else {
            if (title.includes(searchValue)) {
              card.classList.remove("hidden");
            } else {
              card.classList.add("hidden");
            }
          }
        });
      });
    })
    .catch((err) => {
      console.error("Si è verificato un errore:", err);
    });
}

book();
