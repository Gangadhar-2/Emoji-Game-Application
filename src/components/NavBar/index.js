import './index.css'

const NavBar = props => {
  const {score, topScore} = props

  return (
    <nav className="navbar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        alt="emoji logo"
        className="emoji-logo"
      />
      <h1 className="game-heading">Emoji Game</h1>
      <div className="score-container">
        <p className="para">Score: {score}</p>
        <p className="para">Top Score: {topScore} </p>
      </div>
    </nav>
  )
}
export default NavBar
