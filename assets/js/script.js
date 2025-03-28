document.addEventListener("DOMContentLoaded", function() {
    const userLang = navigator.language || navigator.userLanguage;

    if (userLang.startsWith("pt")) {
        window.location.href = "../pages/pt.html"; // Redireciona para a página em português
    } else {
        window.location.href = "../index.html"; // Redireciona para a página em inglês
    }
});
