const Counter = ({ words, characters, specialChars }) => {
  return (
    <span className="values-output">
      <p>Number of words: {words}</p>
      <p>Number of characters: {characters}</p>
    </span>
  )
}

export default Counter
