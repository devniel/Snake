function Parte(x,y,type,body){
	this.posx = x;
	this.posy = y;
	this.size = 10;
	this.xposx = null;
	this.xposy = null;
	this.xdirection = null;
	this.type = type; // 1 = cabeza, 0 = parte
	this.direction = null;
	this.body = body;
	this.setPosx = function(_posx){
		this.xposx = this.posx;
		this.posx = _posx;
	}
	this.getPosx = function(){
		return this.posx;
	}
	this.setPosy = function(_posy){
		this.xposy = this.posy;
		this.posy = _posy;
	}
	this.getPosy = function(){
		return this.posy;
	}
	this.setDirection = function(__direction){
		this.xdirection = this.direction;
		this.direction = __direction;
	}
}
