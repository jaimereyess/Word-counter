import React, { useState } from "react"
import Counter from "./counter.jsx"
import LetterFrequency from "./letters.jsx"
import WordsFrequency from "./words.jsx"


const Form = () => {
  const [words, setWords] = useState(0)
  const [characters, setCharacters] = useState(0)
  const [charactersNoSpace, setCharactersNoSpace] = useState(0)
  const [lastLetter, setActualLetter] = useState("")
  const [text, setText] = useState("")
  const [lineCounter, setLineCounter] = useState(0)

  function handleInputChange(e) {
    const text = e.target.value.trim()
    const wordCounter = text ? text.split(/\s+/g) : []
    const newWordCounter = wordCounter.length
    const charactersCounter = text.replace(/[\n\r]/g, "").length
    const charactersWithoutSpaces = text.replace(/\s+/g, "").length;
    const actualLetter = text.charAt(text.length - 1)
    const lineCounter = text.split(/\r\n|\r|\n/).length


    setText(text)
    setActualLetter(actualLetter)
    setWords(newWordCounter)
    setCharacters(charactersCounter)
    setCharactersNoSpace(charactersWithoutSpaces)
    setLineCounter(lineCounter)
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
            charactersWithoutSpaces={charactersNoSpace}
            lastLetter={lastLetter.toUpperCase()}
            lineCounter={lineCounter}
            className="text-center"
          />
          {LetterFrequency[lastLetter]}

        </div>
      </div>
      <div className="row mt-4">
        <div className="col-sm-4">
          <LetterFrequency text={text} />
        </div>
        <div className="col-sm-4">
          <WordsFrequency text={text} />
        </div>
      </div>
    </div>
  )
}

export default Form
