// JavaScript Document
(function() {
	
	//Variables
	images = new Array ("Beetlejuice.jpg", "index.jpg", "LastExorcism.jpg", "Frankenweenie4pk.jpg", "Halloween2.jpg");
	i = 0;

	next = document.querySelector("#next");
	previous = document.querySelector("#prev");
	console.log ("Variables");
	console.log (next);
	console.log (previous);

	//Functions
	function nextImg() {
		console.log ("inside");
		i++
		if (i==images.length) {
			i=0 	
		}
	}
	
	function prev() {
		console.log ("outside");
		if(i == 0) {
			i = 5;	
		}	
		i--;
		x = document.querySelector("#bigImg");
	}
	
	//Event Listeners
	next.addEventListener("click", nextImg, false);
	previous.addEventListener("click", prev, false);
	
})();