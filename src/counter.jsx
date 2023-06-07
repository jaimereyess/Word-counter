const Counter = ({ words, characters, lastLetter, charactersWithoutSpaces, lineCounter }) => {
  return (
    <span className="values-output">
      <p>Number of words: {words}</p>
      <p>Number of characters: {characters}</p>
      <p>Number of characters without spaces: {charactersWithoutSpaces}</p>
      <p>Number of lines: {lineCounter}</p>
      <p>Last character: {lastLetter} </p>
    </span>
  )
}

export default Counter
