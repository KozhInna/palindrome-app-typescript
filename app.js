var button = document.querySelector("button");
var input = document.querySelector("input");
var output = document.querySelector(".result");
button.addEventListener("click", palindromeHandler);
function palindromeHandler() {
    var text = input.value;
    if (text !== "") {
        var modifiedInput = text.toLowerCase().replace(/\s/g, "");
        var reversedInput = modifiedInput.split("").reverse().join("");
        if (modifiedInput === reversedInput) {
            output.innerHTML = "".concat(text, " - a palindrom \uD83D\uDC4D");
            input.value = "";
        }
        else {
            output.innerHTML = "".concat(text, " - not a palindrom \uD83D\uDC4E");
            input.value = "";
        }
    }
}
