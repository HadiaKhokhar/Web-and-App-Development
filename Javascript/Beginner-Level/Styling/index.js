function fontBig(elementId, sizeInRem) {
    elementId.style.fontSize = `${sizeInRem}rem`

}

function changeColor(elementId, color){
    if (color){
        elementId.style.color = color;
    }
    else{
        var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        elementId.style.color = randomColor;
    }
    
}

var para = document.getElementsByTagName('p');
for (var i = 0; i < para.length; i++){
    changeColor(para[i]);
    fontBig(para[i], 2);
}