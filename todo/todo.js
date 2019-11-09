var mainElement = createContainer("main")
document.body.appendChild(mainElement)

var controlsContainer = createContainer("controls")
mainElement.appendChild(controlsContainer)

var todosContainer = createContainer("todos")
mainElement.appendChild(todosContainer)

var textInput = createInput("text")
controlsContainer.appendChild(textInput)

var submitButton = createInput("button")
submitButton.value = "Add"
controlsContainer.appendChild(submitButton)
submitButton.onclick = addEntry

function createContainer(className) {
    var mainElement = document.createElement("div")
    mainElement.classList.add(className)
    return mainElement
}

function createInput(type) {
    var input = document.createElement("input")
    input.type = type
    return input
}

function addEntry() {

    var entryContainer = createContainer("entry")
    todosContainer.appendChild(entryContainer)

    var checkbox = createInput("checkbox")
    entryContainer.appendChild(checkbox)
    checkbox.onclick = function() {
        entryContainer.remove()
    }

    var entryText = document.createElement("span")
    entryText.innerText = textInput.value

    entryContainer.appendChild(entryText)

    textInput.value = ""
}

