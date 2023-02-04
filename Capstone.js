//item object
function Item(type, src, comments, likes, dateAdded) {
    this.type = type
    this.src = src
    this.comments = comments
    this.likes = likes
    this.dateAdded = dateAdded
}

//check session storage
function loadStore() {
    store = []
    //reload existing input across pages
    if ("viewLater" in sessionStorage) {
        store = JSON.parse(sessionStorage.getItem("viewLater"))
    }
    console.log("loadStore works")
    return store
}


//save to session storage
function saveToStore(image) {
    let store = loadStore()
    store.push(image)
    sessionStorage.setItem("viewLater", JSON.stringify(store))
}

//alert
function alertToSave () {
    alert(`You have ${loadStore().length} images in saved for later.`)
}

//saveImage URL on click
function saveImage(url) {
    let imageInfo = new Item("image", url, "", 0, new Date)
    saveToStore(imageInfo)
    alertToSave()
}


