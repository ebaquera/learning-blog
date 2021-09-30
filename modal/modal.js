let openModal = document.getElementById("open-modal");
let closeModal = document.getElementById("close-modal");

openModal.addEventListener("click", function () {
  document.getElementById("overlay").style.display = "block";
});

closeModal.addEventListener("click", function () {
  document.getElementById("overlay").style.display = "none";
});
