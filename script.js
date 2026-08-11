// Fungsi Pindah Halaman dengan Animasi
function nextPage(pageNumber) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.classList.remove("active");
  });

  setTimeout(() => {
    const targetPage = document.getElementById(`page${pageNumber}`);
    if (targetPage) {
      targetPage.classList.add("active");
    }
  }, 100);
}

// Fungsi Pertama Kali Tombol Diklil (Play Musik + Letupan Confetti)
function startExperience() {
  // Play Musik
  const audio = document.getElementById("bg-music");
  if (audio) {
    audio.play().catch((error) => {
      console.log(
        "Autoplay diblokir browser, musik akan menyala setelah ada interaksi.",
      );
    });
  }

  // Efek Pesta Confetti
  if (typeof confetti === "function") {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }

  // Pindah ke Halaman 2
  nextPage(2);
}
