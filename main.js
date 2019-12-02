/**Variables */
var scores,rScore,aPlayer, gPlaying;




init();
document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gPlaying){
        var dice= Math.floor(Math.random()*6)+1;
    

    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src='dice-'+dice+'.png';
        
    if(dice !== 1){
        rScore +=dice;
        document.querySelector('#current-'+aPlayer).textContent=rScore;
    }
    else{
        //reset scores
        
        
        changeActivePlayer();
        
    }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){

    if(gPlaying){
        
    scores[aPlayer]+=rScore;
    //
    document.querySelector('#score-'+aPlayer).textContent =scores[aPlayer];
    //
    if (scores[aPlayer] >= 100){
        document.querySelector('#name-'+aPlayer).textContent='Winner';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-'+aPlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+aPlayer+'-panel').classList.remove('active');
        gPlaying =false;
    }
    else
    {
        //
        changeActivePlayer();
    }
    }
    
    
});

document.querySelector('.btn-new').addEventListener('click',init);
//==============================
//Functions
function changeActivePlayer(){
    //change palyer
    rScore =0;
    aPlayer  === 0 ? aPlayer =1 : aPlayer =0;
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display='none';
}

function init(){

    scores =[0,0];
    rScore=0; //round score
    aPlayer=0; //active player
    gPlaying =true;

    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
}