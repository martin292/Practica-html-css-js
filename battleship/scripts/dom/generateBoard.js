class BoardGenerator {
    createBoard(board) {
        let cells = [];
        for (let y = 9; y > -1; y--) {
            for (let x = 0; x < 10; x++) {
                const div = document.createElement('div');
                cells.push({cel:div, coord:{x:x, y:y}});
                board.appendChild(div);
            }
        }
        return cells;
    }
}

export default BoardGenerator;