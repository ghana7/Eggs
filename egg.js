class Egg extends PIXI.Sprite {
	constructor(_radius, _color, _x, _y) {
        super(PIXI.Loader.shared.resources["assets/circle.png"].texture);
        this.radius = _radius;
        this.height = 2 * this.radius;
        this.width = 2 * this.radius;
		this.x = _x;
		this.y = _y;
		this.xVel = 0;
        this.yVel = 0;
        this.xAcc = 0;
        this.yAcc = 0;
		this.color = _color;
		this.cooldown = 5;
		this.shielded = false;

        this.health = 100;
        
        this.sprite = new PIXI.Sprite();
    }
    
	update() {
        this.xVel += this.xAcc;
        this.yVel += this.yAcc;
		this.x += this.xVel;
		this.y += this.yVel;
		if (this.y < 0) {
			this.y = 0;
			this.yVel *= -0.8;
		}
		if (this.y > app.view.height - 2 * this.radius) {
			this.y = app.view.height - 2 * this.radius;
			this.yVel *= -0.8;
		}
		if (this.x < 0) {
			this.x = 0;
			this.xVel *= -0.8;
			this.health -= Math.round(Math.abs(this.xVel * 2));
		}
		if (this.x > app.view.width - 2 * this.radius) {
			this.x = app.view.width - 2 * this.radius;
			this.xVel *= -0.8;
			this.health -= Math.round(Math.abs(this.xVel * 2));

		}
		/*this.xVel *= .95;
		this.yVel += 2;*/
    }
    
    draw() {

    }

	checkCollision(otherComponent) {
		if ((this.x - otherComponent.x) * (this.x - otherComponent.x) + (this.y - otherComponent.y) * (this.y - otherComponent.y) < (this.radius + otherComponent.radius) * (this.radius + otherComponent.radius)) {
			var myVelocity = Math.sqrt(otherComponent.xVel * otherComponent.xVel + otherComponent.yVel * otherComponent.yVel);
			var otherVelocity = Math.sqrt(this.xVel * this.xVel + this.yVel * this.yVel);
			var THETA = Math.atan2((this.y - otherComponent.y), (this.x - otherComponent.x));
			//alert(THETA);

			if (!this.shielded) {
				this.xVel = myVelocity * Math.cos(THETA);
				this.yVel = myVelocity * Math.sin(THETA);

				/*for (var p = 0; p < myVelocity * 5; p++) {
					particles.push(new particle(this.color, this.x, this.y, Math.random() * 20 - 10, Math.random() * 20 - 10, 1));
				}*/
			} else {
				this.xVel = myVelocity * Math.cos(THETA) / 3;
				this.yVel = myVelocity * Math.sin(THETA) / 3;
				this.shielded = false;

				/*for (var p = 0; p < 100; p++) {
					particles.push(new particle("gray", this.x, this.y, Math.random() * 20 - 10, Math.random() * 20 - 10, 1));
				}*/
			}

			if (!otherComponent.shielded) {
				otherComponent.xVel = otherVelocity * -Math.cos(THETA);
				otherComponent.yVel = otherVelocity * -Math.sin(THETA);

				/*for (var p = 0; p < otherVelocity * 5; p++) {
					particles.push(new particle(otherComponent.color, otherComponent.x, otherComponent.y, Math.random() * 20 - 10, Math.random() * 20 - 10, 1));
				}*/
			} else {
				otherComponent.xVel = otherVelocity * -Math.cos(THETA) / 3;
				otherComponent.yVel = otherVelocity * -Math.sin(THETA) / 3;
				otherComponent.shielded = false;

				/*for (var p = 0; p < 100; p++) {
					particles.push(new particle("gray", otherComponent.x, otherComponent.y, Math.random() * 20 - 10, Math.random() * 20 - 10, 1));
				}*/
			}
		}
	}
}