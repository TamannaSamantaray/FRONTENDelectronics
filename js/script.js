function myFunction() {
    var x = document.getElementById("nav-coll");
    if (x.className === "collapse") {
      x.className += " responsive";
    } else {
      x.className = "collapse";
    }
  }