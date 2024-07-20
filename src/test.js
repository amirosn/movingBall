const circle = document.querySelector(".circle")

//this function moves circle every time you click on it and stops after a certain time

// let count = 0
// let px = 0
// const moveCircle = () => {
//   px+=50
//   circle.style.left = px + "px";
//   count++
//   if (count > 3){
//     circle.removeEventListener("click", moveCircle)
//   }
//   console.log(count)
//   console.log(px)
//
// }
// circle.addEventListener("click", moveCircle )
// const moveCircle = () => {
//   px+=50
//   circle.style.left = px + "px"
//   console.log(px)
//   if(px>150){clearInterval(timerId)}
// }
// const timerId = setInterval(moveCircle, 2000)


//this function can be used to move an element
let x = 0
let y = 0
const control = (event) => {
  switch(event.keyCode){
    case 37 : console.log("pressed left")
      x-=50
      circle.style.left = x + "px"
      console.log(x)
      break;
    case 39 : console.log("pressed right")
      x+=50
      circle.style.left = x + "px"
      console.log(x)
      break;
    case 38 : console.log("pressed up")
      y-=50
      circle.style.top = y + "px"
      console.log(y)
      break;
    case 40 : console.log("pressed down")
      y+=50
      circle.style.top = y + "px"
      console.log(y)
      break;
    default : console.log("key not recognized")
  }

}
document.addEventListener("keydown", control)
