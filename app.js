var button =  document.getElementById("send");
var newItem =  document.getElementById("userItem");

button.addEventListener("click", doStuff);

function doStuff() {
	var node = document.createElement("li");                 // Create a <li> node
	var textnode = document.createTextNode(userItem.value);  // Create a text node
	node.appendChild(textnode);                              // Append the text to <li>
	document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"

};
