/* Created By: Pavel Chiragiev */

function addItem () {
    let item = document.getElementById("inputHobby").value;
    let addedItem = document.createElement("li");
    addedItem.innerHTML = item;
    document.getElementById('hobbies').appendChild(addedItem);
}

function printList () {
    let list = document.getElementById("hobbies").getElementsByTagName('li');
    let message = "";
    for (let i = 0; i < list.length; ++i) {
        message += ` ${list[i].innerHTML}`;
    }
    console.log(message);
    alert(message);
}

document.getElementById("add").addEventListener("click", addItem);
document.getElementById("display").addEventListener("click", printList);