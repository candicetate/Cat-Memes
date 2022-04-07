
import React, { useState, useEffect, useRef } from "react"

const CatMeme = () => {

  const [image, setImage] = useState(null)
  const canvas = useRef(null)
  const [topText, setTopText] = useState('')
  const [bottomText, setBottomText] = useState('')

  useEffect(() => {
    const catImage = new Image();
    catImage.src = "https://candicetate.com/images/Link_everyday.jpg"
    catImage.onload = () => setImage(catImage)
  }, [])

  useEffect(() => {
    if(image && canvas) {
      const ctx = canvas.current.getContext("2d")
      ctx.fillStyle = "black"
      ctx.fillRect(0, 0, 500, 500 + 80)
      ctx.drawImage(image, (500 - 500) / 2, 40)

      ctx.font = "20px Comic Sans MS"
      ctx.fillStyle = "white"
      ctx.textAlign = "center"

      ctx.fillText(topText, (500 / 2), 25)
      ctx.fillText(bottomText, (500 / 2), 450 + 40 + 25)

    }
  }, [image, canvas, topText, bottomText])

  return (
    <div>
      <h1>Sh🐱t My Cats Say</h1>

      <div>
        <canvas 
          ref={canvas}
          width={500}
          height={500 + 80}
        />
      </div>

      <div>
       <p>Top Text</p> <input type="text"
          value={topText}
          onChange={e => setTopText(e.target.value)}
        />
        <br />
        <p>Bottom Text</p> <input type="text"
          value={bottomText}
          onChange={e => setBottomText(e.target.value)}
        />
      </div>

    </div>
  )
}

export default CatMeme