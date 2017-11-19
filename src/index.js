const parseBoard = board =>
  board
    .split('\n')
    .filter(word => word.length)
    .map(row => row.split(' ').map(num => +num))

export { parseBoard }
