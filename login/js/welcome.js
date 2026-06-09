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
        document.getElementById("userInfo").innerText = "Halo, " + user;

        document.getElementById("authArea").innerHTML = `
            <button onclick="logout()" class="btn btn-sm btn-danger text-white">Logout</button>
        `;
    }

    window.goLogin = goLogin;
    window.logout = logout;

});
