import "./styles.css"

const root = document.getElementById("root")

const board = document.createElement("div")
board.setAttribute("id", "board")

const squares = {}

for (let row = 0; row < 10; row++) {
  for (let col = 0; col < 10; col++) {
    const sqr = document.createElement("div")

    if (row === 0 || row === 9 || col === 0 || col === 9) {
      sqr.classList += " border"
    }

    if (row === 0 || row === 9) {
      switch (col) {
        case 0: case 9:
          break
        default:
          sqr.innerText = "xabcdefgh"[col]
          sqr.classList += " letters"
      }
    }

    if (col === 0 || col === 9) {
      switch (row) {
        case 0: case 9:
          break
        default:
          sqr.innerText = 9 - row
          sqr.classList += " numbers"
      }
    }

    if (col !== 0 && col !== 9 && row !== 0 && row !== 9) {
      sqr.setAttribute("class", "square")
      // hidden squares will be highlighted to show possible movements
      const text = document.createElement("div")
      text.setAttribute("class", "text")
      sqr.appendChild(text)
      const hidden = document.createElement("div")
      hidden.setAttribute("class", "hidden")
      sqr.appendChild(hidden)

      squares[" abcdefgh"[col] + (9 - row)] = text

      if ((col + row) % 2 === 0) {
        sqr.classList += " white"
      } else {
        sqr.classList += " black"
      }
    }

    board.appendChild(sqr)
  }
}

squares["a1"].innerText = "R"
squares["b1"].innerText = "N"
squares["c1"].innerText = "B"
squares["d1"].innerText = "Q"
squares["e1"].innerText = "K"
squares["f1"].innerText = "B"
squares["g1"].innerText = "N"
squares["h1"].innerText = "R"
squares["a2"].innerText = "P"
squares["b2"].innerText = "P"
squares["c2"].innerText = "P"
squares["d2"].innerText = "P"
squares["e2"].innerText = "P"
squares["f2"].innerText = "P"
squares["g2"].innerText = "P"
squares["h2"].innerText = "P"

squares["a8"].innerText = "R"
squares["b8"].innerText = "N"
squares["c8"].innerText = "B"
squares["d8"].innerText = "Q"
squares["e8"].innerText = "K"
squares["f8"].innerText = "B"
squares["g8"].innerText = "N"
squares["h8"].innerText = "R"
squares["a7"].innerText = "P"
squares["b7"].innerText = "P"
squares["c7"].innerText = "P"
squares["d7"].innerText = "P"
squares["e7"].innerText = "P"
squares["f7"].innerText = "P"
squares["g7"].innerText = "P"
squares["h7"].innerText = "P"

root.appendChild(board)
