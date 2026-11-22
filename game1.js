console.log('Successfully Entered the game.......');
const restartBtns = document.querySelectorAll('.btn');
const nwin = document.querySelector('.nwin');
const nloss = document.querySelector('.nloss');
const ndraw = document.querySelector('.ndraw');
const close = document.querySelector('.close');
const winWindow = document.querySelector('.win-window');
const [playerStatus, roundStatus] = document.querySelector('.game-status').children;
const layout = window.matchMedia('(max-width: 990px)');
const gameBtn = document.querySelector('.button-container');

layout.addEventListener('change', () => {
    restartBtns.forEach((btn) => {
        btn.remove();
        document.querySelector('.small-text').before(btn);
    })
});

function clearGame() {

    // resetting the game play buttons.
    gameBtn.children.forEach((btn) => {
        btn.disabled = false;
        btn.classList.remove('animation', 'zero-color', 'cross-color');
        btn.innerText = '';
    });

    res = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];

    filled = inp = 0;
}

let res = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];

let inp = 0;

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

let filled = 0;
let wins = 0;
let loss = 0;
let draws = 0;
let round = 1;

restartBtns[0].addEventListener('click', () => {
    clearGame();
    roundStatus.innerText = `Round ${++round}`;
});

restartBtns[1].addEventListener('click', () => {
    clearGame()
    nloss.innerText = ndraw.innerText = nwin.innerText = 0;
    roundStatus.innerText = 'Round 1';
});

close.addEventListener('click', () => {
    winWindow.classList.remove('visible');
});

function btnAction(btn, index) {
    btn.disabled = true;
    ++filled;
    btn.classList.add("animation");
    const i = Math.floor(index / 3);
    const j = index - i * 3;
    if (inp == 0) {
        res[i][j] = 'O';
        btn.innerText = 'O';
        btn.classList.add("zero-color");

        playerStatus.querySelectorAll('span')[0].innerText = 'X';
        playerStatus.querySelectorAll('span')[1].innerText = 'Your turn, Player 2';
        playerStatus.querySelector('span').classList.remove('zero-color', 'cross-color');
    }
    else {
        res[i][j] = 'X';
        btn.innerText = 'X';
        btn.classList.add("cross-color");

        playerStatus.querySelectorAll('span')[0].innerText = 'O';
        playerStatus.querySelectorAll('span')[1].innerText = 'Your turn, Player 1';
        playerStatus.querySelector('span').classList.remove('cross-color', 'zero-color');
    }
    inp ^= 1;
}

gameBtn.addEventListener('click', (event) => {
    const btn = event.target;
    if(btn.tagName != 'BUTTON') return;

    if (btn.innerText !== '') return;
    btnAction(btn, parseInt(btn.getAttribute('id')));
    winAction();
});

function result() {
    for(let pat of winPattern) {
        const i0 = Math.floor(pat[0] / 3);
        const i1 = Math.floor(pat[1] / 3);
        const i2 = Math.floor(pat[2] / 3);
        const j0 = pat[0] - i0 * 3;
        const j1 = pat[1] - i1 * 3;
        const j2 = pat[2] - i2 * 3; 
    
        if((res[i0][j0] == 'O') && (res[i1][j1] == 'O') && (res[i2][j2] == 'O')) {
            return 'O';
        }

        else if((res[i0][j0] == 'X') && (res[i1][j1] == 'X') && (res[i2][j2] == 'X')) {
            return 'X';
        }
    }

    return filled === 9 ? 'draw' : null;
}

function winAction() {
    let r = result();
    if (!r) return null;

    if (r == 'draw') {
        ndraw.innerText = `${++draws}`;
    }

    else {
        for(let btn of gameBtn.children) btn.disabled = true;
        winWindow.classList.add('visible');
        if (r == 'O') {
            nwin.innerText = `${++wins}`;
            document.querySelector('.winner-player').innerText = 'Player 1 Win';
        }
        else {
            nloss.innerText = `${++loss}`;
            document.querySelector('.winner-player').innerText = 'Player 2 Win'
        }   
    }
}