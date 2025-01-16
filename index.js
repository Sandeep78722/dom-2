// first answer
function addParagraph() {
    var container = document.getElementById("container");
    var paragraph = document.createElement("p");
    paragraph.innerText = "added paragraph";
    container.appendChild(paragraph)
}

// second answer
function removeLastElement() {
    var container = document.getElementById('remove-container');
    var paragraphs = container.getElementsByClassName('p');
    if (paragraphs) {
        paragraphs[1].remove(); 
    }
}

// third answer
function toggleBox() {
    var container = document.getElementById("box-container");
    var Box = document.getElementById("new-box");

    if (Box) {
        container.removeChild(Box);
    } 
    else {
        var box = document.createElement("div");
        box.id = "new-box";
        box.style.width = "300px";
        box.style.height = "300px";
        box.style.border = "3px solid green"
        box.style.backgroundColor = "yellow";
        container.appendChild(box);
    }

}


// fourth answer
function changeButtonText(button) {
    button.textContent = "Button Clicked!";
}


// fifth answer
function ListItems() {
    var list = document.getElementById("list");
    var listItem = document.createElement("li");
    listItem.innerText = "hello";
    var listItem1 = document.createElement("li");
    listItem1.innerText = "hello-world";
    list.append(listItem, listItem1);
}

function removeListItem() {
    var list = document.getElementById("list");
    if (list.lastChild) {
        list.removeChild(list.lastChild);
    }
}