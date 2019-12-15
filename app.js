let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('Rock');
const paper_div = document.getElementById('Paper');
const scissors_div = document.getElementById('Scissors');

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_div.innerHTML =
    userChoice + ' beats ' + computerChoice + '. You Win !!';
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(
    () => document.getElementById(userChoice).classList.remove('green-glow'),
    500
  );
}

function lose(userChoice, computerChoice) {
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_div.innerHTML =
    computerChoice + ' beats ' + userChoice + '. You loose....';
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(
    () => document.getElementById(userChoice).classList.remove('red-glow'),
    500
  );
}

function draw(userChoice, computerChoice) {
  result_div.innerHTML =
    userChoice + ' equals ' + computerChoice + ". It's a draw";
  document.getElementById(userChoice).classList.add('gray-glow');
  setTimeout(
    () => document.getElementById(userChoice).classList.remove('gray-glow'),
    500
  );
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  console.log('user choice ==>  ' + userChoice);
  console.log('computer choice ==>  ' + computerChoice);

  switch (userChoice + computerChoice) {
    case 'RockScissors':
    case 'PaperRock':
    case 'ScissorsPaper':
      console.log('USER WINS §');
      win(userChoice, computerChoice);
      break;

    case 'RockPaper':
    case 'PaperScissors':
    case 'ScissorsRock':
      console.log('USER LOSES ...');
      lose(userChoice, computerChoice);
      break;

    case 'RockRock':
    case 'ScissorsScissors':
    case 'PaperPaper':
      console.log("It's a draw !");
      draw(userChoice, computerChoice);
      break;
  }
}

//game('c');

function main() {
  rock_div.addEventListener('click', () => game('Rock'));

  paper_div.addEventListener('click', () => game('Paper'));

  scissors_div.addEventListener('click', () => game('Scissors'));
}

main();
