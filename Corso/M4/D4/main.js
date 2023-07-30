const risultatiRicerca = document.querySelector(".main-book");
const url = "https://striveschool-api.herokuapp.com/books";

function fetchBooks() {
  fetch(url, {
    method: "GET",
  })
    .then((risposta) => risposta.json())
    .then((risposta) => {
      const risultati = risposta;
      risultati.forEach((risultato) => {
        createBookElement(risultato);
      });
      attachSearchFunctionality();
    })
    .catch((err) => {
      console.error("Si è verificato un errore:", err);
    });
}

function createBookElement(book) {
  const contImg = document.createElement("div");
  contImg.classList.add("book-card");

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");

  const immagine = document.createElement("img");
  immagine.classList.add("book-img");
  immagine.src = book.img;
  immagine.alt = book.title;

  const par = document.createElement("p");
  par.classList.add("book-title");
  par.textContent = book.title;

  const button = document.createElement("button");
  button.classList.add("cart-button");
  button.textContent = "Aggiungi al carrello";

  const icon = document.createElement("i");
  icon.classList.add("cartTrash");
  const iconTrash = document.createElement("ion-icon");
  iconTrash.name = "trash-outline";

  attachAddToCartFunctionality(button, contImg);
  attachRemoveFromCartFunctionality(icon, contImg);

  imgContainer.appendChild(immagine);
  contImg.appendChild(imgContainer);
  contImg.appendChild(par);
  contImg.appendChild(button);
  icon.appendChild(iconTrash);
  contImg.appendChild(icon);
  risultatiRicerca.appendChild(contImg);
}

function attachAddToCartFunctionality(button, contImg) {
  button.addEventListener("click", function () {
    updateCartCount("+");
    const newParent = document.querySelector(".cartShop");
    newParent.appendChild(contImg);
  });
}

function attachRemoveFromCartFunctionality(icon, contImg) {
  icon.addEventListener("click", function () {
    updateCartCount("-");
    risultatiRicerca.appendChild(contImg);
  });
}

function updateCartCount(operation) {
  const spanPlus = document.querySelector(".spanUp");
  const spanPlus2 = document.querySelector(".spanUp2");
  let currentNumber = Number(spanPlus.innerText);
  let currentNumber2 = Number(spanPlus2.innerText);

  if (operation === "+") {
    spanPlus.innerText = currentNumber + 1;
    spanPlus2.innerText = currentNumber2 + 1;
  } else if (operation === "-") {
    spanPlus.innerText = currentNumber - 1;
    spanPlus2.innerText = currentNumber2 - 1;
  }
}

function attachSearchFunctionality() {
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
}

const deleteAllBtn = document.querySelector(".tAll");
deleteAllBtn.addEventListener("click", function () {
    const spanPlus = document.querySelector(".spanUp");
    const spanPlus2 = document.querySelector(".spanUp2");
    spanPlus.innerText = 0;
    spanPlus2.innerText = 0;
    const newParent = document.querySelector(".cartShop");
    while (newParent.firstChild) {
      risultatiRicerca.appendChild(newParent.firstChild);
    }
  });

fetchBooks();
