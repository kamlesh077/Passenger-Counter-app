// let count = document.getElementById("count-el").innerText 
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

function save() {
    let countStr = count + "-"
    saveEl.textContent += countStr 
    countEl.textContent = 0
    count = 0
}

function clearAll() {
    countEl.textContent = "0";
    saveEl.textContent = "";
    count = 0;
    console.log("bbb");
}
