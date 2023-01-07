import "./styles.css"

const root = document.getElementById("root")

const board = document.createElement("div")
board.setAttribute("id", "board")

const squares = [
]

for (let row = 0; row < 10; row++) {
  for (let col = 0; col < 10; col++) {
    const sqr = document.createElement("div")
    sqr.setAttribute("class", "square")

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
      squares.push(sqr)
      if ((col + row) % 2 === 0) {
        sqr.classList += " white"
      } else {
        sqr.classList += " black"
      }
    }

    board.appendChild(sqr)
  }
}

root.appendChild(board)
