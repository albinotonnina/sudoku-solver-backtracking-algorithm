import * as solver from '../lib'

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

  describe('Parse Board', () => {
    it('should parse the board into a 2D array', () => {
      parsedBoard = solver.parseBoard(board)

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

  describe('Empty positions', () => {
    it('should save all of the empty positions, 0s, in a parsed board', () => {
      const emptyPositions = solver.saveEmptyPositions(parsedBoard)

      const expectedPositions = [
        [0, 0],
        [0, 2],
        [0, 3],
        [0, 4],
        [0, 5],
        [0, 6],
        [0, 7],
        [1, 0],
        [1, 1],
        [1, 2],
        [1, 5],
        [2, 0],
        [2, 1],
        [2, 2],
        [2, 6],
        [2, 7],
        [2, 8],
        [3, 0],
        [3, 1],
        [3, 3],
        [3, 4],
        [3, 5],
        [3, 6],
        [3, 7],
        [3, 8],
        [4, 4],
        [4, 5],
        [4, 7],
        [4, 8],
        [5, 1],
        [5, 3],
        [5, 4],
        [5, 5],
        [5, 8],
        [6, 1],
        [6, 2],
        [6, 4],
        [6, 6],
        [6, 8],
        [7, 1],
        [7, 3],
        [7, 4],
        [7, 5],
        [7, 8],
        [8, 1],
        [8, 2],
        [8, 3],
        [8, 5],
        [8, 6],
        [8, 7],
        [8, 8]
      ]

      expect(emptyPositions).toHaveLength(51)
      expect(emptyPositions).toEqual(expectedPositions)
    })
  })

  describe('Check row for value', () => {
    it('should check that each value in the row does not equal the input', () => {
      // Match not found. Return true;
      expect(solver.checkRow(parsedBoard, 0, 2)).toBeTruthy()
      // Match found. Return false;
      expect(solver.checkRow(parsedBoard, 0, 9)).toBeFalsy()
    })
  })

  describe('Check column for value', () => {
    it('should check that each value in a column does not equal the input', () => {
      // No match. Return true
      expect(solver.checkColumn(parsedBoard, 0, 9)).toBeTruthy()
      // Match found. Return false
      expect(solver.checkColumn(parsedBoard, 0, 5)).toBeFalsy()
    })
  })

  describe('Check the 3x3 square for value', () => {
    it('should check that each value in a 3x3 square does not match the input', () => {
      // No match. Return true
      expect(solver.check3x3Square(parsedBoard, 2, 2, 1)).toBeTruthy()
      expect(solver.check3x3Square(parsedBoard, 7, 7, 9)).toBeTruthy()
      // Match found. Return false
      expect(solver.check3x3Square(parsedBoard, 2, 2, 9)).toBeFalsy()
      expect(solver.check3x3Square(parsedBoard, 7, 7, 1)).toBeFalsy()
    })
  })

  describe('Check value', ()=> {
    it('should check whether a value is valid for a particular position', () => {
      // No match. Return true
      expect(solver.checkValue(parsedBoard, 0, 0, 2)).toBeTruthy()
      expect(solver.checkValue(parsedBoard, 3, 7, 3)).toBeTruthy()
      // Match found. Return false
      expect(solver.checkValue(parsedBoard, 0, 0, 9)).toBeFalsy()
      expect(solver.checkValue(parsedBoard, 3, 7, 1)).toBeFalsy()
    })
  })
})
