const body = document.querySelector('body');
const myBtn = document.getElementById("myBtn");
 
const button = document.querySelector('button');
const color = ['red', 'yellow', 'orange', 'green', 'purple'];

 body.style.backgroundColor ="violet";

 button.addEventListener('click', changeB)

 btn.onclick = changeBackground;

 function changeB() {
      const colorIndex = parseInt(Math.random()*color.length)
      document.body.style.background =  "#fed604"  
 }
