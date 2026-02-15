import { Carta } from "./carta.js";

// Creamos objeto (POO real 😏)
const carta = new Carta(
    "Darling",
    "Eres lo mejor que me ha pasado, gracias por existir 💕"
);

// Frase inicial
document.getElementById("frase").textContent = carta.obtenerSaludo();

// Evento del botón
document.getElementById("btnCarta")
    .addEventListener("click", () => {
        carta.mostrarMensaje();
    });
