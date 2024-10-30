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
        currentCell = getCurrent();

        await delay(1000);
        console.log('turn');
        changeCurrentCell();
    }



    function changeCurrentCell() {

        const oldCurrent = getCurrent();

        const pathNumber = getPathNumber();



        if (pathNumber === 1) {
            if (!currentCell.getWalls[0]) {
                goNorth(oldCurrent);
            } else if (!currentCell.getWalls[1]) {
                goEast(oldCurrent);
            } else if (!currentCell.getWalls[2]) {
                goSouth(oldCurrent);
            } else if (!currentCell.getWalls[3]) {
                goWest(oldCurrent);
            }
        } else if (pathNumber === 2) {
            if (currentCell.getY > 0 && !currentCell.getWalls[0] && !getNorthCell().getVisited) {
                goNorth(oldCurrent);
            } else if (currentCell.getX < maze.length/3-1 && !currentCell.getWalls[1] && !getEastCell().getVisited) {
                goEast(oldCurrent);
            } else if (currentCell.getY < maze.length/3-1 && !currentCell.getWalls[2] && !getSouthCell().getVisited) {
                goSouth(oldCurrent);
            } else if (currentCell.getX > 0 && !currentCell.getWalls[3] && !getWestCell().getVisited) {
                goWest(oldCurrent);
            }
        }



        currentCell.setVisited = true;

        oldCurrent.setCurrentCell = false;


        currentCell.setCurrentCell = true;
    }





    function getPathNumber() {
        let count = 0;
        for (let i = 0; i < currentCell.getWalls.length; i++) {
            if (!currentCell.getWalls[i]) {
                count++;
            }
        }
        return count;
    }


    function getNorthCell() {
        return maze.find(cell => cell.getY === currentCell.getY-1);
    }
    function getEastCell() {
        return maze.find(cell => cell.getX === currentCell.getX+1);
    }
    function getSouthCell() {
        return maze.find(cell => cell.getY === currentCell.getY+1);
    }
    function getWestCell() {
        return maze.find(cell => cell.getX === currentCell.getX-1);
    }



    function goNorth (oldCurrent) {
        console.log("north");
        currentCell = maze.find(cell => cell.getY === oldCurrent.getY-1);
    }
    function goEast (oldCurrent) {
        console.log("east");
        currentCell = maze.find(cell => cell.getX === oldCurrent.getX+1);
    }
    function goSouth (oldCurrent) {
        console.log("south");
        currentCell = maze.find(cell => cell.getY === oldCurrent.getY+1);
    }
    function goWest (oldCurrent) {
        console.log("west");
        currentCell = maze.find(cell => cell.getX === oldCurrent.getX-1);
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


