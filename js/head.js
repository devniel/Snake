/*
	HEAD - ESP : Cabeza del cuerpo, controla acciones del mismo.
	REQUIREMENTS :
		- No
*/

function Head(x,y,type,body){
	this.posx = x;
	this.posy = y;
	this.size = 10;
	this.xposx = this.posx;
	this.xposy = this.posy;
	this.xdirection = null;
	this.type = 1;
	this.direction = "right";
	this.body = body;
}

Head.prototype = new Parte();
		
		//var obj = new Parte(x,y,type);
		
		//console.log(obj);
		
		// EAT AN OBJECT =================================================================
		// type : type of the objecto to eat
		// spaceX,spaceY : coordinates of the position of the object in the canvas
		// ctx : CHANGE FOR FIELD
		
		Head.prototype.eat = function(_obj){
					
					document.getElementById("comer").play();
					
					if(_obj.type == "rat"){
						
						// WALK 1 STEP
						
								// RIGHT
								if(this.direction == "right"){
									
									this.body.setPosx(this.posx + this.size);
									this.body.setPosy(this.posy);
									this.setPosx(this.posx + this.size);
									this.setPosy(this.posy);
									
								// LEFT
								}else if(this.direction == "left"){
									this.body.setPosx(this.posx - this.size);
									this.body.setPosy(this.posy);
									this.setPosx(this.posx - this.size);
									this.setPosy(this.posy);
									
								}else if(this.direction == "up"){
									
									this.body.setPosx(this.posx);
									this.body.setPosy(this.posy - this.size);
									this.setPosy(this.posy - this.size);
									this.setPosx(this.posx);
									
								}else if(this.direction == "down"){
									
									this.body.setPosx(this.posx);
									this.body.setPosy(this.posy + this.size);
									this.setPosy(this.posy + this.size);
									this.setPosx(this.posx);
								}
								
						for(var i=1;i<this.body.parts[i].length;i++){
								var __posx = this.body.parts[i-1].xposx;
								var __posy = this.body.parts[i-1].xposy;
	
								this.body.parts[i].setPosx(__posx);
								this.body.parts[i].setPosy(__posy);
								this.body.parts[i].setDirection(this.body.parts[i-1].xdirection);
						}
							
						
						// ADD POINTS 
						var points = parseInt(document.getElementById("player-points").innerHTML);
						document.getElementById("player-points").innerHTML = points + 1;
						
						for(r in rats){
							if(_obj.posx == rats[r].posx && _obj.posy == rats[r].posy){
								rats[r].kill();
								break;
							}
						}
					}
			}
			
			// DETECT COLISSION =================================================================
			// CTX : THE FIELD
			Head.prototype.detect = function(field){
				
				var ctx = field.getContext("2d");
				
				var colission = false;
				
				var imageData = null;
				var spaceX = null;
				var spaceY = null;
				
					if(this.direction == "down"){
						if(this.getPosy() + 10 >= canvas.height){
							colission = new Object();
							colission.type = "wall";	
						}else{
							imageData = ctx.getImageData(this.posx, this.posy + this.size, 10, 10);
							spaceX = this.posx;
							spaceY = this.posy + this.size;
						}
					}else if(this.direction == "right"){
						if(this.getPosx() + 10 >= canvas.width){
							colission = new Object();
							colission.type = "wall";	
						}else{
							imageData = ctx.getImageData(this.posx + this.size, this.posy, 10, 10);
							spaceX = this.posx + this.size;
							spaceY = this.posy;
						}
					}else if(this.direction == "up"){
						if(this.getPosy() <= 0){
							colission = new Object();
							colission.type = "wall";		
						}else{
							imageData = ctx.getImageData(this.posx, this.posy - this.size, 10, 10);
							spaceX = this.posx;
							spaceY = this.posy - this.size;
						}
					}else if(this.direction == "left"){
						if(this.getPosx() <= 0){
							colission = new Object();
							colission.type = "wall";		
						}else{
							imageData = ctx.getImageData(this.posx - this.size, this.posy, 10, 10);
							spaceX = this.posx - this.size;
							spaceY = this.posy;
						}
					}
					
	
					if(imageData != null){
						for(var i=0;i<imageData.data.length - 1;i++){
							// COLOR DE LA RATA
							if(imageData.data[i] == 218){
								colission = new Object();
								colission.posx = spaceX;
								colission.posy = spaceY;
								colission.type = "rat";
							
								break;		
							}
							// COLOR VERDE DE SERPIENTE
							else if(imageData.data[i] == 159){
								colission = new Object();
								colission.posx = spaceX;
								colission.posy = spaceY;
								colission.type = "me";
								break;		
							}
						}
					}
				
				return colission
			}
