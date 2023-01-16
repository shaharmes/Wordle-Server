import { gameTileType } from "types/gameTileType";
import { pointerType } from "types/pointerType";

class WordleService {

    constructor() {
        
    }

    checkWin(currWord: string, word: string, pointer: pointerType) {
        console.log(currWord);
        console.log(word);
        console.log(pointer);
        if (currWord === word) {
          pointer.currentRow = pointer.currentRow + 1;
          pointer.currentCol = 5;
          return 'Win';
        }
    
        if (pointer.currentRow === 6) {
          return 'Lose';
        }

        return 'Continue';
    }
}

export { WordleService };