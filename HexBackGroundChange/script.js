const btn = document.querySelector('.btn')
let bgValue = document.getElementById("container")
let code = document.querySelector('.code')
function changeBg(){
  let value2 = getRandomHex()
  bgValue.style.backgroundColor = value2
  code.textContent = getRandomHex()
}

function getRandomHex(){
  const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
  let hex = '#'
  for(let i=0;i<6;i++){
    const index = Math.floor(Math.random()*hexValues.length)
    hex += hexValues[index]
  }
  return hex
}
btn.addEventListener("click",changeBg)