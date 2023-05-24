// eslint-disable-next-line react/prop-types
const Counter = ({ words, characters }) => {
  return (
    <span className="values-output">
      <p>Number of words: {words}</p>
      <p>Number of characters: {characters}</p>
    </span>
  )
}

export default Counter
