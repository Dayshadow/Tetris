class Tetrimino {
    constructor(x, y, type, rotation_state = 0) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.rs = rotation_state;
        this.data = tData[this.type].rotationStates[this.rs];
    }

}