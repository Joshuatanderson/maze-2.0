// Make the initial cell the current cell and mark it as visited
// While there are unvisited cells
// If the current cell has any neighbours which have not been visited
    // Choose randomly one of the unvisited neighbours
    // Push the current cell to the stack
    // Remove the wall between the current cell and the chosen cell
    // Make the chosen cell the current cell and mark it as visited
// Else if stack is not empty
    // Pop a cell from the stack
    // Make it the current cell

new p5();
let cols, rows;
    //defines cellsize
let w = 20;

let grid = [];

let current;

let stack = [];




function setup() {
    createCanvas(500, 500);
        //set cellCount
    cols = Math.floor(width / w);
    rows = Math.floor(height / w);
    frameRate(30);
        //generate rows
    for (let j = 0; j < rows; j++) {
            //generate col
        for (let i = 0; i < cols; i++){
                //make new cell
            let cell = new Cell(i, j);
            grid.push(cell);
        }
    }
    current = grid[0];
    let player = new Ball();
}

function draw() {
    background(51);
        //loop through all 
    for(let i = 0; i < grid.length; i++) {
        grid[i].show();
    }
    stroke(200);
    noFill();
    current.visited = true;
        //STEP 1: pick neighbor
    let next = current.checkNeighbors();
    if (next) {
        next.visited = true;
            //STEP 2:
        stack.push(current);
            //STEP 3: remove walls
        removeWalls(current, next);
            //STEP 4: set new current
        current = next;
    } else if (stack.length > 0) {
            //returns last element of stack as new current
        current = stack.pop();
    }
    current.highlight();
    if(stack.length === 0) {  
        player.show();
        player.update();
    }
}

function index(i, j) {
    if(i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
        return -1;
    }
    return i + j * cols;
}

removeWalls = (a, b) => {
    
    //a = current
    //b = neighbor
        //calculates x difference
    let x = a.i - b.i;
        //neighbor is left
    if(x === 1) {
            //remove left wall of current
        a.walls[3] = false;
            //remove right wall of neighbor
        b.walls[1] = false;
    } else if (x === -1) {
        a.walls[1] = false;
        b.walls[3] = false;
    }
        //calculates y difference
    let y = a.j - b.j;
    if(y === 1) {
        a.walls[0] = false;
        b.walls[2] = false;
    } else if (y === -1) {
        a.walls[2] = false;
        b.walls[0] = false;
    }
}








//whitespace