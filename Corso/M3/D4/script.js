// rimuovere tutte le card

let cards = document.querySelectorAll(".card");
function remove() {
	for (let i = 0; i < cards.length; i++) {
	  cards[i].remove();
	}
  }
//   remove();

// contare i viaggi presenti sulla pagina

console.log(cards.length);

// chiusura navbar dopo il click

const navbarLinks = document.querySelectorAll('.navbar-nav>li>a');

for (let i = 0; i < navbarLinks.length; i++) {
  const item = navbarLinks[i];

  item.addEventListener('click', () => {
    setTimeout(() => {
      const offCanvasElement = document.getElementById('offcanvasNavbar');
      const bsOffcanvas = bootstrap.Offcanvas.getInstance(offCanvasElement);

      if (bsOffcanvas) {
        bsOffcanvas.hide();
      }
    }, 500);
  });
}

// chiusura sezioni

document.querySelector(".wOffB").addEventListener("click", function() {
  let elements = document.getElementsByClassName("wOff");
  let iconElement = document.querySelector(".wOffB i");

  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.toggle("hider");

    setTimeout(function() {
      elements[i].classList.toggle("hider2");
    }, 300);
  }
});




