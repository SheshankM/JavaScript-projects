let img = document.querySelector('.container')

let photos = [1,2,3,4,5,6,7,8,9,10]
let count = 0
function rflip() {
  if(count == photos.length-1 ){
    count = 0
  }
  img.style.backgroundImage = `url('./person/${photos[count]}.jpeg')`

  count++
}

function lflip(){
  if(count == 0 ){
    count = photos.length -1
  }
  img.style.backgroundImage = `url('./person/${photos[count]}.jpeg')`
  count--
}

let left = document.querySelector('.left')
let right = document.querySelector('.right')
left.addEventListener('click',lflip)
right.addEventListener('click',rflip)