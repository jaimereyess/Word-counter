import React, { useState } from "react"
import Counter from "./Counter.jsx"
import LetterFrequency from "./letters.jsx"

const Form = () => {
  const [words, setWords] = useState(0)
  const [characters, setCharacters] = useState(0)
  const [lastLetter, setActualLetter] = useState("")
  const [text, setText] = useState("")

  function handleInputChange(e) {
    const text = e.target.value.trim()
    const wordCounter = text ? text.split(/\s+/g) : []
    const newWordCounter = wordCounter.length
    const charactersCounter = text.length
    const actualLetter = text.charAt(text.length - 1)

    setText(text)
    setActualLetter(actualLetter)
    setWords(newWordCounter)
    setCharacters(charactersCounter)
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-8">
          <form method="post">
            <textarea
              className="form-control textarea-box"
              name="text"
              placeholder="Insert text..."
              onChange={handleInputChange}
            ></textarea>
          </form>
        </div>
        <div className="col-sm-4">
          <Counter
            words={words}
            characters={characters}
            lastLetter={lastLetter.toUpperCase()} 
            className="text-center"
          />
          {LetterFrequency[lastLetter]}
        </div>
      </div>
      <div className="row mt-4">
        <LetterFrequency text={text} />
      </div>
    </div>
  )
}

export default Form
