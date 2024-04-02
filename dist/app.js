"use strict";
const button = document.querySelector("button");
const input = document.querySelector("input");
const output = document.querySelector(".result");
button.addEventListener("click", palindromeHandler);
function palindromeHandler() {
    const text = input.value;
    if (text !== "") {
        const modifiedInput = text.toLowerCase().replace(/\s/g, "");
        const reversedInput = modifiedInput.split("").reverse().join("");
        if (modifiedInput === reversedInput) {
            output.innerHTML = `${text} - a palindrome 👍`;
            input.value = "";
        }
        else {
            output.innerHTML = `${text} - not a palindrome 👎`;
            input.value = "";
        }
    }
}
//# sourceMappingURL=app.js.map