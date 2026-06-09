document.addEventListener("DOMContentLoaded", function () {

    function goLogin() {
        // Kakak perbaiki jalurnya di sini agar mengarah langsung ke folder login yang benar
        window.location.href = "login/index.html";
    }

    function logout() {
        localStorage.removeItem("username");
        location.reload();
    }

    const user = localStorage.getItem("username");

    if (user) {
        const userInfo = document.getElementById("userInfo");
        if (userInfo) {
            // Kita masukkan teksnya sekaligus
            userInfo.innerText = "Halo, " + user;
        
            // Kita paksa tambahkan class Bootstrap langsung lewat JavaScript di sini!
            userInfo.classList.add("text-success", "fw-bold", "fs-4");
        }

        const authArea = document.getElementById("authArea");
        if (authArea) {
            authArea.innerHTML = `
                <button onclick="logout()" class="btn btn-sm btn-danger text-white">Logout</button>
        `;
    }
}
        `;
    }

    window.goLogin = goLogin;
    window.logout = logout;

});
