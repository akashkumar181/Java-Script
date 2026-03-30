console.log("Hello, World!");
alert("Welcome to JavaScript!");
//window object is the global object in JavaScript, it represents the browser window and provides various properties and methods to interact with it.
let heading = document.getElementById("heading");
console.log(heading);
let paragraph = document.getElementsByClassName("paragraph");
console.log(paragraph);
let tag = document.getElementsByTagName("p");
console.log(tag);
//querySelector() method returns the first element that matches a specified CSS selector(s) in the document.
let query = document.querySelector("#heading");
console.log(query);
let allQuery = document.querySelectorAll("p");
console.log(allQuery);
//tagName, className, id, innerHTML, textContent, style, etc are some of the properties of DOM elements that can be accessed and manipulated using JavaScript.
let headingTag = document.getElementById("heading");
console.log(headingTag.tagName);
let headingClass = document.getElementById("heading");
console.log(headingClass.className);
let headingId = document.getElementById("heading"); 
console.log(headingId.id);
let headingInnerHTML = document.getElementById("heading");
console.log(headingInnerHTML.innerHTML);
//innerHTML property allows you to get or set the HTML content of an element, while textContent property allows you to get or set the text content of an element.
console.log(document.firstChild);
console.log(document.lastChild);
console.log(document.childNodes);
console.log(document.children);
//access then manipulate the text content of an element using textContent property
let paragraphText = document.querySelector(".paragraph");
console.log(paragraphText.textContent);
paragraphText.textContent = "This is the updated text content.";
//inner text property is similar to textContent but it also parses the HTML tags and returns the text content with the tags included.
let paragraphInnerText = document.querySelector(".paragraph");
console.log(paragraphInnerText.innerText);
paragraphInnerText.innerText = "This is the updated inner text.";