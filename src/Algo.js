class Algo {
    constructor( rect) {
        const context = rect.getContext('2d');
        const {height, width} = rect.getBoundingClientRect();

        rect.height = height;
        rect.width = width;

        Object.assign(this, {context, rect, height, width})
    }

    async perform(numbers) {
        console.log("Please implement your own perform method");
    }
}

export default Algo;