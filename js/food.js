function Rat(){
	
	rats.push(this);
	
	this.sprite = images["rat"];
	this.posx = null;
	this.posy = null;
	this.size = 10;
	this.killed = false;
	
	this.setPosition = function(x,y){
		this.setPosx(x);
		this.setPosy(y);
	}
	
	this.setPosx = function(x){
		this.posx = x;		
	}
	
	this.setPosy = function(y){
		this.posy = y;	
	}
	
	this.kill = function(){
		this.killed = true;
	}
	
}

	