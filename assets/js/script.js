document.addEventListener("DOMContentLoaded", function() {
    const userLang = navigator.language || navigator.userLanguage;

    if (userLang.startsWith("pt")) {
        window.location.href = "./pages/pt.html";
    } else {
        window.location.href = "./index.html";
    }
});
