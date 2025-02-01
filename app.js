// Selecciona el contenedor principal
const container = document.querySelector(".container");

// Para todos los botones dentro de .info-item
document.querySelectorAll(".info-item .btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    container.classList.toggle("log-in");
  });
});

// Para todos los botones dentro de .container-form
document.querySelectorAll(".container-form .btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    container.classList.add("active");
  });
});
