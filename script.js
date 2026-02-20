window.addEventListener("scroll", function () {
  document.querySelector(".navbar").classList.toggle("scrolled", window.scrollY > 50);

  let scrollTop = document.documentElement.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let progress = (scrollTop / scrollHeight) * 100;
  document.getElementById("progress").style.width = progress + "%";
});

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function filterMenu(category) {
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    if (category === "all") {
      card.style.display = "block";
    } else {
      card.style.display = card.classList.contains(category) ? "block" : "none";
    }
  });
}

document.getElementById("reservationForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Reservation Confirmed! We look forward to serving you.");
  this.reset();
});

