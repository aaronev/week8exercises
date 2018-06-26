// document.getElementsByClassName("two")[0].style.backgroundColor="pink"
var newDiv = document.createElement("div")

newDiv.id="hello"

var newH1 = document.createElement("h1")

var h1WithTextContent = newH1.textContent="created new h1 element with text"

document.getElementById('hello').appendChild(newH1)

var newPTag = document.createElement("p")

var pElementWithText = newPTag.textContent = "p text node"
var h1WithTextNode = newH1.appendChild(pElementWithText)

var newImg = document.createElement('img')
var newButton = document.createElement('button')

function changeImgAttrSrcAndAlt(imgId, src=null, alt=null) {
  var img = document.getElementById(imgId)
  if (src || alt) {
    img.src=src
    img.alt=alt
  } 
}