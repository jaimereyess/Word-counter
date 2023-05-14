import React, { useState } from "react"
import Counter from "./counter.jsx"

const Form = () => {
  const [arrLength, setArrLength] = useState(0)
  const [formLength, setFormLength] = useState(0)

  function handleInputChange(e) {
    const text = e.target.value
    const arrOfText = text.split(" ")
    const newArrLength = arrOfText.length
    const newFormLength = text.length

    setArrLength(newArrLength)
    setFormLength(newFormLength)
  }

  return (
    <div className="container-fluid bg-warning">
      <div className="row">
        <div className="col-12">
          <form className="form-floating" method="post">
            <textarea
              className="textarea-box"
              name="text"
              placeholder="Insert text..."
              onChange={handleInputChange}
            />
            <br />
          </form>
        </div>
      </div>
      <Counter arrLength={arrLength} formLength={formLength} />
    </div>
  )
}

export default Form
