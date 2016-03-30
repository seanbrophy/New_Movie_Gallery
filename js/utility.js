// JavaScript Document
(function() {
	"use strict";
	var request, url, movieLinks, path, build, filterLinks = document.querySelectorAll(".filterNav a"), srchInput = document.querySelector("#srch"), live = document.querySelector("#livesrch");
	

	function init() {
		url="admin/includes/getMovies.php";
		build='';
		path = "init";
		reqInfo(path);
	}
	

	function reqInfo(path) {
		//console.log(path);
		// Purpose of this function is passed data from the client to the server(https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest).
		if(window.XMLHttpRequest) {
			request = new XMLHttpRequest();
		}else{
			request = new ActiveXObject("Microsoft.XMLHTTP");
		}
		request.open("GET", url, true);
		request.send();
		if(path==="liveSearch") {
			request.onreadystatechange = searchItems;
		}else{
			request.onreadystatechange = addItems;
		}

	}
	
	
	function searchItems() {
		// Purpose of this function is write the content passed from PHP into the div located below the input field.
		//did ALL the data come back, is it finihsed?
		
		if((request.readyState===4) || (request.status===200)) {
			var srchItems = JSON.parse(request.responseText);

			for(var i=0;i<srchItems.length; i++) {
				build += '<a href="details.php?id='+ srchItems[i].movies_id +'">';
				build += '<img src="images/'+srchItems[i].movies_thumb+'">';
				build += '<h2>'+ srchItems[i].movies_title +'</h2>';
				build += '<h4>'+ srchItems[i].movies_year+'</h4>';
				build += '</a> <br><br>'
			}

			live.innerHTML = build;

			build = '';

		}
		
	}

	function addItems() {
		//populate full list on page
		var con = document.querySelector(".movies"),details = document.querySelector(".details");
		//console.log(con);
		
		
		if((request.readyState===4) || (request.status===200)) {
			var items = JSON.parse(request.responseText);
			//console.log(items);
			if(items.length!==0){
				if (items.length > 1) {
					con.innerHTML = "";
					build = "";
					//console.log(items.length);
					for(var i=0; i<items.length; i++){
						build = '<div class="movieLinks small-12 medium-4 large-3 columns text-center">';
						build += '<img src="images/'+items[i].movies_thumb+'" alt="'+items[i].movies_title+'">';
						build += '<h2>'+items[i].movies_title+'</h2>';
						build += '<h4>'+items[i].movies_year+'</h4>';
						//change this link for details
						build += '<a href="index.php?id='+items[i].movies_id+'">more...</a><br><br>';
						build += '</div>';
						con.innerHTML+=build;
					}

					movieLinks=document.querySelectorAll(".movies a");

					for(var j=0; j<movieLinks.length; j++){
						movieLinks[j].addEventListener("click",itemDetails,false);
					}
				}else{
					details.innerHTML="";
					var sBuild ="";
					sBuild = '<div class="movieDetails small-12 medium-12 large-12 columns text-center">';
					sBuild += '<h2>'+items[0].movies_title+'</h2>';
					sBuild += '<img src="images/'+items[0].movies_fimg+'" alt="'+items[0].movies_title+'">';
					sBuild += '<h4>'+items[0].movies_year+'</h4>';
					sBuild += '<p>'+items[0].movies_storyline+'</p>';
					sBuild += '</div>';
					details.innerHTML=sBuild;
				}
			}else{
				//error no content
				con.innerHTML = "sorry, there was a server error, please try later";
			}
		}
	}
	
	function liveSearch() {
		// Purpose of this function is to rewrite the URL to be passed the search query on the PHP side.
		var capture = srchInput.value;
		if(capture===""){

		}else{
		url="admin/includes/getMovies.php?srch="+capture;
		path = "liveSearch";
		reqInfo(path);
		}
		
	}

	function filterItems(evt) {
		evt.preventDefault();
		var str = evt.target.href;
		var arr = str.split("=");
		str = arr[1];
		
		if(str){
			url="admin/includes/getMovies.php?filter="+str;
		}else{
			url="admin/includes/getMovies.php";
		}
		path = "filterItems";
		reqInfo(path);
	}

	function itemDetails(evt){
		//console.log("item details");
		evt.preventDefault();
		//console.log(evt.target);
		var str = evt.target.href;
		//console.log(str);
		var arr = str.split("=");
		//console.log(arr[1]);
		url = "admin/includes/getMovies.php?id="+arr[1];
		//console.log(url);
		path = "itemDetails";
		reqInfo(path);
	}
	
	// Listeners
	for(var i=0; i<filterLinks.length; i++){
		filterLinks[i].addEventListener("click",filterItems,false);
	}
	window.addEventListener("load", init, false);
	srchInput.addEventListener("keyup",liveSearch,false);
	
})();