
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
// change text in <p> element
function changeText() {
    document.getElementById("example").textContent = "This is the new text.";
}

// change background color of <p> element
    // array to store colors
    var colors = ["white", "lightblue", "lightgreen", "lightyellow", "lightpink", "lightgray"];
    var index = 0;
function changeBackgroundColor() {

    document.getElementById("example").style.backgroundColor = colors[index];
    index++;
    if (index == colors.length) {
        index = 0;
    }
}
// change image source attribute
function changeImage() {
    var image = document.getElementById("myImage").setAttribute("src","../uploads/monkey.jpg");
}
