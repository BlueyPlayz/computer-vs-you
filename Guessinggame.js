function NumberCheck(){
    var g = 1;
    var count = 0;
    var r = Math.floor(Math.random() *10+1);
    for(count = 1; count<=3; count++){
        var t = prompt("please enter a number 1 to 10");
    if (t==r){
        alert("🎮 YOU WON THE GAME 🎮");
        g = 0;
    }
    else  if (t>r){
        alert("The answer was lower than what you typed");
    }
    else if (t<r){
        alert("The answer was higher that what you typed");
    }
    

}
if (g != 0){
    alert("You lost all your tries GAME OVER");
    alert("the correct answer is "+ r)
}
    
}
