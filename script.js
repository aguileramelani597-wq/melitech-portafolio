"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const year = document.getElementById("year");

    // Actualizar el año automáticamente.
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // Abrir y cerrar el menú en celulares.
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            const isOpen = navLinks.classList.toggle("active");

            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Cerrar menú" : "Abrir menú"
            );

            menuToggle.innerHTML = isOpen
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';
        });

        // Cerrar el menú al seleccionar una sección.
        navLinks.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Abrir menú");
                menuToggle.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';
            });
        });

        // Cerrar el menú con Escape.
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                navLinks.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Abrir menú");
                menuToggle.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';
            }
        });
    }
});