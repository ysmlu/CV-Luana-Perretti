// JavaScript Document

const cursor = document.querySelector(".custom-cursor"); /*No entiendo porque el cursor no funciona, probé un montón de formas*/
			cursor.style.width = "30px";
			cursor.style.height = "30px";
			cursor.style.backgroundImage = "url('img/estrella.puntero-17.svg')";

			const x = document.querySelector("body").clientX;
			const y = document.querySelector("body").clientY;

			cursor.style.left = x + 10;
			cursor.style.top = y + 10;

			document.body.appendChild(cursor);