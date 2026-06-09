document.addEventListener("DOMContentLoaded", function () {

    // 1. Fungsi untuk keluar sistem (Logout)
    function logout() {
        localStorage.removeItem("username");
        location.reload();
    }

    // 2. Fungsi mengalihkan halaman ke Form Masuk (Login)
    function goLogin() {
        window.location.href = "login/index.html";
    }

    // 3. Periksa memori browser, apakah ada user yang sedang masuk
    const user = localStorage.getItem("username");

    if (user) {
        // Jika user terdeteksi sudah masuk (Berhasil Login)
        const userInfo = document.getElementById("userInfo");
        if (userInfo) {
            userInfo.innerText = "Halo, " + user;
            userInfo.style.color = "#28a745"; 
            userInfo.style.fontWeight = "bold"; 
            userInfo.style.fontSize = "20px"; 
        }

        const authArea = document.getElementById("authArea");
        if (authArea) {
            // DI SINI yang dimaksud catatan penting kemarin: Teks tombol dibuat menjadi "Keluar"
            authArea.innerHTML = `
                <button onclick="logout()" class="btn btn-sm btn-danger text-white fw-bold">Keluar</button>
            `;
        }
    }

    // 4. Daftarkan fungsi agar bisa dibaca oleh atribut onclick di HTML
    window.goLogin = goLogin;
    window.logout = logout;

});
