/* Created By: Pavel Chiragiev */

function addItem (arr, item) {
    arr.push(item);
}

function printList (arr) {
    let message = "";
    for (item in arr) {
        message += $` {item}`;
    }
    alert(message);
}