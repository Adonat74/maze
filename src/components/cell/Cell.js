export default class CellClass {
    constructor(x, y, walls, entrance = false, exit = false) {
        this._x = x;
        this._y = y;
        this._walls = walls; // Array representing walls [top, right, bottom, left]
        this._entrance = entrance;
        this._exit = exit;
        this._visited = false;
        this._currentCell = false;
    }

    // Getter and Setter for x
    get getX() {
        return this._x;
    }
    set setX(value) {
        this._x = value;
    }

    // Getter and Setter for y
    get getY() {
        return this._y;
    }
    set setY(value) {
        this._y = value;
    }

    // Getter and Setter for walls
    get getWalls() {
        return this._walls;
    }
    set setWalls(value) {
        this._walls = value;
    }

    // Getter and Setter for entrance
    get getEntrance() {
        return this._entrance;
    }
    set setEntrance(value) {
        this._entrance = value;
    }

    // Getter and Setter for exit
    get getExit() {
        return this._exit;
    }
    set setExit(value) {
        this._exit = value;
    }

    // Getter and Setter for visited
    get getVisited() {
        return this._visited;
    }
    set setVisited(value) {
        this._visited = value;
    }

    // Getter and Setter for currentCell
    get getCurrentCell() {
        return this._currentCell;
    }
    set setCurrentCell(value) {
        this._currentCell = value;
    }
}
