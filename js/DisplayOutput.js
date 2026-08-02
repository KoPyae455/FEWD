
function showConfirm() {
    let answer = confirm("Are you sure?");
    if (answer) {
        console.log("You clicked OK");
    }
    else {
        console.log("You clicked Cancel");
    }
}
//prompt box
function showPrompt() {
    let name = prompt("Please enter your name:", "John Doe");
    if(name){
        console.log("Hello, " + name + "!");
        document.getElementById("nameOutput").textContent = "Hello, " + name + "!";

    }
    else{
        console.log("User cancelled the prompt.");
    }
}
//Add new list item
function addItem() {
    var listItem = document.createElement("li");
    listItem.textContent = "New Item";
    document.getElementById("myList").appendChild(listItem);
}