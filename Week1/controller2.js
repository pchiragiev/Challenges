/* Created By: Pavel Chiragiev */

function changeHeading () {
    document.getElementById("top-messsage").innerHTML = "Working, Please Wait";
    setTimeout (() => {document.getElementById("top-messsage").innerHTML = "Waiting"}, 5000);
}

document.getElementById("change").addEventListener("click", changeHeading);