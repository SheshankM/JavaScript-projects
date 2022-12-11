let count = document.querySelector('.count')
let increase = document.querySelector('.btn2')
let decrease = document.querySelector('.btn1')

function inc(){
  let num = count.textContent
  num ++
  if(num>0){
    count.style.color = '#abff2e'
  }
  else if(num<0){
    count.style.color = '#ff0000'
  }
  else {
    count.style.color = '#ffffff'
  }
  
  count.textContent = num
}
function dec(){
  let num = count.textContent
  num --
  if(num>0){
    count.style.color = '#abff2e'
  }
  else if(num<0){
    count.style.color = '#ff0000'
  }
  else{
    count.style.color = '#ffffff'
  }
  count.textContent = num
}


increase.addEventListener('click',inc)
decrease.addEventListener('click',dec)