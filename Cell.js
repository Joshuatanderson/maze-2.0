function Cell(i, j) {

    //colNum, rowNum
    this.i = i;
    this.j = j;
    this.walls = [true, true, true, true]
    this.visited = false;

    this.checkNeighbors = () => {
        let neighbors = [];

        let top = grid[index(i, j - 1)];
        let right = grid[index(i + 1, j)];
        let bottom = grid[index(i, j + 1)];
        let left = grid[index(i - 1, j)];

        if (top && !top.visited) {
            neighbors.push(top);
        }
        if (right && !right.visited) {
            neighbors.push(right);
        }
        if (bottom && !bottom.visited) {
            neighbors.push(bottom);
        }
        if (left && !left.visited) {
            neighbors.push(left);
        }
        if (neighbors.length > 0) {
            let r = floor(random(0, neighbors.length));
            return neighbors[r];
        } else {
            return undefined;
        }
    }

    this.highlight = () => {
        let x = this.i * w;
        let y = this.j * w;
        noStroke();
        fill(0, 200, 100, 70);
        rect(x, y, w, w);

    }


    this.show = () => {
        let x = this.i * w;
        let y = this.j * w;


        //draws 4 walls of cell conditionally

        //top
        if (this.walls[0]) {
            line(x, y, x + w, y);
        }
        //right
        if (this.walls[1]) {
            line(x + w, y, x + w, y + w);
        }
        //bottom
        if (this.walls[2]) {
            line(x, y + w, x + w, y + w);
        }
        //left
        if (this.walls[3]) {
            line(x, y, x, y + w);
        }
        //fill visited
        if (this.visited) {
            noStroke();
            fill(100, 0, 200, 80);
            rect(x, y, w, w)
            stroke(200);
        }




        //bool for top, right, bottom, left

    }
}