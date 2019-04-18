function Ball() {
    this.x = w / 2;
    this.y = w / 2;
    this.size = w / 2;
    this.speed = 1;
    this.show = () => {
        circle(this.x, this.y, this.size);
    }
    this.update = () => {
        if(keyCode){
            console.log(this.x, this.y);
            console.log(keyCode === UP_ARROW)
        }
        if (keyCode === UP_ARROW && this.y - this.size / 2 > 0) {
            this.y -= this.speed;
        } else if (keyCode === DOWN_ARROW && this.y + this.size / 2 < height) {
            this.y += this.speed;
        } else if (keyCode === LEFT_ARROW && this.x - this.size / 2 > 0) {
            this.x -= this.speed;
        } else if (keyCode === RIGHT_ARROW && this.x + this.size / 2 < width) {
            this.x += this.speed;
        }
    }
}
