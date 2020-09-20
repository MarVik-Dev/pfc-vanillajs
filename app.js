
const startGameBtn = document.getElementById('start-game-btn')

const PIERRE = 'PIERRE'
const PAPIER = 'PAPIER'
const CISEAUX = 'CISEAUX'
const DEFAULT_USER_CHOICE = PIERRE
const RESULT_DRAW = 'EGALITÉ'
const RESULT_PLAYER_WINS = 'LE JOUEUR GAGNE'
const RESULT_COMPUTER_WINS = 'L\'ORDINATEUR GAGNE'

let gameIsRunning = false

const getPlayerChoice = () => {
  const selection = prompt(`${PIERRE}, ${PAPIER} ou ${CISEAUX} ?`, '').toUpperCase()
  if (
    selection !== PIERRE &&
    selection !== PAPIER &&
    selection !== CISEAUX
  ) {
    alert(`Choix invalide ! On a choisi la ${DEFAULT_USER_CHOICE} pour vous ;)`)
    return
  }
  return selection
}

const getComputerChoice = () => {
  const randomValue = Math.random()
  if (randomValue < 0.34) {
    return PIERRE
  } else if (randomValue < 0.67) {
    return PAPIER
  } else {
    return CISEAUX
  }
}

const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => {
  /* if (cChoice === pChoice) {
    return RESULT_DRAW
  } else if (
    cChoice === PIERRE && pChoice === PAPIER ||
    cChoice === PAPIER && pChoice === CISEAUX ||
    cChoice === CISEAUX && pChoice === PIERRE
  ) {
    return RESULT_PLAYER_WINS
  } else {
    return RESULT_COMPUTER_WINS
  }
 */
  return cChoice === pChoice ? RESULT_DRAW
    : (cChoice === PIERRE && pChoice === PAPIER ||
      cChoice === PAPIER && pChoice === CISEAUX ||
      cChoice === CISEAUX && pChoice === PIERRE)
      ? RESULT_PLAYER_WINS : RESULT_COMPUTER_WINS
}

startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return
  }
  gameIsRunning = true
  console.log('Le jeu commence ...')
  const playerChoice = getPlayerChoice()
  console.log('Le joueur à choisi : ', playerChoice)
  const computerChoice = getComputerChoice()
  console.log('L\'ordinateur à choisi : ', computerChoice)
  let winner
  if (playerChoice) {
    winner = getWinner(computerChoice, playerChoice)
  } else {
    winner = getWinner(computerChoice)
  }
  let message = `Vous avez choisi ${playerChoice || DEFAULT_USER_CHOICE}, l'ordinateur a choisi ${computerChoice}. `
  if (winner === RESULT_DRAW) {
    message += ' Vous êtes à égalité. '
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + 'L\'ordinateur a perdu.'
  } else {
    message = message + 'L\'ordinateur a gagné.'
  }
  alert(message)
  console.log(winner)
  gameIsRunning = false
})
