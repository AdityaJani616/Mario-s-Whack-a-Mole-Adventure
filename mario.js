let currMoleTile; // Declaring currMoleTile as a global variable
let currPlantTile;// Declaring currPlantTile as a global variable
let score=0;
let gameOver=false;
let timeLeft = 50;
let timerId;
window.onload=function()
{
    setGame();
    startTimer();
}
function setGame()
{
    for(let i=0;i<9;i++)
    {
        let tile=document.createElement("div");
        tile.id=i.toString();
        tile.addEventListener("click",selectTile);
        document.getElementById("board").appendChild(tile);
    }
    setInterval(setMole,1000);//1 second
    setInterval(setPlant,2000);//2 second
}
function getRandomTile()
{
    let number=Math.floor(Math.random()*9);
    return number.toString();
}

function setMole()
{   if(gameOver)
    {
        return;
    }
    if(currMoleTile){
    currMoleTile.innerHTML="";
}
    let mole=document.createElement("img");
    mole.src="monty-mole.png";

    let number=getRandomTile();
    if(currPlantTile && currPlantTile.id ==number)
    {
        return;
    }
    currMoleTile=document.getElementById(number);
    currMoleTile.appendChild(mole);
    
 
}
function setPlant()
{   if(gameOver)
    {
        return;
    }
    if(currPlantTile)
    {
        currPlantTile.innerHTML="";
    }
    let plant=document.createElement("img");
    plant.src="./piranha-plant.png";
    let number=getRandomTile();
   if(currMoleTile && currMoleTile.id==number)
   {
    return;
   }
    currPlantTile=document.getElementById(number);
    currPlantTile.appendChild(plant);
}
function selectTile()
{   if(gameOver)
    {
        return;
    }
    if(this==currMoleTile)
    {
        score+=10;
        document.getElementById("score").innerHTML=score.toString();//updating the score
        if(score=="100")
        {
            document.getElementById("score").innerHTML="VICTORY";
            gameOver=true;
        }        
    }
    else if(this==currPlantTile){
        document.getElementById("score").innerHTML="GAME OVER: "+score.toString();
        gameOver=true;
    }

}
//Code for timer
function startTimer() {
    
    updateTimer();
}

function updateTimer() {
    timerId = setTimeout(() => {
        if (timeLeft <= 0) {
            if(gameOver){
                return;
            }
            document.getElementById("timer").innerHTML = "Time's up!";
            gameOver = true;
        } else {
            if(gameOver){
                return;
            }
            document.getElementById("timer").innerHTML = timeLeft + "s";
            timeLeft--;
            updateTimer();
        }
    }, 1000);
}
// Delay for 1 second before hiding the loader and showing the main content
setTimeout(() => {
    document.getElementById("loader-container").style.display = "none";
    document.getElementById("main-content").style.display = "block";
}, 1500);
