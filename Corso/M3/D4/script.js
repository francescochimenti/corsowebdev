document.querySelectorAll('.navbar-nav>li>a').forEach((item) => {
  item.addEventListener('click', () => {
	setTimeout(() => {
	  const offCanvasElement = document.getElementById('offcanvasNavbar');
	  const bsOffcanvas = bootstrap.Offcanvas.getInstance(offCanvasElement);
	  
	  if(bsOffcanvas) {
		bsOffcanvas.hide();
	  }
	}, 500);
  });
});
