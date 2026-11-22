console.log('Game uploaded successfully.....')

let choices = document.querySelectorAll('.choice-btn');
const resetBtn = document.querySelector('.reset-btn');
const nextRound = document.querySelector('.next-btn');
const scoreCount = document.querySelectorAll('.count');
const displayResult = document.querySelector('.display-result');
const display = document.querySelector('.display');

const option = ['Rock', 'Paper', 'Scissior'];
let user = null;
let computer = null
let uwin = 0;
let computerwin = 0;

choices.forEach((btn) => {
    btn.addEventListener('click', () => btnAction(btn));
});

function btnAction(btn) {
    user = btn.innerText;
    btn.classList.add('selected');
    let temp = btn.querySelector('img').getAttribute('src').replace('.png', '');
    temp += '-recolored.png';
    btn.querySelector('img').setAttribute('src', temp);
    choices.forEach((btn) => btn.disabled = true);   
    play()
    display.innerHTML = ` <div class="choice">
            <img class = "big-image user" src="${temp.replace('-recolored', '')}">
            <p class = "small-text">YOUR PICK</p>
            <p>${user}</p>
    </div> 
    <p class = "small-text">V/S</p>
    <div class="choice">
            <img class = "big-image computer" src="/images/${computer + '.png'}">
            <p class = "small-text">COMPUTER PICK</p>
            <p>${computer}</p>
    </div> `
}

resetBtn.addEventListener('click', () => {
    displayResult.innerText = display.innerHTML = '';
    choices.forEach((btn) => {
        btn.disabled = false;
        btn.classList.remove('selected');
        btn.querySelector('img').setAttribute('src', btn.querySelector('img').getAttribute('src').replace('-recolored', ''));
    }); 
    uwin = computerwin = 0;
    user = computer = null;
    scoreCount[1].innerText = scoreCount[0].innerText = '00';   
});

nextRound.addEventListener('click', ()=> {
    displayResult.innerText = display.innerHTML = '';
    choices.forEach((btn) => {
        btn.disabled = false;
        btn.classList.remove('selected');
        btn.querySelector('img').setAttribute('src', btn.querySelector('img').getAttribute('src').replace('-recolored', ''));
    });   
});

function play() {
    computer = option[Math.floor(Math.random() * option.length)];
    const r = checkWinner(computer)
    if (r == 'toe') {
        displayResult.innerText = 'Match tied.';
    }
    else if(r == 'computer') {
        displayResult.innerText = 'You are defeated.';
        scoreCount[1].innerText = '0' + `${++computerwin}`;
    }
    else {
        displayResult.innerText = 'You crushed it.';   
        scoreCount[0].innerText = '0' + `${++uwin}`; 
    }
}

function checkWinner(computerChoice) {
    if (user === computerChoice) {
        return 'tie';
    }
    
    if (
        (user === 'Rock' && computerChoice === 'Paper') ||
        (user === 'Paper' && computerChoice === 'Scissior') ||
        (user === 'Scissior' && computerChoice === 'Rock') 
    ) {
        return 'computer';
    }

    return 'user';
}


