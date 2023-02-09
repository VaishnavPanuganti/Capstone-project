let one = document.querySelector('.one');
let heartOne = document.querySelector('.heartOne');
let Two = document.querySelector('.two');
let heartTwo = document.querySelector('.heartTwo');
let Three = document.querySelector('.three');
let heartThree = document.querySelector('.heartThree');
let count = 0 ; 
let countTwo = 0 ; 
let countThree = 0 ; 
heartOne.addEventListener('click', ()=>{
  
    one.innerText = count++;
})
heartTwo.addEventListener('click', ()=>{
  
    Two.innerText = countTwo++;
})
heartThree.addEventListener('click', ()=>{
  
    Three.innerText = countThree++;
})