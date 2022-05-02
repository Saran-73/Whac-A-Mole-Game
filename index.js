const score=document.querySelector(".score")
let timeLeft=document.querySelector(".time-left")
const mole=document.querySelectorAll(".mole")
const box=document.querySelectorAll(".box")

let hitid=null;

//remove the presence of class mole
function clearMole(){
mole.forEach((x)=>{
    x.classList.remove("mole")
})
}
//make mole apppear randomly
function moleAppear(){
  let molelocation=box[Math.floor(Math.random() * 9)];
    molelocation.classList.add("mole")
    hitid=molelocation.id
}

box.forEach(y=>{
//     y.addEventListener('mouseup',)
//     if(y.id=== hitid){

//     }
})





//timer runs for 60 seconds 
// function runtime(){

//  timeLeft.textContent--;
// }

// setInterval(runtime,1000)

// if(timeLeft.textContent==58){
//     clearInterval(runtime())

// }


