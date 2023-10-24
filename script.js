// JavaScript Document

/* CURSOR */ /*El svg con el cursor a veces anda y a veces no*/
document.addEventListener("DOMContentLoaded", function () {
	const customCursor = document.querySelector(".cursor-personalizado");

	document.addEventListener("mousemove", (e) => {
		const x = e.clientX;
		const y = e.clientY;

		customCursor.style.left = (x + 30) + "px";
		customCursor.style.top = (y + 15) + "px";
	});
	document.addEventListener("mouseenter", () => {
		customCursor.style.display = "block";
	});

	document.addEventListener("mouseleave", () => {
		customCursor.style.display = "none";
	});
});





const titulo = document.querySelector(".h2sobremi");

// Desplaza el título desde la izquierda a la pantalla
titulo.style.left = "-100%";

// Realiza la transición en 2 segundos
titulo.style.transition = "left 2s";

// Oculta el título al principio
titulo.style.display = "none";

// Muestra el título después de 2 segundos
setTimeout(() => {
  titulo.style.display = "block";
}, 2000);
