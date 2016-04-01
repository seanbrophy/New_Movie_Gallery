// JavaScript Document
(function() {
	
	//Variables
	images = new Array ("Beetlejuice.jpg", "CloudyWithAChanceOfMeatballs.jpg", "LastExorcism.jpg", "Frankenweenie4pk.jpg", "Halloween2.jpg");
	i = 0;

	next = document.querySelector("#next");
	previous = document.querySelector("#prev");
	x = document.querySelector("#movie");

	//Functions
	function nextImg() {
		i++
		if (i==images.length) {
			i=0 	
		}
		var imgSrc = "images/"+ images[i];
		x.src=imgSrc;
	}
	
	function prev() {
		if(i == 0) {
			i = 5;	
		}	
		i--;
		var imgSrc = "images/"+ images[i];
		x.src=imgSrc;
	}
	
	//Event Listeners
	next.addEventListener("click", nextImg, false);
	previous.addEventListener("click", prev, false);
	
})();