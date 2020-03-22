let keyboard = document.querySelector('.keyboard');
let display = document.querySelector(".display");
// let key = document.querySelectorAll(".key.p");

keyboard.onclick = function (event) {
    event.preventDefault();

    let button = event.target;
    let x = button.getAttribute("data-x");
    let y = button.getAttribute("data-y");
    let key = keysCollection[x][y];

    display.textContent += key.sign;
};

let alphabet = ["йцукенгшщзхъ", "фывапролджэ", "ячсмитьбю."];
let keysCollection = [];
let index = 0;
for (let i = 0; i < alphabet.length; i++) {
    keysCollection.push([]);
    for (let j = 0; j < alphabet[i].length; j++) {
        let новаяБуква = {
            sign: alphabet[i][j],
            x: i,
            y: j,
            index: index
        };

        keysCollection[i].push(новаяБуква);
        index++;
    }
}

let keyboardLineHtmlTag = "<div class=\"keyboard-line\">";
let keyLineHtmlTag = "<button class=\"button key\" type=\"button\" data-x=\"xVariable\" data-y=\"yVariable\" data-index=\"indexVariable\">signVariable</button>";
let closeTag = "</div>";

let resultHtml = "";

for (let i = 0; i < keysCollection.length; i++) {
    resultHtml += keyboardLineHtmlTag;
    for (let j = 0; j < keysCollection[i].length; j++) {
        let newLine = keyLineHtmlTag;

        newLine = newLine
            .replace('indexVariable', keysCollection[i][j].index.toString())
            .replace("signVariable", keysCollection[i][j].sign)
            .replace("xVariable", keysCollection[i][j].x)
            .replace("yVariable", keysCollection[i][j].y);

        resultHtml += newLine;
    }
    resultHtml += closeTag;
}

let resultHtmlObject = $(resultHtml);

$(".keyboard").append(resultHtmlObject);

let мойНовыйДивчик = $("<div></div>");

let parentsOfMyKeyboard = $('.keyboard').parents;