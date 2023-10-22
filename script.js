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