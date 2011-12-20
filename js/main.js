/* Globales */
FPS = 60;
window.onload = function(){
	
	// Load resources
	
	var audio = document.getElementsByTagName("audio");
	
	for(var i=0;i<audio.length;i++){
		//console.log(i + " : " + audio.item(i).play());
	}
	
	/*function checkAudio(){
		var n = 0;
		var loaded = false;
		
		for(var i=0;i<audio.length;i++){
				if(audio.item(i).readyState != 4){
					console.log(i + " : " + audio.item(i).readyState);
					break;
				}else{
					n++;
				}
		}
		
		console.log(n);
		
		if(n == (audio.length-1)){
			loaded = true;	
		}else{
			loaded = checkAudio();	
		}
		
		return loaded;		
	}*/
	
	
	var numImagesLoaded = 0;
	
	var images = [];	
	
	image1 = new Image();
	image1.src = "images/cabeza_abajo.png"
	image1.onload = incrementAndCheckLoading;
	images.push("cabeza_abajo");
	images["cabeza_abajo"] = image1;
	
	image2 = new Image();
	image2.src = "images/cabeza_arriba.png"
	image2.onload = incrementAndCheckLoading;
	images["cabeza_arriba"] = image2;
	
	image3 = new Image();
	image3.src = "images/cabeza_derecha.png"
	image3.onload = incrementAndCheckLoading;
	images["cabeza_derecha"] = image3;
	
	image4 = new Image();
	image4.src = "images/cabeza_izquierda.png"
	image4.onload = incrementAndCheckLoading;
	images["cabeza_izquierda"] = image4;
	
	image5 = new Image();
	image5.src = "images/cola_abajo.png"
	image5.onload = incrementAndCheckLoading;
	images["cola_abajo"] = image5;
	
	image6 = new Image();
	image6.src = "images/cola_arriba.png"
	image6.onload = incrementAndCheckLoading;
	images["cola_arriba"] = image6;
	
	image7 = new Image();
	image7.src = "images/cola_derecha.png"
	image7.onload = incrementAndCheckLoading;
	images["cola_derecha"] = image7;
	
	image8 = new Image();
	image8.src = "images/cola_izquierda.png"
	image8.onload = incrementAndCheckLoading;
	images["cola_izquierda"] = image8;
	
	image9 = new Image();
	image9.src = "images/cuerpo_abajo.png"
	image9.onload = incrementAndCheckLoading;
	images["cuerpo_abajo"] = image9;
	
	image10 = new Image();
	image10.src = "images/cuerpo_arriba.png"
	image10.onload = incrementAndCheckLoading;
	images["cuerpo_arriba"] = image10;
	
	image11 = new Image();
	image11.src = "images/cuerpo_derecha.png"
	image11.onload = incrementAndCheckLoading;
	images["cuerpo_derecha"] = image11;
	
	image12 = new Image();
	image12.src = "images/cuerpo_izquierda.png"
	image12.onload = incrementAndCheckLoading;
	images["cuerpo_izquierda"] = image12;
	
	image13 = new Image();
	image13.src = "images/rat.png"
	image13.onload = incrementAndCheckLoading;
	images["rat"] = image13;
	
	image14 = new Image();
	image14.src = "images/warofebanis.png"
	image14.onload = incrementAndCheckLoading;
	images["warofebanis"] = image14;
	
	// START HERE
	
	function incrementAndCheckLoading(){
		numImagesLoaded++;
		if(numImagesLoaded == 14){
			// Do some stuff like remove loading screen or redirect to other URL
			if(true){
				document.getElementById("loading").style.display = "none";
				document.getElementById("menu").style.backgroundImage = "url('" + images["warofebanis"].src + "')";
				document.getElementById("menu").style.backgroundSize = "contain";
				document.getElementById("menu").style.display = "block";
				
				document.getElementById("play").addEventListener("click",function(){
						document.getElementById("menu").className = "hide";
						document.getElementById("menu").style.display = "none";
						init(images);
				},false);
			}
			
		}
	}  
	
	
}