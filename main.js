var buttonDict = { bottomB: 0, rightB: 1, leftB: 2, topB: 3, leftBumper: 4, rightBumper: 5, minus: 8, plus: 9, joyPush: 10, home: 13, sideBumper: 14, sideTrigger: 15 };
var colors = ["red", "blue", "yellow", "green"];
var borders = ["FF9999", "9999FF", "99FF99", "FFFF99"];

const eggs = [];

const app = new PIXI.Application({ backgroundColor: 0x1099bb });

function init() {
	document.body.appendChild(app.view);

	let imgSources = [];
	imgSources.push("assets/circle.png");

	//Load those images, then run setup
	PIXI.Loader.shared.
		add(imgSources).
		on("progress", e => { console.log(`progress=${e.progress}`) })
		.load(startGame);
	
}


function startGame(color1, color2) {
	eggs.push(new Egg(50, "black", 100, 100));
	
	for(let egg of eggs) {
		app.stage.addChild(egg);
	}

	app.ticker.add(gameLoop);
}


function gameLoop() {
	/*var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
	console.log(gamepads);
	for (var i = 0; i < 2; i++) {
		if (fixAxis(gamepads[i].axes[9]) === 3 || fixAxis(gamepads[i].axes[9]) === 4 || fixAxis(gamepads[i].axes[9]) === 5) {
			eggs[i].yvel += 0.1;
		}
		if ((gamepads[i].buttons[0].value === 1) && (eggs[i].y === myGameArea.canvas.height - eggs[i].radius)) {
			eggs[i].yvel -= 15;
		}
		if (fixAxis(gamepads[i].axes[9]) === 1 || fixAxis(gamepads[i].axes[9]) === 2 || fixAxis(gamepads[i].axes[9]) === 3) {
			eggs[i].xvel += 0.5;
		}
		if (fixAxis(gamepads[i].axes[9]) === 5 || fixAxis(gamepads[i].axes[9]) === 6 || fixAxis(gamepads[i].axes[9]) === 7) {
			eggs[i].xvel -= 0.5;
		}
		eggs[i].cooldown -= 0.02;
		if (eggs[i].cooldown < 0) {
			eggs[i].cooldown = 0;
		}
		if (gamepads[i].buttons[1].value === 1 && eggs[i].cooldown === 0) {
			eggs[i].cooldown = 5;
			if (eggs[i].color === "red") {
				eggs[i].xvel *= -0.1;
				eggs[i].yvel *= -0.1;
				for (var p = 0; p < 25; p++) {
					particles.push(new particle("yellow", eggs[i].x, eggs[i].y, eggs[i].xvel + Math.random() * 10 - 5, eggs[i].yvel + Math.random() * 10 - 5, 3));
				}
			}
			if (eggs[i].color === "blue") {
				eggs[i].xvel *= 1.5;
				eggs[i].yvel *= 1.5;
				for (var p = 0; p < 25; p++) {
					particles.push(new particle("cyan", eggs[i].x, eggs[i].y, eggs[i].xvel + Math.random() * 10 - 5, eggs[i].yvel + Math.random() * 10 - 5, 3));
				}
			}
			if (eggs[i].color === "green") {
				eggs[i].shielded = true;
			}
			if (eggs[i].color === "yellow") {
				var old = eggs[i].x;
				var oldY = eggs[i].x;
				eggs[i].x += eggs[i].xvel * 20;
				eggs[i].y += eggs[i].yvel * 5;
				for (var p = 0; p < 100; p++) {
					var rand = Math.random();
					particles.push(new particle("white", rand * old + (1 - rand) * eggs[i].x, rand * oldY + (1 - rand) * eggs[i].y, Math.random() * 4 - 2, Math.random() * 4 - 2, 1));
				}
			}
			if (eggs[i].color === "black") {
				eggs[i].health += 10;
				for (var p = 0; p < 75; p++) {
					particles.push(new particle("#00FF00", eggs[i].x, eggs[i].y, eggs[i].xvel + Math.random() * 10 - 5, eggs[i].yvel + Math.random() * 30 - 15, .5));
				}
			}
		}


	}*/
	

	for (var i = 0; i < eggs.length; i++) {
		eggs[i].update();
		eggs[i].draw();
	}
	/*for (var p = 0; p < particles.length; p++) {
		particles[p].update();
		if (particles[p].timer < 0) {
			particles.splice(p, 1);
		}
	}*/
	//eggs[0].checkCollision(eggs[1]); //change eventually to handle more eggs


	if (eggs[0].health <= 0) {
		for (var i = 0; i < eggs.length; i++) {
			eggs[i].update();
		}
		alert("Player 2 wins!");
		app.ticker.remove(gameLoop);
	}
	/*if (eggs[1].health <= 0) {
		for (var i = 0; i < eggs.length; i++) {
			eggs[i].update();
		}
		alert("Player 1 wins!");
		clearInterval(myGameArea.interval);
		end = 0;
	}*/
}