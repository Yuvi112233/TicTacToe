console.log("Tic Tac Toe")
let music=new Audio("music.mp3")
let audioTurn= new Audio("ting.mp3")
let gameover=new Audio("gameover.mp3")
let Turn = "X"
let Gameover=false;

//function to change the turn
const changeTurn=()=>{
return Turn==="X"?"0":"X"
}

//function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
      // Format: [index1, index2, index3, translateX%, translateY%, rotateDegrees]
      [0, 1, 2, 0, 16.5, 0],    // Top row
      [3, 4, 5, 0, 50, 0],      // Middle row
      [6, 7, 8, 0, 83.5, 0],    // Bottom row
      [0, 3, 6, -33.5, 50, 90], // First column
      [1, 4, 7, 0, 50, 90],     // Middle column
      [2, 5, 8, 33.5, 50, 90],  // Last column
      [0, 4, 8, 0, 50, 45],     // Diagonal from top-left to bottom-right
      [2, 4, 6, 0, 50, 135]     // Diagonal from top-right to bottom-left
    ];
  
    wins.forEach((e) => {
      if (
        boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
        boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
        boxtext[e[0]].innerText !== ""
      ) {
        document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won";
        Gameover = true;
        gameover.play();
        document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "200px";
        
        // Adjust line position and rotation
        const line = document.querySelector(".line");
        line.style.width = "100%"; // Set width to match the container's width
        line.style.transform = `translate(${e[3]}%, ${e[4]}%) rotate(${e[5]}deg)`;
      }
    });
  };
  

//game logic
 music.play();
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach(Element=>{
    let boxtext =Element.querySelector('.boxtext');
    Element.addEventListener('click',()=>{
if(
    boxtext.innerText===''){
        boxtext.innerText=Turn;
       Turn= changeTurn();
        audioTurn.play();
        checkWin();
        if(!Gameover){
            document.getElementsByClassName("info")[0].innerText="Turn for"+Turn;

        }
        


    }

    })
})
//add on click listener button to reset the game
reset.addEventListener('click',()=>{
    let boxtext =document.querySelectorAll('.boxtext');
Array.from(boxtext).forEach(Element=>{
Element.innerText=""
});
Turn="X";
Gameover=false;
document.getElementsByClassName("info")[0].innerText="Turn for"  +Turn;
document.querySelector(".line").style.width= "0vw"
 document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"

})



