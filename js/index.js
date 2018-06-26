document.getElementsByClassName("two")[0].style.backgroundColor="pink"
var newDiv = document.createElement("div")

newDiv.id="hello"

var newH1 = document.createElement("h1")

newH1.textContent="created new h1 element with text"

document.getElementById('hello').appendChild(newH1)