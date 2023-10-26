// JavaScript Document

/* CURSOR */ 
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




/*ANIMACIÓN SLIDE IZQ - TÍTULO SOBRE MÍ*/
document.addEventListener("DOMContentLoaded", function() {
		const h2Element = document.querySelector(".h2sobremi");
		h2Element.style.left = "-100%";
		h2Element.classList.add("animated");
	});




