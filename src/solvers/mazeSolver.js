// mazeSolver.js
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function solveMaze(maze) {
    const exitCell = maze.find(cell => cell.getExit === true);
    let currentCell;


    setStartCell();
    currentCell = getCurrent();



    while(currentCell && !exitCell.getCurrentCell) {

        console.log('turn');
        await delay(1000);

        if (!currentCell.getWalls[0]) {
            changeCurrentCell(0);
        } else if (!currentCell.getWalls[1]) {
            changeCurrentCell(1);
        } else if (!currentCell.getWalls[2]) {
            changeCurrentCell(2);
        } else if (!currentCell.getWalls[3]) {
            changeCurrentCell(3);
        }
        currentCell = getCurrent();
    }





    // for (let i = 1; i < maze.length; i++) {
    //     maze[i-1].setCurrentCell = false;
    //     maze[i].setCurrentCell = true;
    //     maze[i].setVisited = true;
    //
    // }

    function changeCurrentCell(dir) {
        let oldCurrent = getCurrent();

        if (dir === 0) {
            currentCell = maze.find(cell => cell.getY === oldCurrent.getY-1);
        } else if (dir === 1) {
            currentCell = maze.find(cell => cell.getX === oldCurrent.getX+1);
        } else if (dir === 2) {
            currentCell = maze.find(cell => cell.getY === oldCurrent.getY+1);
        } else if (dir === 3) {
            currentCell = maze.find(cell => cell.getX === oldCurrent.getX-1);
        }

        currentCell.setVisited = true;
        oldCurrent.setCurrentCell = false;
        currentCell.setCurrentCell = true;
    }






    function getCurrent() {
        return maze.find(cell => cell.getCurrentCell === true);
    }


    function setStartCell() {
        const startCell = maze.find(cell => cell.getEntrance);
        startCell.setCurrentCell = true;
        startCell.setVisited = true;
    }


}


