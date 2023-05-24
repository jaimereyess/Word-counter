import { useState } from "react"
import Counter from "./counter.jsx"

const Form = () => {
  const [words, setWords] = useState(0)
  const [characters, setCharacters] = useState(0)

  function handleInputChange(e) {
    const text = e.target.value.trim()
    const wordCounter = text ? text.split(/\s+/g) : []
    console.log(wordCounter)
    const newWordCounter = wordCounter.length
    const charactersCounter = text.length
    console.log(charactersCounter)

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
            className="text-center"
          />
        </div>
      </div>
    </div>
  )
}

export default Form
