let maze = document.querySelector(".maze");
let ctx = maze.getContext("2d");
let generationComplete = false;

let current;

let goal;
class Maze {
  constructor(size, rows, columns) {
    this.size = size;
    this.rows = rows;
    this.columns = columns;

    this.grid = [];
    this.stack = [];
  }

  setup() {
    for (let rows = 0; rows < this.rows; rows++) {
      let row = [];
      for (let cols = 0; cols < this.columns; cols++) {
        let cell = new Cell(rows, cols, this.grid, this.size);
        row.push(cell);
      }
      this.grid.push(row);
    }
    current = this.grid[0][0];
    current.visited = true;
    this.grid[this.rows - 1][this.columns - 1].goal = true;
  }

  draw() {
    maze.width = this.size;
    maze.height = this.size;
    maze.style.background = "black";

    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.columns; c++) {
        let grid = this.grid;
        grid[r][c].show(this.size / this.rows, this.size / this.columns);
      }
    }

    let next = current.checkNeighbours();

    if (next) {
      console.log(generationComplete);
      next.visited = true;

      this.stack.push(current);
      current.highlight(this.columns);
      current.removeWall(current, next);

      current = next;
    } else if (this.stack.length > 0) {
      let cell = this.stack.pop();
      current = cell;

      current.highlight(this.columns);
    }

    if (this.stack.length == 0) {
      generationComplete = true;
      return;
    }

    window.requestAnimationFrame(() => this.draw());
  }
}

class Cell {
  //Parentgrid and parent size comes from the Maze Class
  constructor(rowNum, colNum, parentGrid, parentSize) {
    this.rowNum = rowNum;
    this.colNum = colNum;
    this.parentGrid = parentGrid;
    this.parentSize = parentSize;

    this.visited = false;
    this.walls = {
      topWall: true,
      rightWall: true,
      bottomWall: true,
      leftWall: true,
    };
    this.goal = false;
  }

  checkNeighbours() {
    let grid = this.parentGrid;
    let row = this.rowNum;
    let col = this.colNum;
    let neighbours = [];

    let topNeighbour = row !== 0 ? grid[row - 1][col] : undefined;
    let rightNeighbour =
      col !== grid.length - 1 ? grid[row][col + 1] : undefined;
    let leftNeighbour = row !== 0 ? grid[row][col - 1] : undefined;
    let bottomNeighbour =
      row !== grid.length - 1 ? grid[row + 1][col] : undefined;

    if (topNeighbour && !topNeighbour.visited) neighbours.push(topNeighbour);
    if (rightNeighbour && !rightNeighbour.visited)
      neighbours.push(rightNeighbour);
    if (bottomNeighbour && !bottomNeighbour.visited)
      neighbours.push(bottomNeighbour);
    if (leftNeighbour && !leftNeighbour.visited) neighbours.push(leftNeighbour);

    if (neighbours.length !== 0) {
      let random = Math.floor(Math.random() * neighbours.length);
      return neighbours[random];
    } else {
      return undefined;
    }
  }
  //Walls
  drawTopWall(x, y, size) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + size, y);
    ctx.stroke();
  }

  drawRightWall(x, y, sizeRow, sizeCol) {
    ctx.beginPath();
    ctx.moveTo(x + sizeCol, y);
    ctx.lineTo(x + sizeCol, y + sizeRow);
    ctx.stroke();
  }

  drawBottomWall(x, y, sizeRow, sizeCol) {
    ctx.beginPath();
    ctx.moveTo(x, y + sizeRow);
    ctx.lineTo(x + sizeCol, y + sizeRow);
    ctx.stroke();
  }

  drawLeftWall(x, y, size) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + size);
    ctx.stroke();
  }

  highlight(columns) {
    let x = (this.colNum * this.parentSize) / columns + 1;
    let y = (this.rowNum * this.parentSize) / columns + 1;

    ctx.fillStyle = "purple";
    ctx.fillRect(
      x,
      y,
      this.parentSize / columns - 3,
      this.parentSize / columns - 3
    );
  }

  removeWall(cell1, cell2) {
    let x = cell1.colNum - cell2.colNum;

    if (x == 1) {
      cell1.walls.leftWall = false;
      cell2.walls.rightWall = false;
    } else if (x == -1) {
      cell1.walls.rightWall = false;
      cell2.walls.leftWall = false;
    }

    let y = cell1.rowNum - cell2.rowNum;
    if (y == 1) {
      cell1.walls.topWall = false;
      cell2.walls.bottomWall = false;
    } else if (y == -1) {
      cell1.walls.bottomWall = false;
      cell2.walls.topWall = false;
    }
  }
  show(size, rows, columns) {
    let x = this.colNum * size;
    let y = this.rowNum * size;

    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;

    if (this.walls.topWall) this.drawTopWall(x, y, size, columns, rows);
    if (this.walls.rightWall) this.drawRightWall(x, y, size, columns, rows);
    if (this.walls.bottomWall) this.drawBottomWall(x, y, size, columns, rows);
    if (this.walls.leftWall) this.drawLeftWall(x, y, size, columns, rows);

    ctx.fillStyle = "black";
    if (this.visited) {
      ctx.fillRect(x + 1, y + 1, size - 2, size - 2);
    }
    if (this.goal) {
      ctx.fillStyle = "rgb(83, 247, 43)";
      ctx.fillRect(x + 1, y + 1, size / columns - 2, size / rows - 2);
    }
  }
}
