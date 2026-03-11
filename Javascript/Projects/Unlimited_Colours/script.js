//Generate random colout
const randColour = function(){
  const hex = '0123456789ABCDEF'
  let color = '#';
  for(let i = 0; i < 6; i++){
      color += hex[Math.floor(Math.random() * 16)]
  }
  return color;
}
let intervalId
const startChangingColour = function(){
  if(!intervalId){
    intervalId = setInterval(changeColour, 1000)
  }
  function changeColour(){
  document.body.style.backgroundColor = randColour();
  }
}
document.querySelector("#start").addEventListener('click', startChangingColour)

const stopChangingColour = function(){
  clearInterval(intervalId);
  intervalId = null;
}
document.querySelector("#stop").addEventListener('click', stopChangingColour)   