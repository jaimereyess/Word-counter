import React, { useState } from "react"
import Counter from "./counter.jsx"

const Form = () => {
  const [words, setWords] = useState(0)
  const [characters, setCharacters] = useState(0)

  function handleInputChange(e) {
    const text = e.target.value.trim()
    const wordCounter = text ? text.split(/\W+/g) : []
    const newWordCounter = wordCounter.length
    const charactersCounter = text.length

    setWords(newWordCounter)
    setCharacters(charactersCounter)
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <form className="form-floating" method="post">
            <textarea
              className=" textarea-box"
              name="text"
              placeholder="Insert text..."
              onChange={handleInputChange}
            ></textarea>
            <br />
          </form>
        </div>
      </div>
      <Counter words={words} characters={characters} className="text-center" />
    </div>
  )
}

export default Form
