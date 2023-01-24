const image1 = document.getElementById('img1');
const image2 = document.getElementById('img2');
const head1  = document.getElementById('heading1');
const butTo = document.getElementById('change');

butTo.addEventListener('click', randomness)

function randomness() { 

    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let leftImage = `dice${randomNumber1}.png`;

    image1.src = "./images/" + leftImage;




    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    let rightImage = `dice${randomNumber2}.png`;
    image2.src = `./images/${rightImage}`;


    if(randomNumber2 < randomNumber1){
        head1.innerHTML = '🚩 Player 1 Wins!';
    }else if(randomNumber2 > randomNumber1){
        head1.innerHTML = 'Player 2 Wins! 🚩';
    }else{
        head1.innerHTML = 'Draw 😮‍💨';
    }

}