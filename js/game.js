function init(_images){
	document.getElementById("player-points").innerHTML = 0;
	
	images = _images;
	
	rats = [];
	snakes = [];

	canvas = document.getElementById("juego");
	var ctx = canvas.getContext("2d");
	
	var rat = new Rat();
	rat.setPosition(300,300);
	
	var rat = new Rat();
	rat.setPosition(500,300);
	
	var rat = new Rat();
	rat.setPosition(100,300);
	
	var rat = new Rat();
	rat.setPosition(150,150);
	
	var _snake = new Snake();
	_snake.setPosition(100,10);
	_snake.setDefault();
	//snake.setControl();
	
	CONTROLLED = _snake.get();
	
	listenerMover = function(event){
		if(CONTROLLED != null){
			if(event.keyCode == 39){
				CONTROLLED.moveRight();	
				event.preventDefault();		
			}else if(event.keyCode == 40){
				CONTROLLED.moveDown();
				event.preventDefault();
			}else if(event.keyCode == 38){
				CONTROLLED.moveUp();
				event.preventDefault();
			}else if(event.keyCode == 37){
				CONTROLLED.moveLeft();
				event.preventDefault();
			}
		}
	}
	
	document.addEventListener("keydown",listenerMover,false);
	
	
	var cont = 0;
	
	// DIBUJAR TODO
	animation = setInterval(function(){		
	
		canvas.getContext("2d").clearRect(0,0,canvas.width,canvas.height);
		
		// DIBUJAR OBJECTOS =============================================================================================================
		
		for(i in rats){
			// DIBUJAR RATA
			if(!rats[i].killed){
				canvas.getContext("2d").drawImage(rats[i].sprite,rats[i].posx,rats[i].posy);
			}
		}
		
		for(s in snakes){

			// DIBUJAR SNAKE =====================================================
			var n = 0;
			for(i in snakes[s].parts){
				if(n == 0){
					draw(snakes[s].parts[i].posx,snakes[s].parts[i].posy,"head",snakes[s].parts[i].direction);
				}else if(n>0 && n< snakes[s].parts.length -1){
					draw(snakes[s].parts[i].posx,snakes[s].parts[i].posy,"body",snakes[s].parts[i].direction);
				}else if(n == snakes[s].parts.length - 1){
					draw(snakes[s].parts[i].posx,snakes[s].parts[i].posy,"tail",snakes[s].parts[i].direction);
				}
				n++;
			}
			
		}
		
		//var imageData = vram.getContext("2d").getImageData(0,0,vram.width,vram.height);
		//canvas.getContext("2d").putImageData(imageData,0,0);
		
		
		
		
		cont++;
		
		if(cont % 10 == 0){CONTROLLED.autoMove();}
		
	},FPS/1000);
	
	
	// DRAW SNAKE ====================================================================
	function draw(x,y,type,direction){
		
		var parte = null;
		if(type == "head"){
			if(direction == "up"){
				parte = images["cabeza_arriba"];
			}else if(direction == "down"){
				parte = images["cabeza_abajo"];
			}else if(direction == "right" || direction == "stopped" || direction == null){
				parte = images["cabeza_derecha"];
			}else if(direction == "left"){
				parte = images["cabeza_izquierda"];
			}
		}else if(type == "body"){
			if(direction == "up"){
				parte = images["cuerpo_arriba"];
			}else if(direction == "down"){
				parte = images["cuerpo_abajo"];
			}else if(direction == "right" || direction == "stopped" || direction == null){
				parte = images["cuerpo_derecha"];
			}else if(direction == "left"){
				parte = images["cuerpo_izquierda"];
			}
		}else if(type == "tail"){
			if(direction == "up"){
				parte = images["cola_arriba"];
			}else if(direction == "down"){
				parte = images["cola_abajo"];
			}else if(direction == "right" || direction == "stopped" || direction == null ){
				parte = images["cola_derecha"];
			}else if(direction == "left"){
				parte = images["cola_izquierda"];
			}
		}
		
		canvas.getContext("2d").drawImage(parte,x,y);
	}
	
}
