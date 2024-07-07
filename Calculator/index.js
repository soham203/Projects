const optValue = document.querySelector("p");
const reset = document.querySelector("#reset");
const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const equal = document.querySelector("#equal");
const add = document.querySelector("#add");
const sub = document.querySelector("#sub");
const mul = document.querySelector("#mul");
const div = document.querySelector("#div");
const decimal = document.querySelector("#decimal");
const del = document.querySelector("#del");

zero.addEventListener("click", () => {
    optValue.innerText = "0";
    const p = document.createElement("p");
    const one = document.createTextNode("0");
    optValue.append(one);
});

one.addEventListener("click", () => {
    optValue.innerText = "1";
});

two.addEventListener("click", () => {
    optValue.innerText = "2";
});

three.addEventListener("click", () => {
    optValue.innerText = "3";
});

four.addEventListener("click", () => {
    optValue.innerText = "4";
});

five.addEventListener("click", () => {
    optValue.innerText = "5";
});

six.addEventListener("click", () => {
    optValue.innerText = "6";
});

seven.addEventListener("click", () => {
    optValue.innerText = "7";
});

eight.addEventListener("click", () => {
    optValue.innerText = "8";
});

nine.addEventListener("click", () => {
    optValue.innerText = "9";
});

add.addEventListener("click", () => {
    optValue.innerText = "+";
});

sub.addEventListener("click", () => {
    optValue.innerText = "-";
});

mul.addEventListener("click", () => {
    optValue.innerText = "x";
});

div.addEventListener("click", () => {
    optValue.innerText = "/";
});

decimal.addEventListener("click", () => {
    optValue.innerText = ".";
});

equal.addEventListener("click", () => {
    optValue.innerText = "=";
});

del.addEventListener("click", () => {
    optValue.innerText = "";
});

reset.addEventListener("click", () => {
    optValue.innerText = "0";
});

