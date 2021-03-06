// Enemies our player must avoid
var Enemy = function (x, y) {
  this.sprite = 'images/enemy-bug.png';
  this.x = x;
  this.y = y;
  this.height= 65;
  this.width=95;
  this.collision = false;
};
 

 

Enemy.prototype.update = function (dt) {
  this.x += 150 * dt;
  if (this.x > 500) {
    this.x = -100;
    }

  /** Check for collision between player and bugs */

if (collision (player.x, player.y, player.width, player.height, this.x, this.y, this.width, this.height)) {
  this.collision = true;
  /** reset the player if there is a collision */
  if (player) {
      player.x = 202;
      player.y = 400;
  }
 }    else  {
      this.collision = false;
 
} 
  
};
     

// Draw the enemy on the screen:
Enemy.prototype.render = function() {
this.x += 1;
   if (this.x > 500) {
     this.x = 0;
   }
 

ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//   THe player class featuring an update(), render() and
// a handleInput() method.

var Player = function() {
 this.sprite = 'images/char-pink-girl.png';
 this.x = 200;
 this.y = 350;
 this.height= 75;
 this.width=65;
};
Player.prototype.update = function(dt) {
};
Player.prototype.render = function() {
 ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
 
 


Player.prototype.handleInput = function(dt) {
  //** Establish boundaries so player cannot leave the board  */
   // if player moves left and x is greater than 0, we can move left
if (dt === 'left' && this.x > 0) {
  this.x -= 50; 
}

// else if player moves right and x is less than canvas size of 400 (won't leave the board)
else if (dt === 'right' && this.x < 400) {
this.x += 50; // move right
}

// else if player goes up and y is greater than 0
else if (dt === 'up' && this.y > 40) {
this.y -= 50; // move up
}  

// else if down and y is less than canvas height (won't go off canvas)
else if (dt === 'down' && this.y < 400 ) {
this.y += 50;
}

// invalid move 
else {
console.log('invalid move');
}
};



 

function won () {
  reset();
  console.log('You won!');
}

function reset() {
allEnemies = [];
}
 
/** I watched the webinar of Lloan Alas on Arcade game and was inspired by his solution for collision detection: https://www.youtube.com/watch?v=oz7pHJ65TEk&feature=youtu.be */
function collision(px, py, pw, ph, ex, ey, ew, eh) {
          return (Math.abs(px -ex)*2 <pw +ew) && (Math.abs(py -ey)*2 < ph + eh);
}
 
const player = new Player();
// This listens for key presses and sends the keys to your
// Player.handleInput() method. No need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

 

/** I had a 1 on 1 student mentor session with Lloan Alas. Per his sugestion, I gave these values to the enemies to 
 * make sure they appear from outside the board.  */
var enemy1 = new Enemy(-90, 60);
var enemy2 = new Enemy(-190, 140);
var enemy3 = new Enemy(-290, 230);

let allEnemies = [enemy1, enemy2, enemy3];

 
