document.addEventListener("DOMContentLoaded", function() {
    let flecha = document.getElementById("flecha-scroll");
  
    window.addEventListener("scroll", function() {
      if (window.pageYOffset > 100) {
        flecha.style.display = "block";
      } else {
        flecha.style.display = "none";
      }
    });
  
    flecha.addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
});