//DOM Manipulation
let title = document.getElementById("title")
let heading = document.createElement("h1")
function headingSavedImages() {
    loadStore()
    if ("viewLater" in sessionStorage) {
        console.log("saved images")
        return "Your saved images"

    } else {
        console.log("no images")
        return "No saved images"
    }

}
heading.innerText = headingSavedImages()
title.appendChild(heading)

//function renderItems (store)
function renderItems() {
    let updateStore = document.getElementById("updateStore")
    let items = loadStore()
    for (i in items) {
        let imageEl = document.createElement("img")
        imageEl.src = items[i].src
        updateStore.appendChild(imageEl)
    }
}

renderItems()
