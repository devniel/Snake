// SNAKE

function Snake(){
	
	// CONSTRUCTOR
	snakes.push(this);
	
	this.posx = 0;
	
	this.posy = 0;
	
	this.setPosition = function(x,y){
		this.setPosx(x);
		this.setPosy(y);
	}
	
	this.get = function(){
		var self = null;
		for(i in snakes){
			if(snakes[i] == this){
				self = snakes[i];
			}
		}
		return self;
	}
	
	this.setPosx = function(x){
		this.posx = x;
	}
	
	this.setPosy = function(y){
		this.posy = y;	
	}
	
	this.getPosx = function(){
		return this.posx;
	}
	
	this.getPosy = function(){
		return this.posy;	
	}
	
	// HEAD
	this.head = null;
	
	this.getHead = function(){
		return this.head;
	}
	
	this.setHead = function(obj){
		this.head = obj;	
	}
	
	// PARTS - DEFAULT
	this.parts = [];
	
	this.setDefault = function(){
		this.parts = [new Head(this.posx,this.posy,1,this),new Parte(this.posx-10,this.posy,0,this)];
		this.setHead(this.parts[0]);
	}
	
	
	
	// GROW
	
	this.grow = function(){
					var last = this.parts[this.parts.length-1];
					var _parte = new Parte(last.xposx,last.xposy,0);
					_parte.setDirection(last.xdirection);
					this.parts.push(_parte);
	}
	
	// CONTROL
	
	this.control = false;
	
	// DIRECTION
	
	this.direction = "right";
	
	this.setDirection = function(_direction){
		this.direction = _direction;
		this.head.setDirection(_direction);
	}
	
	this.getDirection = function(){
		return this.direction;
	}
	
	this.detect = function(field){
		var colission = this.head.detect(field);
		//return colission;
		return this.colission(colission);
	}
	
	this.eat = function(object){
		if(object.type = "rat"){
			// EAT AND WALK
			this.head.eat(object);
			
			// GROW SNAKE
			this.grow();	
		}
	}
	
	this.stopped = false;
	
	this.colission = function(obj){
		// CHECK COLISSION || Un sprite sobre otro.
		var colissioned = false;
		
				if(obj.type == "rat"){
					
					// COMER ==================================================================
					this.eat(obj);
					colissioned = true;
								
					var randomX = 15;
					while((randomX % 10) != 0){
						randomX = Math.floor(Math.random() * (canvas.width - 10 - 0 + 1)) + 0;	
					}
		
					var randomY = 15;
					while((randomY % 10) != 0){
						randomY = Math.floor(Math.random() * (canvas.height - 10 - 0 + 1)) + 0;	
					}
								
					var ratt = new Rat();
					ratt.setPosition(randomX,randomY);
					
					
					
				}else if(obj.type == "me"){
					
					this.kill();
					colissioned = true;
					
				}else if(obj.type == "wall"){
					colissioned = true;
					this.kill();
				}
				
				return colissioned;
	}
	
	// MOVE
	
	this.move = function(_direction){
		
					this.stopped = false;
					
					this.direction = _direction;
					
					document.getElementById("mover").play();
			
					for(var i = 0;i<this.parts.length;i++){
						
						// Si la parte es una cabeza
						if(this.parts[i] instanceof Head){
							
							this.parts[i].setDirection(this.direction);
							
							var _colission = this.detect(canvas);
							
							if(!_colission){	
								// RIGHT
								if(_direction == "right"){
									
									this.setPosx(this.parts[i].posx + this.parts[i].size);
									this.setPosy(this.parts[i].posy);
									this.parts[i].setPosx(this.parts[i].posx + this.parts[i].size);
									this.parts[i].setPosy(this.parts[i].posy);
									
								// LEFT
								}else if(_direction == "left"){
									this.setPosx(this.parts[i].posx - this.parts[i].size);
									this.setPosy(this.parts[i].posy);
									this.parts[i].setPosx(this.parts[i].posx - this.parts[i].size);
									this.parts[i].setPosy(this.parts[i].posy);
									
								}else if(_direction == "up"){
									
									this.setPosx(this.parts[i].posx);
									this.setPosy(this.parts[i].posy - this.parts[i].size);
									this.parts[i].setPosy(this.parts[i].posy - this.parts[i].size);
									this.parts[i].setPosx(this.parts[i].posx);
									
								}else if(_direction == "down"){
									
									this.setPosx(this.parts[i].posx);
									this.setPosy(this.parts[i].posy + this.parts[i].size);
									this.parts[i].setPosy(this.parts[i].posy + this.parts[i].size);
									this.parts[i].setPosx(this.parts[i].posx);
								}
							}
						}
						else{
							if(!this.stopped){
								var __posx = this.parts[i-1].xposx;
								var __posy = this.parts[i-1].xposy;
	
								this.parts[i].setPosx(__posx);
								this.parts[i].setPosy(__posy);
								this.parts[i].setDirection(this.parts[i-1].xdirection);
							}
						}
					}	
				}
				
	// MOVE RIGHT
				
	this.moveRight = function(){
					// Mover cada parte a la anterior posicion del siguiente
					if(this.direction != "left"){
						this.move("right");	
						//this.stopped = false;
					}
				};
				
	// MOVE DOWN
				
	this.moveDown = function(){
					// Mover cada parte a la anterior posicion del siguiente
					if(this.direction != "up"){
						this.move("down");
						//this.stopped = false;
					}
				};
				
	// MOVE UP
				
	this.moveUp =  function(){
					// Mover cada parte a la anterior posicion del siguiente
					if(this.direction != "down"){
						this.move("up");
						//this.stopped = false;
					}
				};
				
	// MOVE LEFT
				
	this.moveLeft = function(){
					// Mover cada parte a la anterior posicion del siguiente
					if(this.direction != "right"){
						this.move("left");
						//this.stopped = false;
					}
				};
	
	// AUTO MOVE
			
	
	
	this.stop = function(){
		this.setDirection("stopped");
	}
			
	// RESTART
		
	this.restart = function(){
					this.body.kill();
					this.body.parts = [new Head(100,10,1),new Parte(90,10,0)];
					document.getElementById("crash").play();
					this.direccion = "derecha";	
				}
				
	// KILL
	this.kill = function(){
		document.getElementById("crash").play();
		this.stopped = true;
		clearInterval(animation);
		CONTROLLED = null;
		document.removeEventListener("keydown",listenerMover,false);
				
						var peticion_http = null;
						if(window.XMLHttpRequest){
							peticion_http =  new XMLHttpRequest();
						}
						else if(window.ActiveXObject){
							peticion_http =  new ActiveXObject("Microsoft.XMLHTTP");
						} 
						var xmlhttp = new XMLHttpRequest();
						xmlhttp.open("POST","updateScore.php",true);
						peticion_http.open("POST", "http://stendev.com/labs/war_of_ebanis/server/updateScore.php", true);
						peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
						peticion_http.send("points=" + parseInt(document.getElementById("player-points").innerHTML));
						peticion_http.onreadystatechange = function(){
							if(peticion_http.readyState == 4) {
								if(peticion_http.status == 200) {
									
									if(peticion_http.responseText == "true"){
										var pp = document.getElementById("player-points").innerHTML;
										GAME.setLastPoints(pp);	
										//GAME.showMessageDialog(pp);
									}else{
										document.getElementById("player-points").innerHTML = 0;
										
										GAME.restart();
									}
								}
							}
						}
		
	}

	this.autoMove  = function(){
			if(!this.stopped){
					if(this.direction == "down"){
						this.moveDown();
					}else if(this.direction == "right"){
						this.moveRight();
					}else if(this.direction == "up"){
						this.moveUp();	
					}else if(this.direction == "left"){
						this.moveLeft();
					}
			}
	};
}