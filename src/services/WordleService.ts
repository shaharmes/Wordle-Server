import { gameTileType } from "types/gameTileType";
import { pointerType } from "types/pointerType";
import { wordColoringType } from "types/wordColoringType";

class WordleService {
    word : string;
    constructor() {
      this.word = "LEMON";
    }

    checkWin(currWord: string, pointer: pointerType) {
      if (currWord === this.word) {
        pointer.currentRow = pointer.currentRow + 1;
        pointer.currentCol = 5;
        return "Win";
      }
  
      if (pointer.currentRow === 6) {
        return "Lose";
      }

      return "Continue";
    }

    setColors(wordColoring: wordColoringType, newBoardColor: gameTileType[][], row : number) {
      const realword = this.word;
      newBoardColor[row].forEach(function (tile:gameTileType, col:number): void {
        if (realword.indexOf(tile.letter)  === -1) {
          tile.state = "error";
          wordColoring.error.push(tile.letter);
        }
  
        if (realword.indexOf(tile.letter) === col) {
          tile.state = "correct";
          wordColoring.correct.push(tile.letter);
        }
  
        if (realword.indexOf(tile.letter) !== col && realword.indexOf(tile.letter) !== -1) {
          tile.state = "almost";
          wordColoring.almost.push(tile.letter);
        }
      });
      
      const data = {
        wordColoring: wordColoring,
        newBoardColor: newBoardColor
      };

      return data;
    }
}

export { WordleService };