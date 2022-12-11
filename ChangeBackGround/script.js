const btn = document.querySelector('.btn')
let bgValue = document.getElementById("container")
let code = document.querySelector('.code')
function changeBg(){
  let value2 = getRandomInt().toString()
  let value = "#" + value2
  bgValue.style.backgroundColor = value
  code.innerHTML = "#" + getRandomInt().toString()
}

function getRandomInt(){
  return Math.floor(Math.random()*1e6)
}
btn.addEventListener("click",changeBg)