import Cookies from "js-cookie";

export function logout() {
    if(confirm("Deseja seguir com o logout?") === true) {
        Cookies.remove("Authorization");
        window.location.href = "/"; // Redireciona para a página inicial após o logout
    }
}