var database;
var form;
var player;
var game;
var gameState=0;
var playerCount;

function setup(){
  database = firebase.database();
  game=new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");
}  