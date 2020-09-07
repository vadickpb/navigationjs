const overlay = document.querySelector("#overlay");
const menuBars = document.querySelector('#menu-bars');
const nav1 = document.querySelector('#nav-1');   
const nav2 = document.querySelector('#nav-2');   
const nav3 = document.querySelector('#nav-3');   
const nav4 = document.querySelector('#nav-4');   
const nav5 = document.querySelector('#nav-5');  
const navItems = [nav1, nav2, nav3, nav4, nav5];

function navAnimation(direction1, direction2){
    navItems.forEach((item, i) => {
        item.classList.replace(`slide-${direction1}-${i+1}`,`slide-${direction2}-${i+1}`)
    })
}


function toggleNav(){
    //toggle menu bar open closed
    menuBars.classList.toggle('change');

    //toggle: Menu active
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        //Animate in - Overlay
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');

        //Animate in item
        navAnimation('out' , 'in');
    

    } else {
        //Animate out - Overlay
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');

        //animate out items
        navAnimation('in' , 'out');
        
    }
}

menuBars.addEventListener('click', toggleNav);
navItems.forEach( item => {
    item.addEventListener('click', toggleNav);
})

