class Options {

    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.background = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    createDiv(text) {
        let elem = document.createElement('div');
        let parent = document.querySelector('body');
        parent.appendChild(elem);
        elem.innerHTML = text;
        elem.style.cssText = `height : ${this.height}; width: ${this.width}; background: ${this.background}; font-size: ${this.fontSize}; text-align: ${this.textAlign};`;
    }

}

let div = new Options('100px', '100px', 'red', '22px', 'center');

div.createDiv('Привет, как дела?');

let box = document.querySelector('div');

console.log(box);


