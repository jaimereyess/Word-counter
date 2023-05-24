const Counter = ({ words, characters, lastLetter }) => {
  return (
    <span className="values-output">
      <p>Number of words: {words}</p>
      <p>Number of characters: {characters}</p>
      <p>Last character: {lastLetter} </p>
    </span>
  )
}

export default Counter
