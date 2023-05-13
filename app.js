const listItems = document.querySelector("#list-items");
const btn = document.querySelector("#btn");
const input = document.querySelector("#input");
const trash = document.querySelectorAll(".trash");
const addNewItem = (value) => {
    console.log(value);
    let elLI = document.createElement("li");
    let elTrash = document.createElement("span");
    let colorValue = document.createElement("span");
    colorValue.className = "value";
    if (value.startsWith("url")) {
        colorValue.style.fontSize = "15px";
        colorValue.textContent = value;
    }
    colorValue.textContent = value;
    colorValue.style.color = value;
    elLI.append(colorValue);
    elTrash.className = "fa-solid fa-trash trash";
    elLI.appendChild(elTrash);
    elLI.className = "item";
    elLI.style.background = value;
    listItems.append(elLI);
};

let valueArr = [];
btn.addEventListener("click", () => {
    let value = input.value;
    if (valueArr.includes(value)) {
        return false;
    } else if (value.includes(".")) {
        valueArr.push(input.value);
        input.value = "";
        value = `url(${value.trim()})`;
        addNewItem(value);
        console.log(valueArr);
    } else {
        valueArr.push(input.value);
        input.value = "";
        value = value.trim();
        addNewItem(value);
        console.log(valueArr);
    }
});

listItems.addEventListener("click", (e) => {
    let target = e.target;
    target.nodeName === "SPAN" && target.parentElement.remove();
});
