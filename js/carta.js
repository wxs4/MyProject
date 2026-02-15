export class Carta {

    constructor(nombre, mensaje){
        this.nombre = nombre;
        this.mensaje = mensaje;
    }

    obtenerSaludo(){
        return `Para vos, ${this.nombre} ❤️`;
    }

    mostrarMensaje(){
        const contenedor = document.getElementById("mensaje");

        contenedor.innerHTML = `
        <p>
        Desde que llegaste a mi vida,<br>
        todo tiene más sentido,<br>
        las sonrisas duran más,<br>
        y los días son más bonitos.
        </p>

        <p>
        No sé si fue el destino,<br>
        la casualidad o la suerte,<br>
        pero agradezco cada instante<br>
        en el que puedo quererte.
        </p>

        <p>
        Si la vida es un camino,<br>
        no me importa dónde vaya,<br>
        mientras sea de tu mano<br>
        y tu corazón me acompañe.
        </p>

        <p><b>Te Amo muchísimo ❤️</b></p>
        `;

        contenedor.style.opacity = "1";
    }
}
