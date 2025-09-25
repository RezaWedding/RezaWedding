// ambil elemen-elemen
const modal = document.getElementById("photoModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");
const images = document.querySelectorAll(".gallery-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// indeks gambar yang sedang aktif
let currentIndex = 0;

// fungsi buka modal
function openModal(index) {
  currentIndex = index;
  modal.style.display = "block";
  modalImg.src = images[index].src;
  captionText.innerHTML = images[index].alt;
}

// event klik pada setiap gambar
images.forEach((img, index) => {
  img.addEventListener("click", () => openModal(index));
});

// tombol close
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// tombol prev
prevBtn.onclick = function() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImg.src = images[currentIndex].src;
  captionText.innerHTML = images[currentIndex].alt;
}

// tombol next
nextBtn.onclick = function() {
  currentIndex = (currentIndex + 1) % images.length;
  modalImg.src = images[currentIndex].src;
  captionText.innerHTML = images[currentIndex].alt;
}

// klik di luar gambar untuk tutup modal
modal.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
