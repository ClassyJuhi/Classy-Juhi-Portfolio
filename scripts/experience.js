let work= document.getElementById('work');
let workExpBoxes = document.getElementById('workExpBoxes');

let clickCount = 0;
work.addEventListener('click', () => {
    clickCount++
    if(clickCount % 2 !== 0){
        workExpBoxes.style.display = 'flex';
    }
    else{
        workExpBoxes.style.display = 'none';
    }
})