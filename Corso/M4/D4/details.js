const parametri = new URLSearchParams(location.search);
const risultato = parametri.get("asin");

const print = async (risultato) => {
  try {
    const res = await fetch("https://striveschool-api.herokuapp.com/books/" + risultato);
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await res.json();
    
    const bookDetails = document.getElementById("detailsDiv");
    bookDetails.innerHTML = `<div class="book-card">
      <div class="img-container">
        <img class="book-img" src="${data.img}" alt="">
      </div>
      <p class="book-title">${data.title}</p>
    </div>`;
  } catch (error) {
    console.log("An error occurred:", error);
  }
};

print(risultato);
