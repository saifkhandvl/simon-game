var buttonColors=['red','blue','green','yellow'];
var gamePattern=[];
var userClickPattern=[];



var start =false;
var level=0;

$('.bttn').on('click',function(){
  if (!start){
    $('#level-title').text('level '+level)
   nextSequence();

    start=true;
  }
  
});


function checkanswer(currentlevel){

  if (gamePattern[currentlevel] === userClickPattern[currentlevel]) {
      if (userClickPattern.length === gamePattern.length){
        setTimeout(function(){
          nextSequence()
        },500);
    }
  }
  else {
    play('wrong');
    $('.iii').addClass('game-over');
     $("#level-title").text("Game Over, start Key to Restart");

      setTimeout(function () {
        $(".iii").removeClass("game-over");
      }, 150);
      startover()


  }
}


function nextSequence(){
  userClickPattern = [];
  level++;
 $('#level-title').text('level '+level);
 
  var randomNumber=Math.floor(Math.random()*4);
  var randomChosenColor=buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
    

$("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
play(randomChosenColor);
}

$('.btn').click(function(){
var userChosenColor=$(this).attr('id');
userClickPattern.push(userChosenColor);
console.log(userClickPattern);
play(userChosenColor);
animate(userChosenColor);

checkanswer(userClickPattern.length-1);
});


function play(ii){
  var vv=new Audio('sounds/'+ii+'.mp3');
  vv.play();
}
function animate(currentColor){
  $('#'+currentColor).addClass('pressed');
  setTimeout(function(){
$('#'+currentColor).removeClass('pressed')
  },300)
}
function startover(){
  start=false;
  gamePattern=[]
  level=0

}