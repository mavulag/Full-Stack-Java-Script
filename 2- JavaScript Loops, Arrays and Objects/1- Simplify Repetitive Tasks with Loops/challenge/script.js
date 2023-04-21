var red, green, blue;
var rgbColor;
var html = '';

function randomRGB() {
    Math.floor(Math.random() * 256);
}

function randomColor() {
    var color = 'rgb(';
    color = randomRGB() + ',';
    color = randomRGB() + ',';
    color = randomRGB() + ')';
    return color;
}

function print(message) {
    document.write(message);
}

for (var counter = 0; counter < 10; counter += 1) {
    rgbColor = randomColor();
    html += '<div style="background-color:' + rgbColor + '"></div>';
}

print(html);