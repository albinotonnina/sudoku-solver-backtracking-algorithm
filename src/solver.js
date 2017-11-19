export const parseBoard = board =>
  board
    .split('\n')
    .filter(word => word.length)
    .map(row => row.split(' ').map(num => +num))

export const saveEmptyPositions = board =>
  board
    .map((row, rowIndex) =>
      row
        .map((value, valueIndex) => (value === 0 ? [rowIndex, valueIndex] : 0))
        .filter(value => value !== 0)
    )
    .reduce((a, b) => a.concat(b), [])

export const checkRow = (board, row, search) =>
  board[row].filter(value => value === search).length < 1
export const checkColumn = (board, column, search) =>
  board.filter((row, index) => row[[column]] === search).length < 1

export const check3x3Square = (board, column, row, search) => {
  // Save the upper left corner
  let columnCorner = 0,
    rowCorner = 0,
    squareSize = 3

  // Find the left-most column
  while (column >= columnCorner + squareSize) {
    columnCorner += squareSize
  }

  // Find the upper-most row
  while (row >= rowCorner + squareSize) {
    rowCorner += squareSize
  }

  // Iterate through each row
  for (let i = rowCorner; i < rowCorner + squareSize; i++) {
    // Iterate through each column
    for (let j = columnCorner; j < columnCorner + squareSize; j++) {
      // Return false is a match is found
      if (board[i][j] === search) {
        return false
      }
    }
  }
  // If no match was found, return true
  return true
}

export const checkValue = (board, column, row, search) =>
  checkRow(board, row, search) &&
  checkColumn(board, column, search) &&
  check3x3Square(board, column, row, search)

export const solvePuzzle = (board, emptyPositions) => {
  const limit = 9

  for (let i = 0; i < emptyPositions.length; ) {
    const row = emptyPositions[i][0]
    const column = emptyPositions[i][1]
    let value = board[row][column] + 1
    let found = false

    while (!found && value <= limit) {
      if (checkValue(board, column, row, value)) {
        found = true
        board[row][column] = value
        i++
      } else {
        value++
      }
    }

    // If no valid value was found and the limit was
    // reached, move back to the previous position
    if (!found) {
      board[row][column] = 0
      i--
    }
  }

  return board.map(row => row.join(' ')).join('\n')
}

export const solveSudoku = board => {
  const parsedBoard = parseBoard(board)
  const emptyPositions = saveEmptyPositions(parsedBoard)

  return solvePuzzle(parsedBoard, emptyPositions)
}
