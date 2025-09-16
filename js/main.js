// Animación de barras de progreso al cargar
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".progress-bar div").forEach(bar => {
        const width = bar.style.width;
        bar.style.width = "0";
        setTimeout(() => {
            bar.style.width = width;
        }, 200);
    });
});
