const score=document.querySelector(".score")
const timeLeft=document.querySelector(".time-left")
const mole=document.querySelectorAll(".mole")
const box=document.querySelectorAll(".box")

let hitid=null;
let totalScore=0;

//initially remove the presence of any class mole 
function clearMole(){
mole.forEach((x)=>{
    x.classList.remove("mole")
})
}

//make the mole apppear randomly
function moleAppear(){
  let molelocation=box[Math.floor(Math.random() * 9)];
    molelocation.classList.add("mole")
    //id of mole location is set to hitid variable
    hitid=molelocation.id
    //mole is removed after 0.5s which will be the start of new mole appearence
    setTimeout(() => {
    molelocation.classList.remove("mole")
    }, 500);
}

//mole appears every 0.5seconds by using setInterval
//  setInterval(moleAppear,500)

 //each box is given eventlistener when clicked look for the match of box id that is clicked and id of mole location
 //when the match is true add score by 10 and display it
box.forEach(y=>{
    y.addEventListener('mouseup',function lookmatch(){
      if(y.id == hitid){
        totalScore = totalScore + 10;
        score.textContent=totalScore;
      }
})
})
 




//timer runs for 60 seconds 
// function runtime(){

//  timeLeft.textContent--;
// }

// setInterval(runtime,1000)

// if(timeLeft.textContent==58){
//     clearInterval(runtime())

// }


