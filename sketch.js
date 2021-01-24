var gameState,playerCount
gameState=0
playerCount=0
var database
var form,game,player
var allPlayers

function setup(){
	createCanvas(400,400)
	database=firebase.database()
	game=new Game()
	game.getState()
	game.start()
}

function draw(){
	if(playerCount==4){
		game.update(1)
	}
}
