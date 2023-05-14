const Counter = ({ arrLength, formLength }) => {
    return (
      <span className="values-output">
        <p>Number of words: {arrLength}</p>
        <p>Number of characters: {formLength}</p>
      </span>
    )
  }
  
  export default Counter
  