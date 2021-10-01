let closeModal = document.getElementById("close-modal");

function openModal() {
  document.getElementById("overlay").style.display = "block";
}

closeModal.addEventListener("click", function () {
  document.getElementById("overlay").style.display = "none";
});
