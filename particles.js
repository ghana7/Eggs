class particle {
	constructor(_x, _y, _xvel, _yvel, _color, _timer) {
		this.x = _x;
		this.y = _y;
		this.xvel = _xvel;
		this.yvel = _yvel;
		this.color = _color;
		this.timer = _timer;
		this.ctx = myGameArea.context;
		this.canvas = myGameArea.canvas;
	}
	update() {
		this.x += this.xvel;
		this.y += this.yvel;
		this.timer -= 0.02;
		this.ctx.beginPath();
		this.ctx.arc(this.x, this.y, 3, 0, 2 * Math.PI, false);
		this.ctx.fillStyle = this.color;
		this.ctx.fill();
	}
}