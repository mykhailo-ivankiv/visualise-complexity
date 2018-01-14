class MyNumber {
    // TODO: make good undraw function
    constructor(x, y, number) {
        Object.assign(this, {x, y, number});
    }

    getPath() {
        const path = new Path2D();
        path.arc(this.x, this.y, 7.5*2, 0, Math.PI * 2, true); // Outer circle
        return path;
    }

    draw(ctx) {
        ctx.save();
        ctx.fillStyle = `#2980b9`;
        ctx.fill(this.getPath());
        ctx.fillStyle = "#ecf0f1";
        ctx.fillText(this.number, this.x - 6, this.y + 3);
        ctx.restore();
    }

    undraw(ctx) {
        ctx.save();
        ctx.globalCompositeOperation = 'destination-out';
        ctx.fillStyle = `black`;
        ctx.fill(this.getPath());
        ctx.fillText(this.number, this.x - 6, this.y + 3);
        ctx.restore();
    }
}


export default MyNumber;