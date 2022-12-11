let prevtext = document.querySelector('.prevtext')
let text = document.querySelector('#text')
let btn = document.querySelector('.btn')
let warn = document.querySelector('.warn')
function pass(){
  let text2 = document.getElementById('text').value
  if(text2 == ''){
    warn.classList.add('show')
    setTimeout(() => {
      warn.classList.remove('show')
    },2000)
  }
  else{
    prevtext.textContent = text2
    text.value = ''
  }
}

btn.addEventListener('click',pass)

document.addEventListener('keypress',(event) => {
  if(event.key == "Enter"){
    event.preventDefault();
    pass()
  }
})