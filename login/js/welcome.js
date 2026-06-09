document.addEventListener("DOMContentLoaded", function () {

    // 1. Fungsi logout
    function logout() {
        localStorage.removeItem("username");
        location.reload();
    }

    // 2. Fungsi mengarah ke halaman login dari index utama
    function goLogin() {
        window.location.href = "login/index.html";
    }

    // 3. Pengecekan status login di halaman utama Zay Shop
    const user = localStorage.getItem("username");

    if (user) {
        const userInfo = document.getElementById("userInfo");
        if (userInfo) {
            userInfo.innerText = "Halo, " + user;
            userInfo.style.color = "#28a745"; 
            userInfo.style.fontWeight = "bold"; 
            userInfo.style.fontSize = "20px"; 
        }

        const authArea = document.getElementById("authArea");
        if (authArea) {
            authArea.innerHTML = `
                <button onclick="logout()" class="btn btn-sm btn-danger text-white fw-bold">Logout</button>
            `;
        }
    }

    // 4. Daftarkan fungsi ke objek window agar bisa diakses HTML
    window.goLogin = goLogin;
    window.logout = logout;

});
