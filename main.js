const canvasHeight = 400;
const canvasWidth = 720;

const mazeWall = {
    name: "wall",
    color: 0,
    value: -1,
    height: 10,
};

const mazePrize = {
    name: "prize",
    color: "255, 171, 25",
    value: "prize",
    height: 10,
};

const startPoint = {
    name: "start",
    color: 255,
    value: -1,
    height: 10,
};

const mazeArray = [];

for (let i = 0; i < 72; i++) {
    const row = [];
    for (let j = 0; j < 40; j++) {
        row.push(mazeWall.name);
    }
    mazeArray.push(row);
}
console.log(mazeArray);
console.log(mazeArray[25][25]);

function setup() {
    frameRate(30);
    textSize(30);
    textAlign(CENTER);
    createCanvas(canvasWidth, canvasHeight);
}

//Draws the initial grid of the table
function draw() {
    drawMaze();
    drawTable();
}

function drawTable() {
    background(0, 212, 178);
    noStroke();
    for (let i = 0; i < canvasHeight; i += 10) {
        for (let j = 0; j < canvasWidth; j += 10) {
            if (i % 20 == 0) {
                rect(j * 2, i, 10);
                fill(0, 140, 157);
            } else {
                rect(j * 2 + 10, i, 10);
                fill(0, 140, 157);
            }
        }
    }
}

function drawMaze() {
    noStroke();
    rect(0, 0, 10);
    fill(255);
}