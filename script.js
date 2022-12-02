'use strict'
//  --------------------------------Main page--------------------------------
let btn = document.querySelector('.button_info');
let info = document.querySelector('.About_us');
let overlay = document.querySelector('.overlay');
let imagesDiv = document.querySelector('.images');
let title = document.querySelector('.title');
let closeBtn = document.querySelector('.close_btn');

let home_btn = document.querySelector('.home_btn');
let dice_home_btn = document.querySelector('.dice_home_btn');
let dino_home_btn = document.querySelector('.dino_home_btn');
let TTT_home_btn = document.querySelector('.TTT_home_btn');

let buttonBody = document.body;
buttonBody.style.background = `linear-gradient(to top left, rgb(${255},${255},${255}),rgb(${255},${255},${255}))`;

let homePage = document.querySelector('.home_page');
let gamePage = document.querySelector('.game_page');
let recordPage = document.querySelector('.record_page');

let hidePage = document.querySelector('.hide_page');
let removeHidden = document.querySelector('.hidden_games');
let records = document.querySelector('.records');
let table = document.querySelector('.table');
// RECORDS------------------------------
recordPage.addEventListener('click', function() {
    table.classList.remove('hide');
    records.classList.remove('hidden');
    imagesDiv.classList.add('hide');
    let h1Title = document.querySelector('.title');
    h1Title.classList.add('hide');
    btn.classList.add('hide');
    let body = document.body;
});
//---------------------------------------------------------------------------------

hidePage.classList.remove('hide');

let returnFromRecords = function() {
    table.classList.add('hide');
    records.classList.add('hidden');
    imagesDiv.classList.remove('hide');
    let h1Title = document.querySelector('.title');
    h1Title.classList.remove('hide');
    btn.classList.remove('hide');
}

home_btn.style.position = `absolute`;
home_btn.style.top = `${0}px`;
home_btn.style.left = `${-445}px`

let returnHome = function() {
    //*******************
    // home_btn.style.position = `absolute`;
    // home_btn.style.top = `${0}px`;
    // home_btn.style.left = `${-450}px`;
    
    home_btn.classList.add('hidden');
    hidePage.classList.remove('hide');
    removeHidden.classList.add('hidden_games');
    let bodyLook = document.body;
    bodyLook.style.background = `linear-gradient(to top right, rgb(${255},${255},${255}),rgb(${255},${255},${255})`;
    bodyLook.style.alignItems = `start`;

    ///
    closedDice.classList.add('hiddenDice');
    let btnRemove = document.querySelector('.hideButton');
    btnRemove.classList.remove('hidden');
    ///!!!!!!!!
    closedDino.classList.add('hiddenDino');
    // dinoGameIsOn = 0;
    attempts++;//324-326 lines
    gameOver = 0;
    cactus.style.animation = 'cactusMov 1s infinite linear';

    //////////////!!!!!!!!!!!!
    let ttt = document.querySelector('#ttt');
    ttt.classList.add('ttt');
    let h1Title = document.querySelector('.title');
    h1Title.style.fontSize = `${15}px`;
}

home_btn.addEventListener('click', returnHome);
homePage.addEventListener('click', returnFromRecords);
dice_home_btn.addEventListener('click', returnHome);
dino_home_btn.addEventListener('click',returnHome);
TTT_home_btn.addEventListener('click', returnHome);

gamePage.addEventListener('click',function() {
    home_btn.classList.remove('hidden');
    hidePage.classList.add('hide');
    removeHidden.classList.remove('hidden_games');
    let bodyLook = document.body;
    bodyLook.style.background = `linear-gradient( ${509}deg, white ${10}%, rgb(${194},${255},${237}) ${30}% ${30}%,rgb(${128},${163},${175}) ${60}% , rgb(${69},${49},${209}))`;
    
    if(!table.classList.contains('hide')) {
        table.classList.add('hide');
        records.classList.add('hidden');
        imagesDiv.classList.remove('hide');
        let h1Title = document.querySelector('.title');
        h1Title.classList.remove('hide');
        btn.classList.remove('hide');
    }

});

btn.addEventListener('click', function() {
    info.classList.remove('hide');
    overlay.classList.remove('hide');
    imagesDiv.style.visibility = 'hidden';
    title.style.visibility = 'hidden';
});

overlay.addEventListener('click',function(){
    info.classList.add('hide')
    overlay.classList.add('hide');
    imagesDiv.style.visibility = 'visible';
    title.style.visibility = 'visible'
});

closeBtn.addEventListener('click', function(){
    info.classList.add('hide')
    overlay.classList.add('hide');
    imagesDiv.style.visibility = 'visible';
    title.style.visibility = 'visible'
});


const openGame = document.querySelectorAll('.show');
const closedDice = document.querySelector('.hiddenDice');
const closedDino = document.querySelector('.hiddenDino');
var dinoGameIsOn = 0;

console.log(`dino Game ${dinoGameIsOn}`);
const openDice = function() {//აქ ვხსნით ჩვენი კამათლების სქრინს და 8 ხაზში body-ს ვანიჭებთ ცვლადს, მასს ვცვლით, ვაშორებთ ღილაკებს
    home_btn.classList.add('hidden');

    closedDice.classList.remove('hiddenDice');
    let b = document.body;
    b.style.fontFamily = `"Nunito", sans-serif`;
    b.style.height = `${100}vh`;
    // b.style.background = `linear-gradient(to top left, rgb(${117}, ${54}, ${130}), rgb(${191}, ${46}, ${52}) )`;
    b.style.display = `flex`;
    b.style.alignItems = `center`;
    b.style.justifyContent = `center`;

    let btnRemove = document.querySelector('.hideButton');
    btnRemove.classList.add('hidden');

    b.style.background = `linear-gradient(-${45}deg, rgb(${267},${166},${247}), rgb(${76},${76},${167}), rgb(${144},${178},${223}), rgb(${235},${178},${247}))`;
    b.style.backgroundSize = `${400}% ${400}%`;
    b.style.animation = `gradient ${15}s ease infinite`;
}

const openDino = function() {
    home_btn.classList.add('hidden');

    closedDino.classList.remove('hiddenDino');
    let b = document.body;
    b.style.background = `linear-gradient(to top left, rgb(${208},${208},${208}),rgb(${208},${208},${208}))`;
    b.style.boxSizing = `border-box`;
    let btnRemove = document.querySelector('.hideButton');
    btnRemove.classList.add('hidden');
    dinoGameIsOn = 1;
}

const openTicTacToe = function() {
    home_btn.classList.add('hidden');

    let ttt = document.querySelector('.ttt');
    ttt.classList.remove('ttt');
    let btnRemove = document.querySelector('.hideButton');
    btnRemove.classList.add('hidden');
    let b = document.body;
    b.style.background = `linear-gradient(-${45}deg, rgb(${255},${209},${232}), rgb(${255},${185},${217}), rgb(${170},${250},${225}), rgb(${110},${206},${150}))`;
    b.style.backgroundSize = `${400}% ${400}%`;
    b.style.animation = `gradient ${15}s ease infinite`;
    b.style.fontSize = `${16}px`;
    
}


for(let i = 0; i < openGame.length; i++) {
    if(i === 0) {
        openGame[i].addEventListener('click', openDice);
    } else if(i === 1) {
        openGame[i].addEventListener('click', openDino);
    } else if(i === 2) {
        openGame[i].addEventListener('click', openTicTacToe);
    }
}
console.log(`Dino Game ${dinoGameIsOn}`);
//  --------------------------------Dice script--------------------------------
//Selecting elements 
console.log(dinoGameIsOn);
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let dice_player1 = document.querySelector('.Dice_player_1');
let dice_player2 = document.querySelector('.Dice_player_2'); 
let dice_result = document.querySelector('.Dice_result');
let scores, currentScore, activePlayer, playing;
let dice1 = 0, dice2 = 0; 

const init = function() { //initialisation
    scores = [0,0];//final scores
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player-winner');
    player1El.classList.remove('player-winner');
    // player0El.classList.add('player--active');
    // player1El.classList.remove('player--active');
}

const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1: 0;
    player0El.classList.toggle('player--active');//it will add class if it is not there, if it is there it will remove it
    player1El.classList.toggle('player--active');
}

//starting conditions

init();

//rolling dice functionality
btnRoll.addEventListener('click', function() {
    if(playing) {
        //1. Generating a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        //2. Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `images/dice-${dice}.png`;

        //3. check for rolled 1: if true, switch to next player
        if(dice !== 1) {
            //add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            //switch to next player
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function() {
    if(playing) {
        // 1. add current score to active player's score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        // 2. check if player's score is >=20
        if(scores[activePlayer] >= 20) {
            // finish game
            playing = false;
            diceEl.classList.add('hidden');
            if(scores[0] >= 20) {
                dice1++;
            } else {
                dice2++;
            }
            document.querySelector(`.player--${activePlayer}`).classList.add('player-winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player-active');
            dice_player1.textContent = dice1;
            dice_player2.textContent = dice2;
            dice_result.textContent = dice1 + dice2;
        } else {
            // switch to the next player
            switchPlayer();
        }
    }
        
});
//Reseting the Game
btnNew.addEventListener('click', init);

//  --------------------------------Dino--------------------------------
const dino = document.querySelector('.dino');
const cactus = document.querySelector('.cactus');
let track = document.querySelector('.track');
let count = document.querySelector('.count');
let score = document.querySelector('.scoreDino');
let highestValue = document.querySelector('.highest_value');
let gameOverRecord = document.querySelector('.gameOverRecord');

let record = 0;
let counter = 0;
let checker = 0;
let gameOver = 0;
let attempts = 0;
let attemptsForAlert = 0;
let lastRunScore = 0;
let dinoPlayer = document.querySelector('.Dino_attempt');
let dinoResult = document.querySelector('.Dino_result');

    dino.classList.remove('hiddenDinoGame');
    cactus.classList.remove('hiddenDinoGame');
    track.classList.remove('hiddenDinoGame');
    count.classList.remove('hiddenDinoGame');
    highestValue.classList.remove('hiddenDinoGame');

    function jump () {
        counter++;

        if(!gameOver) {
            document.querySelector('.scoreDino').textContent = `Score: ${counter}`;
        }
        if (dino.classList != 'jump' && !gameOver) {
            dino.classList.add('jump');
        }
        setTimeout( function() {
            dino.classList.remove('jump')
        }, 300);
    }
    

    document.addEventListener('keydown', function(e) {
        if(e.key === 'ArrowUp' || e.key === 'w') jump();
    });

    let isAlive = setInterval( function() {
        
        let left = setInterval(function(){
            if(!gameOver) document.querySelector('.dinoimg').src = 'images/dinoleft.png';
        },200);
        let right = setInterval(function(){
            if(!gameOver) document.querySelector('.dinoimg').src = 'images/dinoright.png';
        },200);

        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));//parseInt-გვაძლევს int-ს, getComputedStyle css-ის ყველა ელემენტს გვაძლევს,
        let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left")); //  getPropertyValue-მნიშვნელობა (საჭიროა if-ისთვის)

        //სტანდარტულად cactusLeft < 50
        if (cactusLeft < 90 && cactusLeft > 0 && dinoTop >= 140)  {//თამაშის გაგრძელება გინდა? კი არა და დავხუროთ თამაში, შემოვიტანოთ მთვლელიც
            cactus.style.left = '580px';
            cactus.style.animation='moving 0s 0 linear';
            gameOver = 1;
            alert('Game over');

            if(highestValue.textContent > counter) {
                if(highestValue.textContent > checker) {
                    checker = highestValue.textContent;
                } else {
                    checker = checker;
                }
            } 
            else {
                if(counter > checker) {
                    checker = counter;
                } else {
                    checker = checker;
                }
            }

            // console.log(checker);
            lastRunScore = counter;
            counter = 0;
            document.querySelector('.scoreDino').textContent = `Score: ${0}`;
            document.querySelector('.highest_value').textContent = `Record: ${checker}`;

            let resetTheGame = prompt("Would you like to play the game again?")
            resetTheGame=resetTheGame.toUpperCase();

            if(resetTheGame!='YES' && resetTheGame!='NO') {
                alert("That's a wrong answer, write 'yes' or 'no");
                while(1) {
                    resetTheGame = prompt('Would you like to play Dinogame?');
                    resetTheGame=resetTheGame.toUpperCase();
                    if(resetTheGame==='YES' || resetTheGame==='NO') break;
                }
            }//ვიგებთ პასუხს ხო ან არა 

            if(resetTheGame==='YES') {
                attempts++;
                attemptsForAlert++;
                gameOver = 0;
                cactus.style.animation = 'cactusMov 1s infinite linear';
            } 
            else {
                dinoPlayer.textContent = attempts ;
                let forResutlt = highestValue.textContent.replace('Record:','');
                dinoResult.textContent = forResutlt;
                alert(`attempts: ${attemptsForAlert + 1}`);
                attemptsForAlert = 0;    
                gameOver = 1;
                document.querySelector('.dinoimg').src = 'images/dinostay.png';
                score.textContent = `Score: ${lastRunScore}`;
                score.style.fontSize = '35px';
                score.style.transform = 'translate(0px,-10px)';
                gameOverRecord.classList.remove('hiddenDinoGame');
                gameOverRecord.style.transform = 'translate(0px,-35px)';
                gameOverRecord.textContent = highestValue.textContent;
                highestValue.classList.add('hiddenDinoGame');  
            }
        }
    }, 10);

// }

//  --------------------------------Tic Tac --------------------------------

const statusText = document.querySelector('.statusText');
const restartBtn = document.querySelector('.restartBtn');
let x = document.querySelector('.x');
let o = document.querySelector('.o');
let xWinner = 0, oWinner = 0;
const winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

let options = ['','','','','','','','',''];
let currentPlayer = 'X';
let allCubes = document.querySelectorAll('.cell');
let cell = [9];
let gameOverT = 0;
let TTTPlayer1 = document.querySelector('.TTT_player_1');
let TTTPlayer2 = document.querySelector('.TTT_player_2');
let TTTResult = document.querySelector('.TTT_result');

restartBtn.addEventListener('click',restartGame);

for(let i = 0; i < allCubes.length; i++) {
    cell[i] = document.querySelector(`.cell${i}`);
}
// for(let i = 0; i < 9; i++) {
//     console.log(cell[i]);
// }

for(let i = 0; i < 9; i++) {
    cell[i].addEventListener('click', function() {

        if(clicked(i) && !gameOverT) {
            cell[i].textContent = currentPlayer;
            saveOptions(i,currentPlayer);
            winner(options);
        }

    });
}

function saveOptions(index,symbol) {
    options[index] = symbol;
    changeOponent(symbol);
    console.log(options);
}

function clicked(i) { //Checking if array option is empty... if it is empty then draw X or O
    if(options[i]!='') {
        return 0;
    }
    return 1;
}

function changeOponent(symbol) {
    currentPlayer = symbol === 'X' ? 'O' : 'X';
    statusText.textContent = `${currentPlayer}'s turn`;
}

function winner() {
    for(let i = 0; i < winConditions.length; i++) {
        let layer = winConditions[i];
        let optionA = options[layer[0]];
        let optionB = options[layer[1]];
        let optionC = options[layer[2]];

        if(optionA === '' || optionB === '' || optionC === '') {
            continue;
        }
        if(optionA === optionB && optionA === optionC) {
            gameOverT = 1;
            break;
        }
    }

    if(gameOverT) {
        moveBack(currentPlayer);//ერთი სვლით უკან, რადგან თუ X-მა მოიგო არ დაწეროს "O wins!" და პირიქით
        statusText.textContent = `${currentPlayer} wins!`;
        if(currentPlayer === 'O') {oWinner++;}
        else {xWinner++;}
    } else if(!options.includes('')) {
        statusText.textContent = `draw!`;
    }
    // x.textContent = xWinner;
    // o.textContent = oWinner;
    TTTPlayer1.textContent = xWinner;
    TTTPlayer2.textContent = oWinner;
    TTTResult.textContent = xWinner + oWinner;
}

function moveBack() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function restartGame() {
    currentPlayer = 'X';
    options = ['','','','','','','','',''];
    gameOverT = 0;
    statusText.textContent = `X's turn`
    for(let i = 0; i < 9; i++) {
        cell[i].textContent = '';
    }
}