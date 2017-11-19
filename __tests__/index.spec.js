import { parseBoard } from '../lib'

describe('Sudoku Solver', () => {
  const board = `
0 9 0 0 0 0 0 0 6
0 0 0 9 6 0 4 8 5
0 0 0 5 8 1 0 0 0
0 0 4 0 0 0 0 0 0
5 1 7 2 0 0 9 0 0
6 0 2 0 0 0 3 7 0
1 0 0 8 0 4 0 2 0
7 0 6 0 0 0 8 1 0
3 0 0 0 9 0 0 0 0
`

  let parsedBoard

  describe('ParseBoard', () => {
    it('should parse the board into a 2D array', () => {
      parsedBoard = parseBoard(board)

      const expectedBoard = [
        [0, 9, 0, 0, 0, 0, 0, 0, 6],
        [0, 0, 0, 9, 6, 0, 4, 8, 5],
        [0, 0, 0, 5, 8, 1, 0, 0, 0],
        [0, 0, 4, 0, 0, 0, 0, 0, 0],
        [5, 1, 7, 2, 0, 0, 9, 0, 0],
        [6, 0, 2, 0, 0, 0, 3, 7, 0],
        [1, 0, 0, 8, 0, 4, 0, 2, 0],
        [7, 0, 6, 0, 0, 0, 8, 1, 0],
        [3, 0, 0, 0, 9, 0, 0, 0, 0]
      ]

      expect(parsedBoard).toHaveLength(9)
      expect(parsedBoard[0]).toHaveLength(9)
      expect(parsedBoard).toEqual(expectedBoard)
    })
  })
})
