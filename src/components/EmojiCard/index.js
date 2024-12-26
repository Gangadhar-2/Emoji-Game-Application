import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {id, emojiUrl, emojiName} = emojiDetails

  const handleClick = () => {
    onClickEmoji(id)
  }

  return (
    <li className="list-container">
      <button className="emoji-btn" onClick={handleClick} type="button">
        <img src={emojiUrl} className="emoji-img" alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
