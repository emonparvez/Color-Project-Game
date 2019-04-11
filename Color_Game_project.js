var numSquare=6;

var colors=generateRandomColors(numSquare);

var pickedColor=pickColor();

var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.getElementById("messageDisplay");
var square=document.querySelectorAll(".square");
var three=document.querySelectorAll("#three");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");




easyBtn.addEventListener("click",function(){
    hardBtn.classList.remove("selected");
   easyBtn.classList.add("selected");
   numSquare=3;
   colors=generateRandomColors(numSquare);
   pickedColor=pickColor();
   colorDisplay.textContent=pickedColor;
   

   

   for(var i=0; i<square.length; i++){

        if(colors[i]){

            square[i].style.background=colors[i];
        }
        else{
            square[i].style.display ="none";
        }

    }

});



hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquare= 6;
    colors=generateRandomColors(numSquare);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    
    for(var i=0; i<square.length; i++){
 
         if(colors[i]){
 
             square[i].style.background=colors[i];
    
             square[i].style.display ="block";
         }
 
     }
})

reset.addEventListener("click",function(){
    
    colors=generateRandomColors(numSquare);
    messageDisplay.textContent="";
    this.textContent="New Colors"
    pickedColor=pickColor();
    

    colorDisplay.textContent=pickedColor;
    
    
for(var i=0; i<square.length; i++){
square[i].style.backgroundColor=colors[i];
}

    h1.style.background="steelBlue"


});




for(var i=0; i<square.length; i++){
    //add initial color to square
    square[i].style.backgroundColor=colors[i];
    colorDisplay.textContent=pickedColor;
    //add click listener to all square
    square[i].addEventListener("click",function(){
    //grab color of clicked square

    var clickedColor = this.style.backgroundColor;
      
    //compare color with picked color
    if(clickedColor === pickedColor){
             messageDisplay.textContent="Correct!!!";
             changeColors(clickedColor);
             h1.style.background=clickedColor;
             reset.textContent="Play Again ?"
           
            
           
    }else{
            this.style.backgroundColor="#232323";
            messageDisplay.textContent="Try Again";
     }
    });
};

function changeColors(color){
    
    for(var i= 0; i<square.length; i++){
        square[i].style.background=color;
    }

    
}
function pickColor(){
   var random= Math.floor(Math.random() * colors.length)
   return colors[random];
}

function generateRandomColors(num){

var arr=[];

for(var i=0; i<num ; i++){

    arr.push(randomColor());

    }

    return arr;
}


function randomColor(){

    var r=Math.floor(Math.random() * 256);

    var g=Math.floor(Math.random() * 256);

    var b=Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")" ;

}





