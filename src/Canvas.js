class Canvas {
    constructor (query) {
        const el = document.querySelector(query);
        const ctx = el.getContext("2d");
        const { height, width } = el.getBoundingClientRect();

        el.height = height;
        el.width = width;

        Object.assign(this, { ctx, el, height, width });
    }
}
export default Canvas;