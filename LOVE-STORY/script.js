document.addEventListener("DOMContentLoaded", function () {

    /* ================= MUSIC ================= */

    const music = document.getElementById("loveMusic");
    const musicBtn = document.getElementById("musicBtn");

    if (music && musicBtn) {

        musicBtn.addEventListener("click", function () {

            if (music.paused) {

                music.play()
                    .then(function () {
                        musicBtn.textContent = "❚❚";
                    })
                    .catch(function () {
                        alert("Please click the music button again.");
                    });

            } else {

                music.pause();

                musicBtn.textContent = "♪";
            }

        });

    }


    /* ================= MOBILE MENU ================= */

    const menuToggle =
        document.getElementById("menu-toggle");

    const navLinks =
        document.querySelectorAll(".navbar a");


    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (menuToggle) {
                menuToggle.checked = false;
            }

        });

    });


    /* ================= IMAGE LIGHTBOX ================= */

    const lightbox =
        document.getElementById("lightbox");

    const lightboxImage =
        document.getElementById("lightboxImage");

    const lightboxClose =
        document.getElementById("lightboxClose");

    const galleryImages =
        document.querySelectorAll(".gallery-item img");


    galleryImages.forEach(function (image) {

        image.addEventListener("click", function () {

            if (!lightbox || !lightboxImage) {
                return;
            }

            lightboxImage.src = image.src;

            lightboxImage.alt = image.alt;

            lightbox.classList.add("show");

        });

    });


    if (lightboxClose) {

        lightboxClose.addEventListener("click", function () {

            lightbox.classList.remove("show");

        });

    }


    if (lightbox) {

        lightbox.addEventListener("click", function (event) {

            if (event.target === lightbox) {

                lightbox.classList.remove("show");

            }

        });

    }


    /* ================= ESCAPE KEY ================= */

    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape" && lightbox) {

            lightbox.classList.remove("show");

        }

    });

});