const menuBars = document.querySelector('#menu-bars');
const bar1 = document.querySelector('#bar1');   
const bar2 = document.querySelector('#bar2');   
const bar3 = document.querySelector('#bar3');   

function toggleNav(){
    menuBars.classList.toggle('change');
}

menuBars.addEventListener('click', toggleNav);
bar1.addEventListener('click', toggleNav);
bar2.addEventListener('click', toggleNav);
bar3.addEventListener('click', toggleNav);
