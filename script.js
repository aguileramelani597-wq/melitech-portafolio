"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const year = document.getElementById("year");

    // Actualizar el año automáticamente.
    if (year) {
        year.textContent = new Date().getFullYear();
    }

    if (!menuToggle || !navLinks) return;

    // Abrir y cerrar el menú.
    const cerrarMenu = () => {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menú");
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    };

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

    // Cerrar al seleccionar una sección.
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", cerrarMenu);
    });

    // Cerrar con Escape.
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            cerrarMenu();
        }
    });

    // Cerrar al tocar fuera del menú.
    document.addEventListener("click", (event) => {
        if (
            navLinks.classList.contains("active") &&
            !navLinks.contains(event.target) &&
            !menuToggle.contains(event.target)
        ) {
            cerrarMenu();
        }
    });

    // Cerrar si se cambia de celular a computadora.
    window.addEventListener("resize", () => {
        if (window.innerWidth > 650) {
            cerrarMenu();
        }
    });
});
