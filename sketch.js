var canvas, backgroundImage;

var questions;

var question, constestant, quiz;


function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  quiz = new Quiz();
  quiz.start();
}


function draw(){
  background("teal");
  
}