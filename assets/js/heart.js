var pos = 0,
dpos = 3.5714,
cycle,
heart = false,
animating = false;

$('heart').click(function(){},function(){
  if(heart && !animating){
    $('heart').css('background-position','0 0');
    heart = false;
  }else if(!animating){
    animating = true;
    animate();
  }
});

function animate(){
  cycle = setInterval(increment,50);
}

function increment(){
  pos += dpos;
  if(pos > 100){
    clearInterval(cycle);
    heart = true;
    animating = false;
    pos = 0;
  }else{
    $('heart').css('background-position',pos+'% 0');
  }
}