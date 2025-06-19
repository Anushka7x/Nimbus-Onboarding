

  fetch('navbar.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('nimbus-navbar-placeholder').innerHTML = data;
    })
    .catch(err => console.error("Navbar load error:", err));

 fetch('Footer.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('nimbus-Footer-placeholder').innerHTML = data;
    })
    .catch(err => console.error("Navbar load error:", err));

