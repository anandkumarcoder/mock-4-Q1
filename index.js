const input = document.querySelector("#input");
const button = document.querySelector("#btn");
const output = document.querySelector(".output");

button.addEventListener("click", showMessage)

function showMessage() {
    let inputText = input.value;
    if (inputText === "Tanvi") {
        output.innerText = `${inputText} : She is the best CEO ever!`
    } else if (inputText === "Tanay") {
        output.innerText = `${inputText} : He is our FUNNY mentor!`
    } else if (inputText === "Swapnil") {
        output.innerText = `${inputText} : He helps us CONQUER jobs!`
    } else if (inputText === "Akanksha") {
        output.innerText = `${inputText} :She is our CHEERFUL Interviewer!`
    } else {
        output.innerText = `${inputText} :Sorry i dont have nay message for this word`
    }



}