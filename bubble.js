var timer = 6;
var score = 0;
var hitrn = 0;
function makeBubble(){
    var bubble = " ";

for( var i =0 ; i<=67; i++){
    var rn = Math.floor(Math.random()*10);
    bubble += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = bubble;
}


function setTimer(){
    var timerInt = setInterval(function(){
        if(timer>0){
            timer--;
        document.querySelector("#timer").textContent = timer;
        }
        else{
            clearInterval(timerInt)
            document.querySelector("#pbtm").innerHTML = `<h2>Game Over</h2>`;
        }
    },1000);
}

function hit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitValue").textContent = hitrn;
}

function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}


document.querySelector("#pbtm")
.addEventListener("click", function(dets){
    var clickedNumber =Number(dets.target.textContent);
    if(clickedNumber === hitrn){
        increaseScore();
        makeBubble();
        hit();
    }else{
        alert("You Pushed wrong button");
        document.querySelector("#pbtm").innerHTML = "";
    }
})

makeBubble();
setTimer();
hit();
