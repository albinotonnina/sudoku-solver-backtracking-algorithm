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
