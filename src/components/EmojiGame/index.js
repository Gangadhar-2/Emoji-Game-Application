/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import EmojiCard from '../EmojiCard'
import './index.css'

class EmojiGame extends Component {
  state = {
    clickedEmojis: [],
    score: 0,
    topScore: 0,
    gameOver: false,
    win: false,
  }

  onClickEmoji = id => {
  const {clickedEmojis, score, topScore} = this.state
  const {emojisList} = this.props

  if (clickedEmojis.includes(id)) {
    // Emoji clicked again: lose the game
    this.setState({
      gameOver: true,
      win: false,
      topScore: score > topScore ? score : topScore, // Update top score if current score is higher
    })
  } else {
    const newClickedEmojis = [...clickedEmojis, id]
    const newScore = score + 1

    if (newClickedEmojis.length === emojisList.length) {
      // All emojis clicked once: win the game
      this.setState({
        clickedEmojis: newClickedEmojis,
        score: newScore,
        topScore: newScore > topScore ? newScore : topScore, // Update top score if current score is higher
        gameOver: true,
        win: true,
      })
    } else {
      // Continue the game
      this.setState({
        clickedEmojis: newClickedEmojis,
        score: newScore,
        // topScore remains the same during the game
      })
    }
  }
}

  // Restart the game
  restartGame = () => {
    this.setState({
      clickedEmojis: [],
      score: 0,
      gameOver: false,
      win: false,
    })
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {score, topScore, gameOver, win} = this.state
    const shuffledEmojis = this.shuffledEmojisList()

    return (
      <div className="bg">
        <NavBar score={score} topScore={topScore} />
        {gameOver ? (
          <WinOrLoseCard
            score={score}
            win={win}
            onClickPlayAgain={this.restartGame}
          />
        ) : (
          <ul className="emojis-container">
            {shuffledEmojis.map(eachEmoji => (
              <EmojiCard
                key={eachEmoji.id}
                emojiDetails={eachEmoji}
                onClickEmoji={this.onClickEmoji}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default EmojiGame
