 const body = document.querySelector('body');
 const btn = document.querySelector('.btn');
 const colors = ['green', 'blue','red','purple'];

 btn.addEventListener('click', changeColor);

 function changeColor(){
    let random = Math.floor(Math.random()*colors.length)
    body.style.backgroundColor = colors[random];
 }
 