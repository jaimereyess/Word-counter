import React, { useState, useEffect } from "react"
import Counter from "./counter.jsx"
import LetterFrequency from "./letters.jsx"
import WordsFrequency from "./words.jsx"
import { exampleText } from "./textExample.jsx"

const randomText = Math.floor(Math.random() * 5)

const Form = () => {
  const [words, setWords] = useState(0)
  const [characters, setCharacters] = useState(0)
  const [charactersNoSpace, setCharactersNoSpace] = useState(0)
  const [lastLetter, setActualLetter] = useState("")
  const [text, setText] = useState("")
  const [lineCounter, setLineCounter] = useState(0)

  useEffect(() => {
    setText(exampleText[randomText])
    handleInputChange({ target: { value: exampleText[randomText] } })
  }, [])

  const handleInputChange = (e) => {
    const text = e.target.value
    const wordCounter = text ? text.split(/\s+/g) : []
    const newWordCounter = wordCounter.length
    const charactersCounter = text.replace(/[\n\r]/g, "").length
    const charactersWithoutSpaces = text.replace(/\s+/g, "").length
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
    <main>
      <div className="flex gap-10">
        <div className="basis-4/5 ">
          <form method="post">
            <textarea
              className="form-control h-72 resize-none"
              name="text"
              placeholder="Insert text..."
              onChange={handleInputChange}
            >
              {exampleText[randomText]}
            </textarea>
          </form>
        </div>

        <div className="basis-1/5 md:flex-cols basic-1/1">
          <Counter
            words={words}
            characters={characters}
            charactersWithoutSpaces={charactersNoSpace}
            lastLetter={lastLetter.toUpperCase()}
            lineCounter={lineCounter}
          />
          {LetterFrequency[lastLetter]}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-10">
        <div>
          <LetterFrequency text={text} />
        </div>
        <div>
          <WordsFrequency text={text} />
        </div>
      </div>
    </main>
  )
}

export default Form
