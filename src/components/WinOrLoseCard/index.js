// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, onClickPlayAgain, win} = props
  const heading = win ? 'You Won' : 'You Lose'
  const yourScore = win ? 'Best Score' : 'Score'
  const img = win
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  return (
    <div className="win-or-lose-card">
      <div className="score-container">
        <h1 className="heading">{heading}</h1>
        <p className="heading">{yourScore}</p>
        <p className="score">{score}/12</p>
        <button
          type="button"
          className="play-again-btn"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <div>
        <img src={img} className="win-img" alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
