// mazeSolver.js
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export async function solveMaze(maze) {
    const exitCell = maze.find(cell => cell.getExit === true);


    setStartCell();




    while(!exitCell.getCurrentCell) {


        await delay(1000);
    }

    console.log(exitCell)
    console.log(maze.find(cell => cell.getEntrance))
    console.log(getCurrentCell())




    // for (let i = 1; i < maze.length; i++) {
    //     maze[i-1].setCurrentCell = false;
    //     maze[i].setCurrentCell = true;
    //     maze[i].setVisited = true;
    //
    // }

    function setStartCell() {
        maze.find(cell => cell.getEntrance).setCurrentCell = true;
        maze.find(cell => cell.getEntrance).setVisited = true;
    }

    function getCurrentCell() {
        return maze.find(cell => cell.getCurrentCell === true);
    }




}


