let currentMoleTile; //this var will let us know which tile has mole
let currentPlantTile;
let score=0;
let gameOver=false;

window.onload=function()
{ setGame();}

function setGame(){
    //set up board in html
    for(let i=0;i<9;i++)//i goest from 0 to 8, stops at 9.
 {
    //setting up <div><div> in js
    let tile=document.createElement("div");

    /*giving id to div tag i.e. <div id="i">
    since there will be 9 tiles so each tile is given a num or 
    id by i, each tile is numbered 0-8*/ 
    tile.id=i.toString();

    tile.addEventListener("click", selectTile);

    //giving/accessing 9 tiles to the board
    document.getElementById("board").appendChild(tile);
  }
  setInterval(setMole,1200); //calling mole every 1000 milisec ie 1 sec
  setInterval(setPlant,2000);    
}

function getRandomTile(){

    let num=Math.floor(Math.random()*9); //gen num bet 0 to 8
    return num.toString();
    // line 25 will convert num to string for id i.
}

function setMole()
{
  if(gameOver){
    return;
  }
     if(currentMoleTile){
        currentMoleTile.innerHTML=""; //to clear the mole img from prev tile
     }

    let mole=document.createElement("img"); //creating img tag <img>
    mole.src="./monty-mole.png"; //adding img of mole to tag

    let num= getRandomTile();
    if(currentPlantTile && currentPlantTile==num)
    {
        return;
    }
    currentMoleTile=document.getElementById(num);
    currentMoleTile.appendChild(mole);
}

function setPlant()
{ if(gameOver){
    return;
}

    if(currentPlantTile){
        currentPlantTile.innerHTML="";
    }
    let plant=document.createElement("img");
    plant.src="./piranha-plant.png";

    let num=getRandomTile();
    if(currentMoleTile && currentMoleTile==num)
    {
            return;
    }
     currentPlantTile=document.getElementById(num);
     currentPlantTile.appendChild(plant);
}

function selectTile()
{ if(gameOver){
    return;
}
    if(this==currentMoleTile)
        {
          score=score+10;
          document.getElementById("score").innerText=score.toString(); //update score

        }
    else if(this==currentPlantTile)
        {
           document.getElementById("score").innerText="GAME OVER " + score.toString();
           gameOver=true;
        }
}