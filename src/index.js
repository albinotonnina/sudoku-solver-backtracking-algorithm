export const parseBoard = board =>
  board
    .split('\n')
    .filter(word => word.length)
    .map(row => row.split(' ').map(num => +num))

export const saveEmptyPositions = board => {
  return board
    .map((row, rowIndex) =>
      row
        .map((value, valueIndex) => (value === 0 ? [rowIndex, valueIndex] : 0))
        .filter(value => value !== 0)
    )
    .reduce((a, b) => a.concat(b), [])
}

export const checkRow = (board, row, search) => {
  return board[row].filter(value => value === search).length < 1
}

export const checkColumn = (board, column, search) => {
  return board.filter((row, index) => row[[column]] === search).length < 1
}
