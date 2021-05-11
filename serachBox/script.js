const container=document.querySelector(".container");
const input=document.getElementById('input');
const btn=document.querySelector('.btn');
 
btn.addEventListener('click',()=>{
    container.classList.toggle('active');
    input.focus();
});