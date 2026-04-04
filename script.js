// Efek scroll navbar
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.style.background = window.scrollY > 50 ? "#000" : "transparent";
});

document.getElementById("waForm").addEventListener("submit", function(e){
    e.preventDefault();

    let nama  = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let pesan = document.getElementById("pesan").value;

    let nomorWA = "628123456789"; // GANTI NOMOR WA KAMU

    let url = "https://wa.me/" + nomorWA + "?text="
        + encodeURIComponent(
            "Halo Bengkel Las Jaya Steel,%0A%0A" +
            "Nama: " + nama + "%0A" +
            "Email: " + email + "%0A" +
            "Pesan: " + pesan
        );

    window.open(url, "_blank");
});