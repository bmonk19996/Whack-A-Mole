let score = 0;


const holes = document.getElementsByClassName("hole");
const htmlScore = document.getElementById('score');


function createMole(){
    const randomHoleIndex = Math.floor(Math.random() * holes.length);
    holes[randomHoleIndex].classList.toggle("mole");
    
}

function whackMole(clickEvent){
    if(clickEvent.target.matches('.mole')){
        score++
        clickEvent.target.classList.remove('mole')
    }else{
        score--
    }
    htmlScore.innerHTML = score
}


setInterval(createMole, 500)
const gameArea = document.getElementById('whack-a-mole');
gameArea.addEventListener('click', whackMole)
