//height, width, bg, fontSize, textAlign

class options {
  createDiv(height, width, bg, fontSize, textAlign) {
    let div = document.createElement('div');

    div.style.cssText = `width: ${width};height: ${height};background-color: ${bg};font-size: ${fontSize};text-align: ${textAlign};`;

    div.textContent = "text";
    document.body.appendChild(div);
  }
}

const square = new options();

square.createDiv("100px", "100px", "red", "18px", "center");